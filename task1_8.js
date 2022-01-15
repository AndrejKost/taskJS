var arr = [1,2,3,4,6,7];
let sum = 0;

for (i of arr) {
    if ((i % 2 === 0) && (i > 3)) {
        sum = sum + i;
    }
}
console.log('сумма четных в массиве больше 3: ' + sum);

//for (i of arr) {
  //   if (i % 2 === 0){
    //     if (i > 3) {
      //       sum = sum + i;
        // }
      //}
 //}
//console.log('сумма четных в массиве больше 3: ' + sum);
