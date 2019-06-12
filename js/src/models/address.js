const {CORSURL, creds, countriesRaw, $scope, sampleTransaction}  = require('../constants');
const Country = require('./country')
const countries = [];

const countriesKeys = Object.keys(countriesRaw);
for(let i = 0; i < countriesKeys.length; i++) {
    const country = countriesRaw[countriesKeys[i]];
    countries.push(new Country(country))
}


function findCountryByName(countryName) {
    const countriesKeys = Object.keys(countries);
    for(let i = 0; i < countriesKeys.length; i++) {
        const country = countries[countriesKeys[i]];
        if (country.name === countryName) {
            return country;
        }
    }
    return null;
}
class Address {
    static requiredFields = ['city', 'country', 'region', 'addressLine1', 'zip'];

    constructor(fields) {
        this.city = fields.city;
        if (fields.country.name) {
            this.country = Country.build(fields.country)
        } else {
            this.country = findCountryByName(fields.country);
        }
        this.region = fields.region;
        this.addressLine1 = fields.addressLine1;
        this.addressLine2 = fields.addressLine2;
        this.zip = fields.zip;
    }

    static build(fields) {
        return new Promise((resolve, reject) => {
            const fieldNames = Address.requiredFields;
            let unfilledFields = [];
            for(let i = 0; i < fieldNames.length; i++) {
                if (!fields[fieldNames[i]]) {
                    unfilledFields.push(fieldNames[i])
                }
            }

            if (unfilledFields.length > 0) {
                return reject(`Please fill out the field ${unfilledFields.join(', ')}`);
            }
            return resolve(new Address(fields))
        });
    }
}

module.exports = Address;