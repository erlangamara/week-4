function changeMe(arr) {

    if (arr.length == false){
        return console.log( ' "" ');
    }

    
    for(var i = 0; i < arr.length; i++){
        var holder = {};
        console.log(i + 1 + '.' + ' ' + arr[i][0] + ' ' + arr[i][1] + ':')
        for (var j = 0; j < arr[i].length; j++){
            if(j === 0){
                holder['firstName'] = arr[i][j];
            } else if (j === 1){
                holder['lastName'] = arr[i][j];
            } else if(arr[i][j] === 'Male' || arr[i][j] === 'Female'){
                holder['gender'] = arr[i][j];
            } else if(j === 3 && typeof arr[i][j] === 'number'){
                var umur = 2019 - arr[i][j];
                holder['age'] = umur;
            } else{
                holder['age'] = 'Invalid birth year';
            }

            
        }
        if (arr[i].length <= 3){
            holder['age'] = 'Invalid birth year';
        }
        console.log(holder);
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""