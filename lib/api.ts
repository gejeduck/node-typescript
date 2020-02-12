/**
 * api.js
 * This file contains helper function for making API calls
 *
 */

/* global __DEV__ */
import { camelizeKeys, decamelizeKeys } from 'humps';
import Config from './config';
import Log from './logging';


Log.info('using API root: ', Config.ApiRoot);

/**
 * callApi() returns a Promise object that wraps a JSON object
 * The data gets camelized and normalized before being returned
 */
const callApi = async (
    userToken: string | null, endpoint: string, method: string = 'GET', data: any = null, multipart: boolean = false
): Promise<any> => {
    const fullUrl = buldFullUrl(endpoint);
    const decamelizedData = decamelizeKeys(data);

    let fetchOptions = buildFetchOptions(method, decamelizedData, multipart);
    fetchOptions = addAuthToHeaders(fetchOptions, userToken);

    const response = await fetch(fullUrl, fetchOptions);

    if (!response.ok) {
        const json = camelizeKeys(await response.json());

        throw json;
    }

    if (response.status === 204) {
        return {};
    }

    const camelizedJson = camelizeKeys(await response.json());
    return camelizedJson;
};

/**
 * buldFullUrl() combines the path and root endpoint
 */
const buldFullUrl = (endpoint: string) => {
    if (endpoint.indexOf(Config.ApiRoot) === -1) {
        return Config.ApiRoot + endpoint;
    }
    return endpoint;
};


/**
 * buildFetchOptions() builds the request data object.
 * Handles multipart and JSON
 * Also, GET, POST, PUT, PATCH, etc.
 */
const buildFetchOptions = (method: string, data: any, multipart: boolean) => {
    let fetchOptions = {};

    if (!multipart) {
        fetchOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method,
            body: method === 'GET' ? null : buildRequestData({ ...data }),
        };
    } else {
        const formData = new FormData();

        const requestData = data;
        for (const key in requestData) {
            if (Object.prototype.hasOwnProperty.call(requestData, key)) {
                formData.append(key, requestData[key]);
            }
        }

        fetchOptions = {
            headers: { 'Content-Type': 'multipart/form-data' },
            method,
            body: formData,
        };

        // @ts-ignore
        if (global.__REMOTEDEV__) {
            console.error("'multipart' query is not working with debugging mode")
        }
    }

    return fetchOptions;
};


const addAuthToHeaders = (fetchOptions, userToken: string | null) => {
    const updatedOptions = fetchOptions;
    if (userToken) {
        updatedOptions.headers = Object.assign(fetchOptions.headers, { Authorization: userToken });
    }
    return updatedOptions;
};


const buildRequestData = (data) => {
    if (data) {
        return JSON.stringify(data);
    }

    return null;
};

export default callApi;
