var n = 1000, num = 0;
for ( n; n > 50; n = n/2) {
    num++;
}
console.log(`количество итераций: ${num}`);
console.log('число:'.concat(' ').concat(n));