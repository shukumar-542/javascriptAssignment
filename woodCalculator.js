function woodClculator(chair,table,bead){
      var chairWood = chair * 1;
      var tableWood = table * 2;
      var beadWood = bead * 5;
       var totalWood = chairWood + tableWood + beadWood;
       return totalWood;
}
var total  = woodClculator(2,2,2);
console.log(total);