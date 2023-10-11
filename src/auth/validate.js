import {generalRequest, getRequest} from "../utilities";
import {entryPointAuth, portAuth, urlAuth} from "../config/usuario";

const URLAuth = `http://${urlAuth}:${portAuth}/${entryPointAuth}`;

export function validate (token) {
    const tokenWithoutBearer = token.replace('Bearer ', '');
    return generalRequest(`${URLAuth}?token=${tokenWithoutBearer}`, 'GET').then(r => {
        if (r[0]) {
            return r[1];
        } else {
            throw new Error("Invalid token");
        }
    });

}