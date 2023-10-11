import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/transaccion';
import {validate} from "../auth/validate";

var amqp = require('amqplib');

const URL = `http://${url}:${port}/${entryPoint}`;`amqp://${url}`

function generateUuid() {
	return Math.random().toString() + Math.random().toString() + Math.random().toString();
};

async function getAsync(){
	return await amqp.connect(`amqp://${url}`).then(function(conn) {
		return conn.createChannel().then(function(ch) {
    		return new Promise(function(resolve) {
      			var corrId = Math.random().toString() + Math.random().toString() + Math.random().toString();
      			function maybeAnswer(msg) {
        			if (msg.properties.correlationId === corrId) {
          				resolve(msg.content.toString());
        			}
      			}

      			var ok = ch.assertQueue('', {exclusive: true})
        			.then(function(qok) { return qok.queue; });

      			ok = ok.then(function(queue) {
        			return ch.consume(queue, maybeAnswer, {noAck: true})
          				.then(function() { return queue; });
      			});

      			ok = ok.then(function(queue) {
        			console.log(' [x] Requesting');
        			ch.sendToQueue('rpc_queue', Buffer.from("request"), {
          				correlationId: corrId, replyTo: queue
        			});
      			});
    		});
  		})
  		.then(function(response) {
    		console.log(' [.] Response %s', response);
			return JSON.parse(response);
  		})
  		.finally(function() { conn.close(); });
	}).catch(console.warn);
}

const resolvers = {
	Query: {
		allTransacciones: (_, __, context) => {
			return validate(context.token || '').then(() => {
				return getAsync()
			}).catch(err => {
				return err;
			});
		},
        transaccionById: (_, { id }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'GET').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
	},
	Mutation: {
		createTransaccion: (_, { transaccion }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/`, 'POST', transaccion).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		updateTransaccion: (_, { id, transaccion }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'PUT', transaccion).then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		},
		deleteTransaccion: (_, { id }, context) => {
			return validate(context.token || '').then(() => {
				return generalRequest(`${URL}/${id}`, 'DELETE').then(r => {
					return r;
				})
			}).catch(err => {
				return err;
			});
		}
	}
};

export default resolvers;