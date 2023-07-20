const palindrome = function(s) {
    s.toLowerCase().replace(/[^A-Aa-z0-9]/g,'').split('').sort().join('')
    const rev = s.toLowerCase().replace(/[^A-Aa-z0-9]/g,'').split('').reverse().join('')
    return s === rev

}

const s = "racecar" 
const check = palindrome(s)
console.log(check)