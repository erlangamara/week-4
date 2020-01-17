function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = [];
  
  for(var i = 0; i < arrPenumpang.length; i++){
        var data = {};
        data.penumpang = arrPenumpang[i][0];
        data.naikDari = arrPenumpang[i][1];
        data.tujuan = arrPenumpang[i][2];

        var count = 0;
        var counting = false;
        
        for(var j = 0; j < rute.length; j++){
            if(rute[j] === arrPenumpang[i][1] && counting === false){
                counting = true;
            } else if(rute[j] === arrPenumpang[i][2] && counting === true){
                count++;
                counting = false;
            } else if(counting === true){
                count++;
            } 
            
        }
        var biaya = count * 2000;
        data.bayar = biaya;

        result.push(data);
        
    }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]