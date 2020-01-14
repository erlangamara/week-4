function checkAB(num) {
    //var count = 0;
    var checking = false;
    var check = 0;
    for(var i = 0; i < num.length; i++){
        if(num[i] === 'a' && checking === false || num[i] === 'b' && checking === false){
            checking = true;
        } else if(checking === true && check < 3){
            check++;
        } else if(num[i] === 'a' && check === 3 || num[i] === 'b' && check === 3){
            return checking;
        } else if(num[i] !== 'a' && check === 3 || num[i] !== 'b' && check === 3){
            check = 0;
            checking = false;
        }

    }
    
    if(check <= 3){
        return false;
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false