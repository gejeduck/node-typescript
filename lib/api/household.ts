import callApi from '../api';
import { Partial } from '../types';

export interface HouseholdObject {
    id: number;
    stripeCustomerId: string;
    stripeToken: string;
    stripeBrand: string;
    stripeLast4: string;
    stripeExpMonth: number;
    stripeExpYear: number;
    cancellationReason: string;
    cancellationDetails: string;
    isMember: boolean;
}


class HouseholdAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (householdId: number) : Promise<HouseholdObject> => {
        const resp = await callApi(this.token, `households/${householdId}/`, 'GET');
        return resp;
    }

    list = async () : Promise<[HouseholdObject]> => {
        const resp = await callApi(this.token, 'households/', 'GET');
        return resp.results;
    }

    patch = async (
        householdId: number, household: Partial<HouseholdObject>) : Promise<HouseholdObject> => {
        const resp = await callApi(this.token, `households/${householdId}/`, 'PATCH', household);
        return resp;
    }


    post = async (household: Partial<HouseholdObject>) : Promise<HouseholdObject> => {
        const resp = await callApi(this.token, 'households/', 'POST', household);
        return resp;
    }

    static mock = {
        id: 123,
        stripeCustomerId: '123',
        stripeCardId: '123',
        stripeBrand: '123',
        stripeLast4: '123',
        stripeExpMonth: 12,
        stripeExpYear: 2019,
        cancellationDate: null,
        cancellationReason: null,
        cancellationDetails: null,
        isMember: true,
    }
}

export default HouseholdAPI;
