import callApi from '../api';

export interface SignatureObject {
    patient: string;
    client: string;
    image: {
        uri: any,
        name: string,
        type: string,
    };
    encounterId?: string;
}

class SignatureAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    post = async (data: SignatureObject): Promise<void> => {
        const resp = await callApi(this.token, 'signatures/', 'POST', data, true);
        return resp;
    }
}

export default SignatureAPI;
