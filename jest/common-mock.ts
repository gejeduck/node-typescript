/* eslint-disable import/no-named-default */
import * as api from '../lib/api/index';
import * as utils from '../lib/utils';
import Log from '../lib/logging';
import callApi from '../lib/api';
import colors from '../lib/colors';
import Config from '../lib/config';
import fonts from '../lib/fonts';

const asMock = {
    colors,
    callApi,
    Config,
    fonts,
    Log,
    ...api,
    ...utils
};

class AppointmentAPI extends asMock.AppointmentAPI {
    list = async () => [AppointmentAPI.mock]
}
asMock.AppointmentAPI = AppointmentAPI;

class AvailabilityAPI extends asMock.AppointmentAPI {
    list = async () => [AvailabilityAPI.mock]
}
// @ts-ignore
asMock.AvailabilityAPI = AvailabilityAPI;

class ClientAPI extends asMock.ClientAPI {}
asMock.ClientAPI = ClientAPI;

class OrderAPI extends asMock.OrderAPI {
    // @ts-ignore
    list = async () => [OrderAPI.mock]
}
// @ts-ignore
asMock.OrderAPI = OrderAPI;

class SlotAPI extends asMock.SlotAPI {
    list = async () => [SlotAPI.mock]
}
asMock.SlotAPI = SlotAPI;

export default asMock;
