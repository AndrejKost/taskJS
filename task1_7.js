var arr = [1,2,3,4];
var i;
someLabel: for (i of arr) {
    if (i % 2 !== 0){
        continue someLabel;
    }
    console.log(i);
}

//for (i of arr) {
//     if (i % 2 == 0){
//         console.log(i);
//      }
//  }