import callApi from '../api';

export interface PhoneAuthObject {
    phoneNumber: string;
    verificationCode?: string;
}

class PhoneAuthAPI {
    post = async (phoneAuth: PhoneAuthObject) : Promise<PhoneAuthObject> => {
        const resp = await callApi(null, 'phone-auth/', 'POST', phoneAuth);
        return resp;
    }
}

export default PhoneAuthAPI;
