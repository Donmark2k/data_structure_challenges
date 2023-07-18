/*
Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 
*/

const validAnagram = function (s,t) {
    return m(s) ===m(t)
}

function m(str) {
    return str.toLowerCase().replace(/[^A-Za-z0-9]/g,'').split('').sort().join('')
}

const s = "anagram"
const t = "nagaram"
const valid = validAnagram(s,t)
console.log(valid)