function countZeroes(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let zeroesCount = 0;

    while (leftIdx <= rightIdx) {
    // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        // check for target array criteria
        if (middleVal === 1 && arr[middleIdx+1]===0){
            zeroesCount = arr.length - 1 - middleIdx;  //subtract 1 to get the total

            console.log(zeroesCount);
            return zeroesCount;
        
            
        } else if (arr[0] === 0){      
            // if no zeros exist, number of zeroes is the array length
            zeroesCount = arr.length

            return zeroesCount;
        }else if (middleVal === 1) {
            // if the middle val is one, shift the leftIdx
            leftIdx = middleIdx + 1;
        }
        else if (middleVal === 0) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx - 1;
        } 
    }
    return zeroesCount;
}

module.exports = countZeroes