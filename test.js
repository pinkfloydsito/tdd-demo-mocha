var assert = require('assert');
var index = require('./index');

`Leap Years
This short and simple Kata should be performed in pairs using Test Driven Development (TDD).

Prior to 1582, the Julian Calendar was in wide use and defined leap years as every year divisible by 4. However, it was found in the late 16th century that the calendar year had drifted from the solar year by approximately 10 days. The Gregorian Calendar was defined in order to thin out the number of leap years and to more closely align the calendar year with the solar year. It was adopted in Papal countries on October 15, 1582, skipping 10 days from the Julian Calendar date. Protestant countries adopted the Gregorian Calendar after some time.

The Gregorian Calendar is quite accurate, but could be made more accurate by adding an additional rule that eliminates years divisible by 4000 as leap years. But I guess we’ll cross that bridge when we come to it. Consider adding this rule as a second story as an extension to the exercise.

User Story:

As a user, I want to know if a year is a leap year, So that I can plan for an extra day on February 29th during those years.

Acceptance Criteria:

All years divisible by 400 ARE leap years (so, for example, 2000 was indeed a leap year),
All years divisible by 100 but not by 400 are NOT leap years (so, for example, 1700, 1800, and 1900 were NOT leap years, NOR will 2100 be a leap year),
All years divisible by 4 but not by 100 ARE leap years (e.g., 2008, 2012, 2016),
All years not divisible by 4 are NOT leap years (e.g. 2017, 2018, 2019).`

describe('divisible by 400', function() {
	it('should return true if the value is divisible by 400', function() {
		assert.equal(index.isLeapYear(400), true);
		assert.equal(index.isLeapYear(1200), true);
	});
});

describe('divisible by 4', function() {
	it('should return true if the value is divisible by 4', function() {
		assert.equal(index.isLeapYear(2020), true);
	});

	it('should return false if the value is not divisible by 4', function() {
		assert.equal(index.isLeapYear(2017), false);
	});
});

describe('divisible by 100', function() {
	it('should return false if the value is divisible by 100 but it is not divisible by 400', function() {
		assert.equal(index.isLeapYear(1700), false);
		assert.equal(index.isLeapYear(300), false);
	});

});



