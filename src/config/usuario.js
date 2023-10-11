require('dotenv').config()

export const url = process.env.USERS_HOST;
export const port = process.env.USERS_PORT;
export const entryPoint = process.env.USUARIO_ENTRYPOINT;

export const urlAuth = process.env.USERS_HOST;
export const portAuth = process.env.USERS_PORT;
export const entryPointAuth = process.env.VALIDATE_ENTRYPOINT;