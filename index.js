var PNF = require('google-libphonenumber').PhoneNumberFormat,
    PNT = require('google-libphonenumber').PhoneNumberType;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

var countrycode = require('countrycode');

var tel = phoneUtil.parse(process.argv[2]);

console.log('Formating:');
console.log(phoneUtil.format(tel, PNF.INTERNATIONAL));
console.log(phoneUtil.format(tel, PNF.NATIONAL));
console.log(phoneUtil.format(tel, PNF.E164));


var countryCode = tel.getCountryCode();
console.log('Country phone number code:', countryCode);

var countryName = countrycode.getCountry(countryCode);
console.log('Country name:', countryName);

var possibleCountryName = countrycode.searchCode(countryCode);
console.log('List possible country name:', possibleCountryName);
