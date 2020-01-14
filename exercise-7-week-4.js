function urutkanAbjad(str) {
    var holder = [];
    for (j = 0; j < str.length; j++){
        holder.push(str[j]);
    }

    do{
        var swap = false;
        for (i = 0; i < holder.length - 1; i++){
            if(holder[i] > holder[i + 1]){
                var fix = holder[i+1];
                holder[i+1] = holder[i];
                holder[i] = fix;
                
                swap = true;
            }
        }
    } while (swap)
    
    var result = '';
    for(k = 0; k < holder.length; k++){
        result += holder[k];
    }
    return result;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'