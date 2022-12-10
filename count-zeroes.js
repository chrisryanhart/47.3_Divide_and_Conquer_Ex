function countZeroes(arr, val) {
//   have to find the first zero
// all vars to the right will be counted
// 

let leftIdx = 0;
let rightIdx = arr.length - 1;
let zeroesCount = 0;

while (leftIdx <= rightIdx) {
  // find the middle value
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];



  if (middleVal === 1 && arr[middleIdx+1]===0){
    zeroesCount = arr.length - 1 - middleIdx;  //subtract 1 to get the total

    console.log(zeroesCount);
    return zeroesCount;
    // middleVal is too small, look at the right half
  } else if (arr[0] === 0){
    zeroesCount = arr.length

    return zeroesCount;
  }else if (middleVal === 1) {
    leftIdx = middleIdx + 1;
  }
  else if (middleVal === 0) {
    // middleVal is too large, look at the left half
    rightIdx = middleIdx - 1;
  } 
  
//   else {
//     // we found our value!
//     return zeroesCount;
//   }
}

// return the end count
return zeroesCount;


}

module.exports = countZeroes


function binarySearch(arr, val) {


  }