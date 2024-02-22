/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/
let num1 = [0, 1, 0, 3, 12];
let n = num1.sort();
console.log(n);
let num2 = n.splice(0, 2);
let nn = [...n, ...num2]
console.log(nn)

/*
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/
let n1 = [4, 9, 5];
let n2 = [9, 4, 9, 8, 4];
let n3 = [];
for (let i = 0; i < n1.length;i++) {
    for (let j = 0; j < n2.length;j++) {
        if (n1[i] == n2[j] && !n3.includes(n1[i])) {
            n3.push(n1[i]);

        }
    }
}
console.log(n3)
/*

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

*/
let numb = [34, 7, 21, 89, 54, 10, 91, 67]
let min = numb[0];
let max = numb[0];
for (let i = 1; i < numb.length ; i++) {
    if (numb[i] < min) {
        min = numb[i]
        console.log("min value in given array is   " + min)
        console.log("index of min value is " + numb.indexOf(numb[i]))
    }
    if (numb[i] > max) {
        max = numb[i]
        console.log("max value in given array is   " + max)
        console.log("index of max value is " + numb.indexOf(numb[i]))
    }

}
//for (let i = 0; i <= numb.length - 1; i++) {
    





/*

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

let inputArr = [1, 2, 3, 4, 2, 5, 6, 1, 6]
let newarr = [];
for (let i = 0; i < inputArr.length - 1; i++) {
    if (!newarr.includes(inputArr[i])) {
        newarr.push(inputArr[i]);
    }
}
console.log(newarr);
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

*/
const nums = [2, 4, 5, 2, 1, 2];
const k = 2
let count = 0;

for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] == k) {
        count = count + 1;
    }

}
console.log(" number of occurence of 2 in a given string is :  " + count);
/*

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/
const arr = [2, 4, 7, 8, 11, 14]; // sort array !!
const target = 18;
let total = 0;
function twosum(nums, target) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            total = arr[i] + arr[j];
            if (total == target) {
                console.log([arr.indexOf(arr[i]), arr.indexOf(arr[j])]);
            }
        }
    }
}
twosum(arr, target);
