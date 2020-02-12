/**
 * logging.js
 * This file contains helper functions for logging.
 * Ensures that logging only happens in development
 *
 */
/* eslint-disable */
/* global __DEV__ */
const __DEV__ = window.__DEV__;
/* eslint-enable */

function Log() { }

/* eslint-disable no-console */
Log.info = (...args) => {
    // @ts-ignore
    if (__DEV__) {
        console.log(...args);
    }
};

Log.error = (...args) => {
    // @ts-ignore
    if (__DEV__) {
        console.error(...args);
    }
};

Log.warn = (...args) => {
    // @ts-ignore
    if (__DEV__) {
        console.warn(...args);
    }
};

export default Log;
