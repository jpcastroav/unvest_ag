import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from '../config/transaccion';

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
		allTransacciones: (_) =>
			getAsync(),
        transaccionById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createTransaccion: (_, { transaccion }) =>
			generalRequest(`${URL}/`, 'POST', transaccion),
		updateTransaccion: (_, { id, transaccion }) =>
			generalRequest(`${URL}/${id}`, 'PUT', transaccion),
		deleteTransaccion: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;