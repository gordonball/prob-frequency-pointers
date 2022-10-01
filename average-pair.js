"use strict";

// add whatever parameters you deem necessary & write docstring
/**accepts a sorted array and a value and returns true/false if two elements's average equal that value */
function averagePair(nums, avg) {
  let left = 0;
  let right = nums.length - 1;




  while (left < right) {
    const calculatedAvg = calcAvg(nums[left], nums[right]);

    if (calculatedAvg > avg) {
      right--;
    }
    if (avg > calculatedAvg) {
      left++;
    }

    if (calculatedAvg === avg) {
      return true;
    }
  }
  return false;

}


function calcAvg(leftVal, rightVal) {
  const average = (leftVal + rightVal) / 2;
  return average;
}


//one certainty is that the arrays are sorted already
//receiving two inputs, an assorted array and an average number
//outputs either true/false
//there could be multiple pairs that equal the average
/*

Ex: input 1:[1, 2, 3, 4] input2: checkAvg = 2
pt1 = 1
pt2 = 4
avg = 2.5



while(avg > checkAvg){
  pt2--;

pt1 = 1
pt2 = 3
avg = 2

if(avg === checkAvg)
  return true

}


function calcAvg(pt1, pt2){
  return
}


*/




