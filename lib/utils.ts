import moment from 'moment';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
    CANINE_COLORS, CAT_BREEDS, DOG_BREEDS, FELINE_COLORS
} from './data';
import { Species } from './types';

export function getIDFromUrl(url: string): number {
    return parseInt(url.split('/').slice(-2)[0], 10);
}

export function isValidName(fullName: string): boolean {
    return fullName.trim().split(/\s+/).length >= 2;
}

export function isValidEmail(email: string): boolean {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase(),
    );
}

export function isValidZipCode(zipCode: string): boolean {
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode);
}

export function isValidPhone(phoneNumber: string): boolean {
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, 'US');
    if (parsedPhoneNumber) {
        return parsedPhoneNumber && parsedPhoneNumber.isValid();
    }
    return false;
}

export function assert(condition: any, message?: string): void {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}

export function trunc(text: string, length = 20): string {
    return text.length > length ? `${text.substr(0, length)}...` : text;
}

export function object2query(obj: Object): string {
    return Object.keys(obj).reduce(
        (prev, cur) => {
            let firstIndex = '';
            if (obj[cur]) {
                if (prev === '') {
                    firstIndex = `?${cur}=${obj[cur]}`;
                } else {
                    firstIndex = `${prev}&${cur}=${obj[cur]}`;
                }
            } else {
                firstIndex = prev;
            }

            return firstIndex;
        }, ''
    );
}

export function ageToDatetime(age: string): Date {
    const date = new Date();
    date.setFullYear(date.getFullYear() - Number(age.replace(/\D/g, '')));
    return date;
}

export function datetimeToAge(birthdate: string, showFriendlyFormattedBirthday: boolean): string {
    const age = birthdate && moment(birthdate).isValid() && moment().diff(birthdate, 'years', true);

    if (!age || (showFriendlyFormattedBirthday && age < 1)) {
        return '';
    }

    if (!showFriendlyFormattedBirthday) {
        return `${Math.round(age)}`;
    }

    if (age < 0.5) {
        const yearsToWeek = 52.1429;
        return `${Math.round(age * yearsToWeek)} weeks`;
    }

    if (age <= 2) {
        const yearsToMonths = 12.0;
        return `${Math.round(age * yearsToMonths)} months`;
    }

    return `${Math.round(age)} years`;
}

export const maximumAge: Date = new Date();
export const minimumAge: Date = new Date(new Date().setFullYear(new Date().getFullYear() + 30));


export function datetimeToStringDate(datetime: Date): String {
    // There's a bug in iOS Date Picker, where the date returned is
    // timezone adjusted. This logic removes that adjustment to
    // return the correct date:
    // https://github.com/facebook/react-native/issues/8169#issuecomment-329373743
    const keepOffset = true;
    return moment(datetime).toISOString(keepOffset).split('T')[0];
}

export function stringDateToDatetime(date: string): Date {
    let momentizedDate = moment(date);
    if (!momentizedDate.isValid()) {
        momentizedDate = moment();
    }
    return momentizedDate.toDate();
}

export function getBreedList(species: Species): String[] {
    const breedList: String[] = [];
    for (const breed of species === 'Dog' ? DOG_BREEDS : CAT_BREEDS) {
        breedList.push(breed);
        breedList.push(`${breed} (mixed)`);
    }

    // The breed list from Vetspire has duplicates.
    // Since we can't fix the list, de-dupe here.
    return Array.from(new Set(breedList));
}

export function getColorList(species: Species): String[] {
    const colorsList = species === 'Dog' ? CANINE_COLORS : FELINE_COLORS;

    // The color list from Vetspire has duplicates.
    // Since we can't fix the list, de-dupe here.
    return Array.from(new Set(colorsList));
}
