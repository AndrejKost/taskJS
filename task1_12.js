var arr = [1,2,3,-5,-2,1,-4];
var sum = 0;
var i;
for (i of arr){
    if (i > 0) {
        sum = sum + i;
    }
}
console.log(sum);
