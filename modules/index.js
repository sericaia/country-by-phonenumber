import { formatPhoneNumber, getCountyByPhoneNumber, listPossibleCountryCodes } from './countryManager';

var phoneNumberStr = process.argv[2];

console.log(`The country for ${phoneNumberStr} is`, getCountyByPhoneNumber(phoneNumberStr));

// list possible countries and codes
// console.log(listPossibleCountryCodes(phoneNumberStr));
