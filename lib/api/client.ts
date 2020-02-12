import callApi from '../api';
import { Partial } from '../types';

export interface ClientObject {
    id: number;
    url: string;
    token: string;
    household: number;
    phoneNumber: string;
    fullName: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    email: string;
    image: string | null;
    vetspireId: number;
    twilioSid: string;
    firstName: string;
    lastName: string;
    whitelisted: boolean;
    phoneHash?: string;
    isActive: boolean;
}

class ClientAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (clientId: number): Promise<ClientObject> => {
        const resp = await callApi(this.token, `clients/${clientId}/`, 'GET');
        return resp;
    }

    list = async (householdId: string | null = null, phoneNumber: string | null = null)
        : Promise<[ClientObject]> => {
        let queryString = 'clients/';
        if (householdId != null) {
            queryString = `clients/?household_id=${householdId}`;
        }
        if (phoneNumber != null) {
            queryString = `clients/?phone_number=${phoneNumber}`;
        }
        const resp = await callApi(
            this.token,
            queryString,
            'GET'
        );
        return resp.results;
    }

    patch = async (clientId: number, client: Partial<ClientObject>): Promise<ClientObject> => {
        const resp = await callApi(this.token, `clients/${clientId}/`, 'PATCH', client, !!client.image);
        return resp;
    }

    patchImage = async (clientId: number, image): Promise<ClientObject> => {
        const resp = await callApi(this.token, `clients/${clientId}/`, 'PATCH', { image }, true);
        return resp;
    }

    post = async (client: Partial<ClientObject>): Promise<ClientObject> => {
        const resp = await callApi(this.token, 'clients/', 'POST', client, !!client.image);
        return resp;
    }

    static mock: ClientObject = {
        id: 123,
        vetspireId: 123,
        url: '',
        token: '12345',
        household: 1,
        phoneNumber: '(123) 456-7890',
        fullName: 'John Doe',
        address: '1234 Main Street',
        city: 'Anytown',
        state: 'CA',
        zipcode: '12345',
        email: 'john@doe.com',
        image: null,
        twilioSid: '1234',
        firstName: 'John',
        lastName: 'Doe',
        whitelisted: true,
        isActive: true,
    }
}

export default ClientAPI;
