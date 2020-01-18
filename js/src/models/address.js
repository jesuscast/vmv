/**
 * Import the list of countries.
 */
const {countriesRaw}  = require('../constants');
const Country = require('./country')
const countries = [];

const countriesKeys = Object.keys(countriesRaw);
for(let i = 0; i < countriesKeys.length; i++) {
    const country = countriesRaw[countriesKeys[i]];
    countries.push(new Country(country))
}

/**
 * Returns the country with the matching name
 * @param {string} countryName 
 */
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
    /**
     * Required fields to create an address object.
     * Without those the build method throws an exception
     */
    static requiredFields = ['city', 'country', 'region', 'addressLine1', 'zip', 'recipient_name'];

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
        this.recipient_name = fields.recipient_name;
        this.recipient_email = fields.recipient_email || 'andres@iisac.mx';
        this.recipient_phone_number = fields.recipient_phone_number || '014157861530';
    }

    /**
     * Returns an Address object by receiving a dictionary of address fields and values.
     * If requiredFields are not present, this method will throw an exception.
     * @param {dictionary} fields 
     */
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