/*
Valid Parentheses
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

const isValid = function(s) {
    const valid = {
        "[": "]",
        "{": "}",
        "(": ")",
    }

    let result = []
    for (const num of s) {
        if (num in valid) {
            result.push(num)
        } else {
            const top = result.pop()
            if (!top || valid[top] !==num) {
                return false
            }
        }
    }
    return result.length ===0
}

const s = "()[]{}"
const check = isValid(s)
console.log(check)