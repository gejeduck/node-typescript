import callApi from '../api';
import { object2query } from '../utils';
import {
    appointmentType, optionType, iso, Partial
} from '../types';

export interface AppointmentObject {

    // Identifiers
    id: number;
    url: string;

    // Who, what, when, and where
    start: iso;
    end: iso;
    client: string;
    patient: string;
    location: string;
    staff: string;

    // Notes and Reason
    appointmentType: appointmentType,
    reasonForVisitChoice: optionType;
    reasonForVisitDescription: string;
    recentChangeInDiet: boolean;
    hasTraveled: boolean;
    hasMeds: boolean;
    status: string;

    // Cancellation
    cancellationReason: string;
    cancellationDetails: string;
}

class AppointmentAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (appointmentId : string) : Promise<AppointmentObject> => {
        const resp = await callApi(this.token, `appointments/${appointmentId}`, 'GET');
        return resp;
    }

    list = async (staffId: number | null = null, startDate: string | null = null,
        householdID: number | null = null) : Promise<Array<AppointmentObject>> => {
        const queryString = 'appointments/';

        const queryParameters = object2query({
            staff_id: staffId,
            start__date: startDate,
            client__household_id: householdID
        });

        const resp = await callApi(
            this.token,
            queryString + queryParameters,
            'GET'
        );
        return resp.results;
    }

    patch = async (
        appointmentId: number,
        appointment: Partial<AppointmentObject>
    ) : Promise<AppointmentObject> => {
        const resp = await callApi(this.token, `appointments/${appointmentId}/`, 'PATCH', appointment);
        return resp;
    }

    post = async (appointment: Partial<AppointmentObject>) : Promise<AppointmentObject> => {
        const resp = await callApi(this.token, 'appointments/', 'POST', appointment);
        return resp;
    }

    delete = async (
        appointmentId: number,
    ) : Promise<AppointmentObject> => {
        const resp = await callApi(this.token, `appointments/${appointmentId}/`, 'DELETE');
        return resp;
    }

    static mock: AppointmentObject = {
        id: 123,
        url: 'testMock',
        start: '2019-08-23T18:29:16Z',
        end: '2019-08-23T18:29:16Z',
        client: 'testMock',
        patient: 'testMock',
        location: 'testMock',
        staff: 'testMock',
        appointmentType: 'SCHEDULED' as appointmentType,
        reasonForVisitChoice: 0 as optionType,
        reasonForVisitDescription: 'testMock',
        recentChangeInDiet: true,
        hasTraveled: true,
        hasMeds: true,
        status: 'testMock',
        cancellationReason: 'testMock',
        cancellationDetails: 'testMock',
    }
}

export default AppointmentAPI;
