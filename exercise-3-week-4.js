function cariMedian(arr) {
    if (arr.length % 2 !== 0){
        var meanIndex1 = arr.length / 2;
        var meanRound = Math.floor(meanIndex1);
        return arr[meanRound];
    } else if (arr.length % 2 === 0){
        var meanIndex2 = arr.length / 2;
        var tambahMean = arr[meanIndex2] + arr[meanIndex2 - 1];
        var meanGenap = tambahMean / 2
        return meanGenap;
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5