function findMaxSumSubArray(k, arr) {
    // your code here
   let maxSum = 0
    windowSum = 0

   for ( i = 0 ; i < arr.length -k + 1; i++) { 
    windowSum = 0 ;
        for ( j = i; j < i+k; j++) {
            windowSum += arr[j];
        }
        maxSum = Math.max(maxSum , windowSum);
   } 
   return (maxSum)




  }
  console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])) // 9
  console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]))    // 7
  console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
  console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
  console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8




  