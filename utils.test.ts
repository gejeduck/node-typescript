import {
    isValidEmail, isValidName, isValidPhone, isValidZipCode, getIDFromUrl
} from './index'

test('checks if phone is valid', (): any => {
    expect(isValidPhone('6192324567')).toBe(true);
    expect(isValidPhone('12345')).toBe(false);
});

test('checks if name is valid', (): any => {
    expect(isValidName('Crazy Pete')).toBe(true);
    expect(isValidName('Crazy')).toBe(false);
});

test('checks if email is valid', (): any => {
    expect(isValidEmail('crazypete@aol.com')).toBe(true);
    expect(isValidEmail('crazypete.com')).toBe(false);
});

test('checks if zipcode is valid', (): any => {
    expect(isValidZipCode('90049')).toBe(true);
    expect(isValidZipCode('912')).toBe(false);
});

test('returns id from URL', (): any => {
    expect(getIDFromUrl('/23/someurl')).toBe(23);
});