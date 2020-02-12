/* eslint-disable */
/* global __DEV__ */

const __DEV__ = window.__DEV__;

/* eslint-enable */

const Config = {
    GooglePlacesAPIKey: '',
    MapBoxAPIKey: '',
    ApiRoot: '',
    StripePublicKey: '',
    ImageResolution: 1600,
};

// Production Configuration
// @ts-ignore
if (!__DEV__) {
    Config.ApiRoot = '';
    Config.StripePublicKey = '';
}

// For agent tools, this can't be configured locally because docker pulls the master
// artifact from AWS. If we are on the local server, we should be using the
// local server. Run agent tools on 3000 to test against staging.com
if (window.location && window.location.hostname === 'localhost' && window.location.port === '8000') {
    Config.ApiRoot = 'http://localhost:8000/v1/';
}

// Special Local Configurations
// ANDROID
// https://developer.android.com/studio/run/emulator-networking
// Config.ApiRoot  = 'http://10.0.2.2:8000/v1/';

// APPLE
// Used for local testing on iOS
// Config.ApiRoot  = 'http://localhost:8000/v1/';

export default Config;
