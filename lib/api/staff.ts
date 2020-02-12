import callApi from '../api';

export interface StaffObject {
    id: number;
    clientId: number;
    clientFullname: string;
    clientImage: string;
    designations: string;
    url: string;
    isManager: boolean;
    shortBio: string;
    title: string;
}

class StaffAPI {
    // Staff is public so does not have a token
    // private token: string;

    get = async (staffId: number): Promise<StaffObject> => {
        const resp = await callApi(null, `staff/${staffId}/`, 'GET');
        return resp;
    }

    list = async (): Promise<[StaffObject]> => {
        const resp = await callApi(null, 'staff/', 'GET');
        return resp.results;
    }

    static mock: StaffObject = {
        id: 2,
        clientId: 2,
        clientFullname: 'Test Doctor',
        clientImage: '',
        url: '',
        isManager: true,
        shortBio: '',
        title: '',
        designations: '',
    }
}

export default StaffAPI;
