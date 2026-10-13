/* Declare a function isPalindrome(str) that takes a string as an input.

Return true if the given string is a palindrome. Otherwise, return false.

Algorithm:
    Step1: Define a function isPalindrome that has a parameter str.
    Step2: define str as a new string that is the original string with all spaces removed and converted to lowercase.   
    Step3: use for loop that initializes a variable i to 0 and checks if i is less than the length of the string divided by 2 and increments i by 1 in each iteration.
    Step4: Inside the loop, use if statement to check if the characters at symmetric positions are not equal. If they are not equal, return false.
    Step5: If the loop completes without returning false, return true.
    Step6: use console.log to display the results of the function calls */
function isPalindrome(str) {
    str = str.split(' ').join('').toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }   
           
    }
    return true
  
}  


 console.log(isPalindrome("taco cat")); 
console.log(isPalindrome("red car")); 








