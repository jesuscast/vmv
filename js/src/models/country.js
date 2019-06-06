class Country {
    constructor(countryElement) {
        this.name = countryElement[0];
        this.iso2 = countryElement[1];
        this.iso3 = countryElement[2];
        this.iso3Currency = countryElement[3];
        this.inEurope = countryElement[4];
    }

    static build(fields) {
        return new Country([
            fields.name,
            fields.iso2,
            fields.iso3,
            fields.iso3Currency,
            fields.inEurope
        ]);
    }
}

module.exports = Country;