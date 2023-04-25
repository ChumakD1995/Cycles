for (let i = 10; i <= 20; i++) {
  console.log(i);
  if (i < 20); 
}
console.log(', ');

for (let i = 10; i <= 20; i++) {
  let square = i * i;
  console.log(square);
}


for (let i = 1; i <= 10; i++) {
  console.log(" " + i + " * 7 =");
  console.log(" " + (i * 7) + " ");
}

let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i; 
}
console.log(sum);

let product = 1;
for (let i = 15; i <=35; i++) {
  product *= i;
}
console.log(product);

let sum1 = 0;
for (let i = 1; i <= 500; i++) {
  const average = sum1 / 500;
  sum1 += i;
  console.log(average)
}

let sum2 = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log(sum2)

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}