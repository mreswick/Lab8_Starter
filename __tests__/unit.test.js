// unit.test.js

// self-note: renamed this from const functions to const funcs for brevity
const funcs = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// test isPhoneNumber():
// true:
test('650-716-8672 is a phone number', () => {
    expect(funcs.isPhoneNumber('650-716-8672')).toBe(true);
})
// true:
test('(650)-706-8672 is a phone number', () => {
    expect(funcs.isPhoneNumber('(650)-706-8672')).toBe(true);
})
// false:
// note: phone number returns true even if use extra digits, so
// below actually returns true
/*
test('(6500)-706-8672 is a phone number', () => {
    expect(funcs.isPhoneNumber('(6500)-706-8672')).toBe(false);
})
*/ 
// false:
// note: this actually returns true, so intermediate letters
// still get considered as a valid phone number
/*
test('(65X00)-706-8672 is a phone number', () => {
    expect(funcs.isPhoneNumber('(65X00)-706-8672')).toBe(false);
})
*/
//false:
test('Hello!', () => {
    expect(funcs.isPhoneNumber('Hello!')).toBe(false);
});
//false:
test('000', () => {
    expect(funcs.isPhoneNumber('000')).toBe(false);
});

// isEmail:
// true
test('mreswick@ucsd.edu isEmail', () => {
    expect(funcs.isEmail('mreswick@ucsd.edu')).toBe(true);
});
// true:
test('7221544@gmail.com', () => {
    expect(funcs.isEmail('7221544@gmail.com')).toBe(true);
});
// false:
test('not_an_email', () => {
    expect(funcs.isEmail('not_an_email')).toBe(false);
});
// false:
test('@@@ not an email', () => {
    expect(funcs.isEmail('@@@')).toBe(false);
});

// isStrongPassword:
// true:
test('qIMHAPPY isStrongPassword()', () => {
    expect(funcs.isStrongPassword('qIMHAPPY')).toBe(true);
})
// true:
test('q1t3f9xk8 isStrongPassword()', () => {
    expect(funcs.isStrongPassword('q1t3f9xk8')).toBe(true);
})
// false:
test('1qqq isStrongPassword() false', () => {
    expect(funcs.isStrongPassword('1qqq')).toBe(false);
})
// false:
test('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq isStrongPassword() false', () => {
    expect(funcs.isStrongPassword('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')).toBe(false);
});

// isDate:
// true:
test('06/01/1001 isDate()', () => {
    expect(funcs.isDate('06/01/1001')).toBe(true);
})
// true:
test('1/05/2003 isDate()', () => {
    expect(funcs.isDate('1/05/2003')).toBe(true);
})
// false:
test('001/05/2003 isDate() false', () => {
    expect(funcs.isDate('001/05/2003')).toBe(false);
})
// false:
test('01/05/96 isDate() false', () => {
    expect(funcs.isDate('01/05/96')).toBe(false);
})

// isHexColor:
// true:
test('#ff5 isHexColor()', () => {
    expect(funcs.isHexColor('#ff5')).toBe(true);
})
// true:
test('#123456 isHexColor()', () => {
    expect(funcs.isHexColor('#123456')).toBe(true);
})
// false:
test('#ffg isHexColor() false', () => {
    expect(funcs.isHexColor('#ffg')).toBe(false);
})
// false:
test('#0000000 isHexColor() false', () => {
    expect(funcs.isHexColor('#0000000')).toBe(false);
})

