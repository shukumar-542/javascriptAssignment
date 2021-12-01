function brickCalculator(floor){
      var bricks = 0;

if(floor <= 10){
      bricks = floor*15 *1000 ;
}else if (floor <=20){
      var firstFloor = 1000*15 *10;
      var remaining  =  floor - 10;
      var secondFloor =  remaining * 1000 * 12;
      var bricks =  secondFloor +firstFloor;
}else{
      var firstFloor  = 1000 *15 *10;
      var secondFloor = 1000 *10 *10;
      var remaining  = floor - 20;
      var upto20 = 1000*10;
      var bricks = firstFloor +secondFloor +upto20;
}
      return bricks;

}
var totalBrick = brickCalculator(21);
console.log(totalBrick);