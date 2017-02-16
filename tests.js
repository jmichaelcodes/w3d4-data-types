var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(value) {
    return value === null;
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(value) {
    return value === undefined
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower(value) {
    return value.toLowerCase();
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(value) {
    return value.toUpperCase();
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(word, howMany) {
    return word.repeat(howMany);
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord(word, start, end) {
    return word.slice(start, end);
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

function splitWord(array, splitCharacter) {
    return array.split(splitCharacter);
}

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(sentence, word) {
    return sentence.indexOf(word);
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(sentence, word) {
    return sentence.includes(word);
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(sentence) {
    var zipCode = sentence.match(/\d/g);
    zipCode = String(zipCode);
    var finalZipCode = zipCode.replace(/,/g , "");
    return finalZipCode;
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber(sentence) {
    var phoneNumber = sentence.replace(/[^0-9]/g , "");
    return phoneNumber;
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber(string) {
    return Number(string);
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(number) {
    return number + 1;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(value) {
    return value % 3 === 0;
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber(number) {
    return Math.random() * number;
}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(number) {
    return Math.ceil(number);
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment() {
    return moment().format('dddd');
    // Look at moment.js docs to find how to return the day name, like Wednesday
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(myName) {
    var myReturnedName = {
        name: myName
    };

    return myName.name;
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');

// Arrays
function getFirstItem(array) {
    return array[0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
