var PNF = require('google-libphonenumber').PhoneNumberFormat,
  PNT = require('google-libphonenumber').PhoneNumberType;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

var countrycode = require('countrycode');

var formatPhoneNumber = function(phoneNumberStr) {

  var phoneNumber = phoneUtil.parse(phoneNumberStr);

  return {
    "international": phoneUtil.format(phoneNumber, PNF.INTERNATIONAL),
    "national": phoneUtil.format(phoneNumber, PNF.NATIONAL),
    "e164": phoneUtil.format(phoneNumber, PNF.E164)
  }
}

var auxGetCountryCode = function(phoneNumberStr) {
  let phoneNumber = phoneUtil.parse(phoneNumberStr);
  let countryCode = phoneNumber.getCountryCode();

  return countryCode;
}

var getCountyByPhoneNumber = function(phoneNumberStr) {

  let countryCode = auxGetCountryCode(phoneNumberStr);
  let countryName = countrycode.getCountry(countryCode);

  return countryName;
}


var listPossibleCountryCodes = function(phoneNumberStr) {

  let countryCode = auxGetCountryCode(phoneNumberStr);
  let possibleCountryName = countrycode.searchCode(countryCode);

  return possibleCountryName;
}

export {
   formatPhoneNumber, getCountyByPhoneNumber, listPossibleCountryCodes
};
