import callApi from '../api';
import { Partial } from '../types';

export interface PatientObject {
    id: number;
    url: string;
    household: number;
    vetspireId: number;
    species: string;
    breed: string;
    latestWeightLbs: number;
    image: string;
    name: string;
    color: string;
    spayedOrNeutered: boolean;
    birthdate: string;
    sex: string;
    obtainedFrom: string;
    microchip: string;
    hasAllergies: boolean;
    anesthesiaComplications: boolean;
    deceasedDate: string;
    isActive: boolean;
    isMember: boolean;
    vcprStatus: number;
}

class PatientAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (patientId: number): Promise<PatientObject> => {
        const resp = await callApi(this.token, `patients/${patientId}/`, 'GET');
        return resp;
    }

    list = async (houseHold: string | null = null): Promise<[PatientObject]> => {
        const resp = await callApi(this.token, houseHold ? `patients/?household_id=${houseHold}` : 'patients/', 'GET');
        return resp.results;
    }

    patch = async (patientId: number, patient: Partial<PatientObject>): Promise<PatientObject> => {
        const resp = await callApi(this.token, `patients/${patientId}/`, 'PATCH', patient, !!patient.image);
        return resp;
    }

    patchImage = async (patientId: number, image): Promise<PatientObject> => {
        const resp = await callApi(this.token, `patients/${patientId}/`, 'PATCH', { image }, true);
        return resp;
    }

    post = async (patient: Partial<PatientObject>): Promise<PatientObject> => {
        const resp = await callApi(this.token, 'patients/', 'POST', patient, !!patient.image);
        return resp;
    }

    static mock: PatientObject = {
        id: 2,
        url: '',
        image: '',
        name: 'Complete Unit',
        breed: 'Persian',
        species: 'Cat',
        latestWeightLbs: 100,
        sex: 'F',
        birthdate: '2019-03-07',
        spayedOrNeutered: true,
        vetspireId: 376619,

        household: 1,
        color: 'white',
        obtainedFrom: '',
        microchip: '',
        hasAllergies: false,
        anesthesiaComplications: false,
        deceasedDate: '',
        isActive: true,
        isMember: true,
        vcprStatus: 32,
    }
}

export default PatientAPI;
