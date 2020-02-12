import callApi from '../api';

export interface AvailabilityObject {
    date: string;
    timeSlots: Array<{
        timeSlot: string;
        staffIds: Array<number>
    }>
}

class AvailabilityAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    list = async (locationId: number, staffId: number | null = null,
        appointmentType: string | null = null) : Promise<[AvailabilityObject]> => {
        let query = `availabilities/?location_id=${locationId}`;
        if (staffId) {
            query += `&staff_id=${staffId}`;
        }
        if (appointmentType) {
            query += `&appointment_type=${appointmentType}`;
        }
        const resp = await callApi(this.token, query, 'GET');
        return resp.results;
    }

    static mock = {
        date: '2021-12-01',
        timeSlots: [{
            timeSlot: '09:00',
            staffIds: [1]
        }]
    }
}

export default AvailabilityAPI;
