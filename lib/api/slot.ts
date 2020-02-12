import callApi from '../api';
import { object2query } from '../utils';
import {
    appointmentType
} from '../types';

export interface SlotObject {

    // Identifiers
    id: number;

    // Scheduling
    start: string;
    end: string;
    location: string;
    appointmentType: appointmentType;
    staff: string;
}

class SlotAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    list = async (
        staffId: number | null = null,
        appointmentType: appointmentType | null = null,
        locationId: number | null = null,
        begin: string | null = null,
        end: string | null = null,
    ): Promise<Array<SlotObject>> => {
        const queryString = 'slot/';

        const queryParameters = object2query({
            staff_id: staffId,
            appointment_type: appointmentType,
            location_id: locationId,
            begin,
            end
        });

        const resp = await callApi(
            this.token,
            queryString + queryParameters,
            'GET'
        );
        return resp.results;
    }

    static mock: SlotObject = {
        id: 920,
        start: '2019-09-20T13:00:00-07:00',
        end: '2019-08-28T12:30:00-07:00',
        location: '',
        appointmentType: 'SCHEDULED',
        staff: ''
    }
}

export default SlotAPI;
