import callApi from '../api';
import { Partial, iso } from '../types';

export interface InteractionObject {
    // id and type
    id: number;
    roomSid: string;
    interactionType: string;

    // who
    customerName: string;
    preview: string;
    caller: number;
    agent: number;
    agentName: string;

    // when
    accepted: iso;
    created: iso;
    connected: iso;
    ended: iso;
    expired: iso;

    // rating
    callerStarRating: number;
    callerStarDescription: string;

    // sla
    enabledAfterSla: boolean;
    sla: number;
}

class InteractionAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (interactionId: number) : Promise<InteractionObject> => {
        const resp = await callApi(this.token, `interactions/${interactionId}/`, 'GET');
        return resp;
    }

    patch = async (
        interactionId: number,
        interaction: Partial<InteractionObject>
    ) : Promise<InteractionObject> => {
        const resp = await callApi(this.token, `interactions/${interactionId}/`, 'PATCH', interaction);
        return resp;
    }

    post = async (
        interaction: Partial<InteractionObject>
    ) : Promise<InteractionObject> => {
        const resp = await callApi(this.token, 'interactions/', 'POST', interaction);
        return resp;
    }
}

export default InteractionAPI;
