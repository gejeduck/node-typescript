import callApi from '../api';
import { iso } from '../types';

type encounterType = 'SOAP' | 'PHONE' | 'NOTE' | 'PRIVATE';

export interface EncounterObject {
    id: number;
    vetspireId: number;
    patient: string;
    agent: string;
    encounterType: encounterType;
    start: iso;
    reason: string;
    callDescription: string;
    plan: string;
}

class EncounterAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (encounterId: string): Promise<EncounterObject> => {
        const resp = await callApi(this.token, `encounters/${encounterId}`, 'GET');
        return resp;
    }

    list = async (): Promise<Array<EncounterObject>> => {
        const resp = await callApi(this.token, 'encounters/', 'GET');
        return resp.results;
    }
}

export default EncounterAPI;
