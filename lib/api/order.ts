import callApi from '../api';
import { iso } from '../types';

export interface OrderItem {
    name: string;
    totalPrice: string; // Keeping this as string b/c of potential float rounding issues
}

export interface OrderObject {
    id: number;
    vetspireId: number;
    total: string;
    totalPaid: string;
    computedStatus: null | 'DELETED' | 'DUE' | 'OPEN' | 'PAID' | 'UNCOLLECTIBLE' | 'VOID';
    status: null | 'DELETED' | 'DUE' | 'OPEN' | 'PAID' | 'UNCOLLECTIBLE' | 'VOID';
    client: null | number;
    patient: null | number;
    orderItems: OrderItem[];
    created: iso;
    stripeToken: string;
    approvedToBill: boolean;
}

class OrderAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (orderId: string): Promise<OrderObject> => {
        const resp = await callApi(this.token, `orders/${orderId}`, 'GET');
        return resp;
    }

    list = async (vetspireId?: string): Promise<Array<OrderObject>> => {
        const query = vetspireId ? `?vetspire_id=${vetspireId}` : '';
        const resp = await callApi(this.token, `orders/${query}`, 'GET');
        return resp.results;
    }

    patch = async (orderId, order: Partial<OrderObject>): Promise<OrderObject> => {
        const resp = await callApi(this.token, `orders/${orderId}/`, 'PATCH', order);
        return resp;
    }

    static mock: OrderObject = {
        id: 123,
        vetspireId: 123,
        total: 'testMock',
        totalPaid: 'testMock',
        computedStatus: null,
        status: null,
        client: null,
        orderItems: [],
        created: '2019-08-23T18:29:16Z',
        stripeToken: '',
        patient: 123,
        approvedToBill: false,
    }
}

export default OrderAPI;
