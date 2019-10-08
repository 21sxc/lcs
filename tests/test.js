const test = require('tape').test
const lcsRecursive = require('../src/index').lcsRecursive
const lcsDP = require('../src/index').lcsDP


test('Longest Common Subsequence test case', function(t) {
    let s1 = 'ABCD'
    let s2 = 'EACB'
    let shouldNum = 2 // AB
    t.equal(lcsRecursive(s1, s2), shouldNum, `lcs of ${s1} and ${s2} should ${shouldNum}`);
    let s3 = 'ABCD'
    let s4 = 'EDCA'
    let shouldNum2 = 2
    t.notEqual(lcsRecursive(s3, s4), shouldNum2, `lcs of ${s3} and ${s4} should not ${shouldNum2}`)
    t.end();
});

test('Longest Common Subsequence test case using DP algorithm', function(t) {
    let s1 = 'ABCD'
    let s2 = 'EACB'
    let shouldNum = 2 // AB
    t.equal(lcsDP(s1, s2), shouldNum, `lcs of ${s1} and ${s2} should ${shouldNum}`);
    let s3 = 'ABCD'
    let s4 = 'EDCA'
    let shouldNum2 = 2
    t.notEqual(lcsDP(s3, s4), shouldNum2, `lcs of ${s3} and ${s4} should not ${shouldNum2}`)
    t.end();
});


