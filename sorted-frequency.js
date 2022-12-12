function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let foundVal = false;
    let foundFirstInst = false;
    let foundLastInst = false;
    let firstIdx;
    let lastIdx;

 
    // keep the same b/c it may be possible that there's no match
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];


      if (middleVal < val && !foundVal) {
        // middleVal is too small, look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal > val && !foundVal) {
        // middleVal is too large, look at the left half
        rightIdx = middleIdx - 1;
      } else if(!foundVal) {
        if(rightIdx === leftIdx) return 1;
        foundVal = true;

        // don't update the left or right index
        firstIdx = middleIdx;
        lastIdx = middleIdx;
      }

      // after the a matching val is found
      // start converging on the left and right instances

      if (foundVal && !foundFirstInst || !foundLastInst){
        let leftMiddleIdx = Math.floor((firstIdx - leftIdx)/2);
        let rightMiddleIdx = Math.floor(((rightIdx-lastIdx)/2)+lastIdx);

        // confirm left side first instances
        if (arr[leftMiddleIdx] < val && !foundFirstInst){
          if(arr[leftMiddleIdx+1] === val){
            firstIdx = leftMiddleIdx + 1;
            foundFirstInst = true;
          }
          leftIdx = leftMiddleIdx + 1;

        } else if (arr[leftMiddleIdx] === val && !foundFirstInst){
          if(arr[leftMiddleIdx - 1] !== val){
            firstIdx = leftMiddleIdx;
            foundFirstInst = true
          } else {
            firstIdx = leftMiddleIdx - 1;
          }
        }

        // confirm right side firstInstance
        if(arr[rightMiddleIdx] > val && !foundLastInst){
          if(arr[rightMiddleIdx - 1] === val){
            lastIdx = rightMiddleIdx - 1;
            foundLastInst = true;
          }else{
            rightIdx = rightMiddleIdx -1;
          }

        } else if(arr[rightMiddleIdx] === val && !foundLastInst){
          if(arr[rightMiddleIdx + 1] !== val){
            lastIdx = rightMiddleIdx;
            foundLastInst = true;
          } else {
            lastIdx = rightMiddleIdx + 1;
          }
        }

        // calculate frequency once all values found 
        if (foundFirstInst && foundLastInst){
          let frequency = lastIdx - firstIdx + 1;
          return frequency;
        }
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
}

module.exports = sortedFrequency

