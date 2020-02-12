export const CPRForm = {
    title: 'Cardiopulmonary resuscitation (CPR)',
    details:
`Cardiopulmonary Resuscitation (CPR)
CPR is an emergency procedure performed to restore the breathing and heartbeat when either or both have ceased. By authorizing CPR, I agree to pay a minimum fee of $400 in addition to other fees previously authorized,
regardless of my pet’s survival.

I understand that after exercising reasonable medical judgment and determining there appears to be no hope for medical success, CPR efforts will cease. I understand that I will be contacted as soon as possible if an arrest occurs. I also understand that despite the best efforts of the doctors and staff my pet may not regain his/her normal mental and physical health.`,
    consentText: 'I authorize CPR',
    consentSubtext:
'By unchecking this box, I am declining CPR. I understand that a DNR (Do Not Resuscitate) order is made so that in the event of a cardiac and/or pulmonary arrest, life-saving measures will not be initiated.',
    checkedByDefault: true,
    required: false,
    recordField: 'cprConsent',
};

export const MedicalAndFinancialForm = {
    title: 'Medical and Financial Consent',
    details:
`I consent to the provision of medical services for my animal at Modern Animal. The preliminary diagnostic and therapeutic plans will be discussed with me along with the attendant risks and costs. I understand that no guarantee is made as to the result or cure. I agree to be available by phone at all times during my pet's hospitalization for consultation with my pet's doctor(s). In the event that I cannot be reached, I authorize the doctors and staff to perform any procedures necessary for my pet's well being. I assume financial
responsibility for all charges incurred to patient(s) and agree to pay 100%of the low end of the estimated cost at the time of admission. Additional deposits will be required if additional care of procedures are needed. I further agree to pay the balance ofcharges when patient is released. I understand that credit is not available and I agree to pay the balance of all charges in full at discharge;
However, if i still owe a balance after discharge, I permit such balance to becharged to my charge card account without signature. I am financially able to meet any commitments made. In the event of a check returned NSF or stop payment, a $25 fee will be added to the account. A service charge of 1.5% per month(18% per annum) is applied to all balances due over thirty days. A billing charge of $2.50 isapplied to all balances over 30 days.
I certify the information given by me is correct and I have read and consent to the terms of the medical and financial agreement. I am the pet's owner, or I am authorized as the pet's agent or representative to execute the above and accept its terms on behalf of the pet's owner, or I assume individually all financial responsibility by signing below.`,
    consentText: 'I agree to and accept the above terms. I am digitally signing this document.',
    consentSubtext: '',
    checkedByDefault: false,
    required: true,
    recordField: 'medicalConsent',
};
