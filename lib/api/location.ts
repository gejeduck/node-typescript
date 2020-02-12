import callApi from '../api';

export interface LocationObject {
    id: number;
    url: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    latitude: number;
    longtitude: number;
    image: string;
}

class LocationAPI {
    // Location is public so does not have a token
    // private token: string;

    get = async (locationId: string): Promise<LocationObject> => {
        const resp = await callApi(null, `locations/${locationId}`, 'GET');
        return resp;
    }

    list = async (): Promise<Array<LocationObject>> => {
        const resp = await callApi(null, 'locations/', 'GET');
        return resp.results;
    }

    static mock: LocationObject = {
        id: 123,
        url: '',
        name: 'Location',
        address: '1234 Main Street',
        city: 'Anytown',
        state: 'CA',
        zipcode: '12345',
        latitude: 12.345,
        longtitude: 12.345,
        image: null,
    }
}

export default LocationAPI;
