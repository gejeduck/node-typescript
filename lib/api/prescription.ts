import callApi from '../api';
import { iso } from '../types';


export interface PrescriptionObject {
    id: number;
    vetspireId: number;
    dispensed: string;
    refills: number;
    computedStatus: null | 'DELETED' | 'DUE' | 'OPEN' | 'PAID' | 'UNCOLLECTIBLE' | 'VOID';
    created: iso;
    start: iso;
    stop: iso;
    product: number;
    patient: number;
    prescriber: number;
    status: 'ACTIVE' | 'ANY' | 'COMPLETED' | 'DECLINED' | 'DELETED' | 'PENDING' | 'STOPPED';
    fullfilment: null | 'PLACED' | 'IN_FULLFILMENT' | 'CANCELED' | 'COMPLETED' | 'APPROVED' | 'DENIED' | 'SHIPPED';
    sig: string;
    note: string;
    productName: string;
    productUrl: string;
}


class PrescriptionAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (PrescriptionId: string): Promise<PrescriptionObject> => {
        const resp = await callApi(this.token, `prescriptions/${PrescriptionId}`, 'GET');
        return resp;
    }

    list = async (): Promise<Array<PrescriptionObject>> => {
        const resp = await callApi(this.token, 'prescriptions/', 'GET');
        return resp.results;
    }

    static mock = {
        id: 123,
        vetspireId: 123,
        status: 'COMPLETED',
        created: '2019-08-23T18:29:16Z',
        start: '2019-08-23T18:29:16Z',
        patient: 1
    }
}

export default PrescriptionAPI;
