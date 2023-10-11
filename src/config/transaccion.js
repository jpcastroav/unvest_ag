require('dotenv').config()

export const url = process.env.TRANSACTIONS_HOST;
export const port = process.env.TRANSACTIONS_PORT;
export const entryPoint = process.env.TRANSACCION_ENTRYPOINT;