//? Problem 1
function sumArray(a){
    let sum=0;
    let i=0;
    for (i; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
const sum = sumArray([1, 2, 3, 4, 5]);

console.log(sum); //* Output: 15

//? Problem 2
function findMaxNumber(a){
    let max= a[0];
    let i=1;
    for(i; i< a.length; i++) {
        if (a[i]>max){
            max= a[i];
        }
    }
    return max;
}
const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);

console.log(maxNumber); //* Output: 20

//? Problem 3
function filterOddNumbers(a) {
    let i=0;
    let new_a=[]
    for(i; i< a.length; i++) {
        if (a[i]%2 !=0){
            new_a.push(a[i])
        }
    }
    return new_a
}
const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);

console.log(oddNumbers);
const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);

console.log(oddNumbers); //* Output: [1, 3, 5]

//? Problem 4
function isPalindrome(word) {
    function rev(str){
        return str.split('').reverse().join('');
    }

    let new_word = rev(word);
    if (word == new_word){
        return true;
    }
    else{
        return false;
    }

}
const isPalindromeResult = isPalindrome('radar');
const isNonPalindromeResult = isPalindrome('hello');

console.log(isPalindromeResult); //* Output: true
console.log(isNonPalindromeResult); //* Output: false

//? Problem 5
function findMissingNumber(a){
    let length = (a.length)+1;
    let new_a = []
    for(let i=1; i< length+1 ;i++){
        new_a.push(i);
    }
    for(let i=0; i< length+2 ;i++){
        if (new_a[i] != a[i]){
            return new_a[i];
        }
    }
}
const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);

console.log(missingNumber); //* Output: 4

//? Problem 6
function findDuplicates(a){
    let new_a =[]
    let dup =[]
    for (let i=0; i< a.length ; i++){
        if(!new_a.includes(a[i]) == true){
            new_a.push(a[i]);
        }
        else{
            dup.push(a[i]);
        }
    }
    return dup;
}
const duplicateNumbers = findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);

console.log(duplicateNumbers); //* Output: [2, 4]
