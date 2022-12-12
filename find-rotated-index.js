function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let leftVal = arr[leftIdx];
    let rightIdx = arr.length - 1;
    let rightVal = arr[rightIdx];

  
    while (leftIdx <= rightIdx) {
      // find the middle value
        rightVal = arr[rightIdx];
        leftVal = arr[leftIdx];
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        // if we found the index 
        if (val === middleVal){
            return middleIdx;
        } else if (leftIdx === rightIdx){
            return -1;
        } 
        // shift the right or left index, depeding on value and position
        else if (val < middleVal && middleVal < rightVal){
            rightIdx = middleIdx - 1;
        }else if (val > leftVal && val < middleVal){
            rightIdx = middleIdx-1;
        }else if (val < leftVal && leftVal < middleVal){
            leftIdx = middleIdx+1;
        }else if (val > middleVal){
            leftIdx = middleIdx + 1;
        }
        }
    
}

module.exports = findRotatedIndex
