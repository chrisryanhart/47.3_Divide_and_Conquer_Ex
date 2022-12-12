function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let leftVal = arr[leftIdx];
    let rightIdx = arr.length - 1;
    let rightVal = arr[rightIdx];
    // leftIncreaseing = false?
    // if (leftVal === val) return leftIdx;
    // if (rightVal === val) return rightIdx;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
        rightVal = arr[rightIdx];
        leftVal = arr[leftIdx];
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        //  
        // if (leftIdx < val && val < middleVal){

        // }
            
        if (val === middleVal){
            return middleIdx;
        } else if (leftIdx === rightIdx){
            return -1;
        } 
        else if (val < middleVal && middleVal < rightVal){
            rightIdx = middleIdx - 1;
        }else if (val > leftVal && val < middleVal){
            rightIdx = middleIdx-1;
        }else if (val < leftVal && leftVal < middleVal){
            leftIdx = middleIdx+1;
        }else if (val > middleVal){
            leftIdx = middleIdx + 1;
        }
    
        // if (middleVal < val) {
        //     // middleVal is too small, look at the right half
        //     leftIdx = middleIdx + 1;
        // } else if (middleVal > val) {
        //     // middleVal is too large, look at the left half
        //     rightIdx = middleIdx - 1;
        // } else {
        //     // we found our value!
        //     return middleIdx;
        // }
        }
    
    // left and right pointers crossed, val isn't in arr
}

module.exports = findRotatedIndex

// if (val === middleVal){
//     return middleIdx;
// } else if (val < middleVal && middleVal < rightVal){
//     rightIdx = middleIdx - 1;
// }else if (val < middleVal && middleVal > rightVal){
//     leftIdx = middleIdx + 1;
// }else if (val > middleVal){
//     leftIdx = middleIdx + 1;
// }