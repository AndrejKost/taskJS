var arr = [1, 2, 4, 9];

for (var i of arr) {
    if (i == 4) {
        console.log(`Есть! ${i}`);
        break;
    }
}
