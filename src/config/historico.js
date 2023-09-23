require('dotenv').config()

export const url = process.env.STOCKS_HOST;
export const port = process.env.STOCKS_PORT;
export const entryPoint = process.env.HISTORICO_ENTRYPOINT;