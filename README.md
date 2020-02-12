# Common

Repository of code, styles, and configurations shared between our various javascript based modules (mobile app, kiosk app, and admin tools).

## Style Guide

### Guide to using Redux

How much to embrace Redux has been one of the ongoing debates of the team.

The advantages of Redux:

- Because Redux is functional and immutable, Redux makes the state predictable
- By logging actions and state, it is easy to understand coding errors, network errors and other forms of bugs that might come up during production.
- Persistance. You can persist some of the app’s state to local storage and restore it after a refresh. This can be really nifty.

The disadvantages of Redux:

- Usage of Redux makes Typescript more difficult. Numerouse Typing related errors have occured in our codebase as a result of Redux hiding errors.
- Redux introduces more "stale" data bugs. Two example:
  - Data loaded earlier in session that needs to be refreshed. Without Redux, this data would automtically be NULL on the screen load, but with Redux needs to be manually cleared and finding the trigger for this is difficult.
  - Data persisted across app versions
- Hard to follow. A simple network request can touch more than 10 different files.

Moving forward here is our plan of record with how to use Redux in the code.

#### Rule #1 - Only use Redux for data that is needed for the initial screen(s)

This means for example. In the current design of the app. The initial screens are those on the bottoms tabs (care summaries, get care, and household). The follow items would be stored in Redux

- Token (logged in or not)
- Client (used for household screen)
- Patients (used for household screen)
- Message History (used for getcare screen)
- Notifications (wraps the initial screens)

The following items will NOT be stored in Redux:

- Appointments (not used in inital screens)
- Location (not used in initial screens)
- Staff (not used in initial screens)
- Medical records
- Encounters
- Invoices

Or for Kiosk:

- Location

And NOT stored in Redux:

- Client/Token
- Patient
- etc.

#### Rule #2 - When using mapToDispatch, functions MUST be typed

Instead of saying `updatePatient: Function`, the type must be `updatePatient: typeof updatePatient`
Note: this might mean that the `dispatch()` wrapper for updatePatient is moved into mapToDisptach instead of being stored in the states/\*.ts files

### Guide for Testing

We aim for 100% automatted testing.

#### Rule #1 - All screens submitted should have "Green" coveraged in the coverage report

#### Rule #2 - Any bug fis should have a related test
