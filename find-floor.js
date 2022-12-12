function findFloor(arr,val) {
    let leftIdx = 0;
    let leftVal = arr[leftIdx];
    let rightIdx = arr.length - 1;
    let rightVal = arr[rightIdx];
    let initialLoop = true;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
        rightVal = arr[rightIdx];
        leftVal = arr[leftIdx];
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (val > rightVal && initialLoop) return arr[arr.length-1];
        if (val < leftVal && initialLoop) return -1;

        if (arr[middleIdx] > val && arr[middleIdx-1] <= val){
            return arr[middleIdx-1];
        }else if (middleVal > val){
            rightIdx = middleIdx -1;
        } else if (middleVal <= val) {
            leftIdx = middleIdx + 1;
        }

        initialLoop = false;
            
    }
}

module.exports = findFloor