function findRotationCount(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;


    while (leftIdx <= rightIdx) {
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];
        let n;

        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (leftVal < rightVal) return 0;

        if (arr[middleIdx - 1] > middleVal){
            n=middleIdx
            return n;
        }else if(middleVal > rightVal){
            leftIdx = middleIdx + 1;
        }else if (middleVal < leftIdx && middleVal < rightVal){
            rightIdx = middleIdx - 1;
        }
    }
}

module.exports = findRotationCount