var arr = [6,5,4,3,2,1];
var endI = arr.length - 1;
for (var i = 0;  i < endI; i++) {
    var endJ = endI - i;
    for (var j = 0;  j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
console.log(arr);