import callApi from '../api';

export interface TokenObject {
    token: string;
}

class TokenAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (PlatformOS: string): Promise<TokenObject> => {
        const resp = await callApi(this.token, `twilio-auth/?os=${PlatformOS}`, 'GET');
        return resp;
    }

    static mock = {
        token: '123'
    }
}

export default TokenAPI;
