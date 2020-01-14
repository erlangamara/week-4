function digitPerkalianMinimum(angka) {
    var holder = [];
    var cek = [];
    for (var i = 0; i <= angka; i++){
        var pasangan = [];
        for (var j = 0; j <= angka; j++){
            if(i * j === angka){
                pasangan.push(i,j);
            }
        }

        
        for(k = 0; k < cek.length; k++){
            if (pasangan[0] === cek[k] && pasangan.length > 0){
                pasangan = [];
            }
        }

        if (pasangan.length > 0){
            holder.push(pasangan);
            cek.push(pasangan[1]);
        }
    }
    
    var count = '';
    for(var x = 0; x < holder[holder.length - 1].length; x++){
        count += holder[holder.length - 1][x];
    }
    return count.length;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2