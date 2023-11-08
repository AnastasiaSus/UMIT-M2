const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')


//TODO Unit Tests to implement
describe('celsiusToFahrenheit()', function () {

    // test proper conversion
    it('should be equal to 50', function () {
        expect(apiTemperature.celsiusToFahrenheit(10)).to.equal(50);
    })

    // water freezing
    it('should be equal to 32 (water freezing)', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    })

    // absolute zero
    it('should be equal to -460 (absolute zero check)', function () {
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-273.15))).to.equal(-460);
    })

     // water boiling
     it('should be equal to 212 (water boiling)', function () {
        expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    })

});


describe('fahrenheitToCelcius()', function () {

    // test proper conversion
    it('should be equal to -12.2222', function () {
        expect(apiTemperature.fahrenheitToCelcius(10)).to.equal(-12.2222);
    })

    // water freezing
    it('should be equal to 0 (water freezing)', function () {
        expect(apiTemperature.fahrenheitToCelcius(32)).to.equal(0);
    })

    // absolute zero
    it('should be equal to -273.15 (absolute zero check)', function () {
        expect(apiTemperature.fahrenheitToCelcius(-460)).to.equal(-273.15);
    })

     // water boiling
     it('should be equal to 100 (water boiling)', function () {
        expect(apiTemperature.fahrenheitToCelcius(212)).to.equal(100);
    })

});



describe('getGreetingDependOnTime()', function () {

    // expect evening to return evening greeting
    it('should be Guten Nacht', function () {
        myDate = new Date('2020-01-01 21:00')
        expect(apiTemperature.getGreetingDependOnTime(myDate)).to.equal('Guten Nacht');
    })

    // expect morning to return morning greeting
    it('should be Guten Morgen', function () {
        myDate = new Date('2020-01-01 7:00')
        expect(apiTemperature.getGreetingDependOnTime(myDate)).to.equal('Guten Morgen');
    })

    // expect early morning to return morning greeting
    it('should be Guten Nacht (before begin time)', function () {
        myDate = new Date('2020-01-01 5:00')
        expect(apiTemperature.getGreetingDependOnTime(myDate)).to.equal('Guten Nacht');
    })

    // expect late night to return evening greeting
    it('should be Guten Nacht (after end time)', function () {
        myDate = new Date('2020-01-01 23:00')
        expect(apiTemperature.getGreetingDependOnTime(myDate)).to.equal('Guten Nacht');
    })

    // check corner case 6.00
    it('should be Guten Morgen (corner case exact begin time)', function () {
        myDate = new Date('2020-01-01 6:00')
        expect(apiTemperature.getGreetingDependOnTime(myDate)).to.equal('Guten Morgen');
    })

    // check corner case 22.00
    it('should be Guten Nacht (corner case exact end time)', function () {
        myDate = new Date('2020-01-01 22:00')
        expect(apiTemperature.getGreetingDependOnTime(myDate)).to.equal('Guten Nacht');
    })


});