let firstHalf;
let secondHalf;



function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
  let midPoint = Math.ceil(wholeArray.length / 2)
  firstHalf = wholeArray.slice(0, midPoint)
  secondHalf = wholeArray.slice(midPoint,wholeArray.length)
  console.log(firstHalf)
  return [firstHalf, secondHalf];
};



function merge(firstHalf,secondHalf){
    let mergedArr = [];
    let leftIdx = 0
    let rightIdx = 0
    // while (firstHalf[leftIdx]<=firstHalf.length && secondHalf[rightIdx] <= secondHalf.length) {
      if (firstHalf < secondHalf){
        mergedArr.push(firstHalf[0])
        mergedArr.push(secondHalf[0])

        leftIdx++
    } else {
        mergedArr.push(secondHalf)
        rightIdx++
    }
  // }
    return mergedArr;
}

// function mergeSort(array) {
//   if(array.length ===1){
//       return array;
//   } else {
//       split(array)
//   }



