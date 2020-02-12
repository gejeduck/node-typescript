import callApi from '../api';
import { Partial } from '../types';

export interface MedicalRecordObject {
    id: number;
    url: string;
    patient: number;
    clinicName: string;
    clinicAddress: string;
    clinicPhone: string;
    complete: boolean;
    lastSent: string | null;
    lastEmailSent: string | null;
}

class MedicalRecordAPI {
    private token: string;

    constructor(token: string) {
        this.token = token;
    }

    get = async (medicalRecordId : string) : Promise<MedicalRecordObject> => {
        const resp = await callApi(this.token, `medical-records/${medicalRecordId}`, 'GET');
        return resp;
    }

    list = async () : Promise<[MedicalRecordObject]> => {
        const resp = await callApi(this.token, 'medical-records/', 'GET');
        return resp.results;
    }

    patch = async (
        medicalRecordId: number,
        medicalRecord: Partial<MedicalRecordObject>
    ) : Promise<MedicalRecordObject> => {
        const resp = await callApi(this.token, `medical-records/${medicalRecordId}/`, 'PATCH', medicalRecord);
        return resp;
    }

    patchSend = async (
        medicalRecord: Partial<MedicalRecordObject>
    ) : Promise<MedicalRecordObject> => {
        const resp = await callApi(this.token, `medical-records/send/`, 'PATCH', medicalRecord);
        return resp;
    }

    post = async (medicalRecord: Partial<MedicalRecordObject>) : Promise<MedicalRecordObject> => {
        const resp = await callApi(this.token, 'medical-records/', 'POST', medicalRecord);
        return resp;
    }
}

export default MedicalRecordAPI;
