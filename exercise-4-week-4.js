function cariModus(arr) {
    var holder = [];
    for (i = 0; i < arr.length; i++){
        var index = -1;
        for (j = 0; j < holder.length; j++){
            if (arr[i] === holder[j][0]){
                index = j;
            }
        }

        if (index === -1){
            holder.push([arr[i], 1]);
        } else if (index >= 0){
            holder[index][1]++;
        }
    }

    var tampung = 1;
    var nomor = 0;

    
    for (k = 0; k < holder.length; k++){
        if (holder[k][1] > tampung){
            tampung = holder[k][1];
            nomor = holder[k][0];
        }
        
    }
    
    if (holder.length === 1){
        return -1;
    }else if (tampung === 1){
        return -1;
    } else{
        return nomor;
    }
}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1