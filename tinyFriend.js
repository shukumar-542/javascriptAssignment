
function tinyFrined(fName){
      var min = fName[0];


 for(var i = 0 ; i<fName.length; i++){
      var index = fName[i];
      
      if(index.length<min.length){
           min = index;
      }
    
}
return min;
}

var minLength = tinyFrined(["sss","ss","shu"]);
console.log(minLength);