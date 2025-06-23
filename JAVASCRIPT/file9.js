// //array methods
// const points = [2, 5, 3, 2, 1, 8];
// const score = [10, 20, 50, 20];
// console.log(score);
// console.log(score[0]);
// score.push(70);
// console.log(score);
// console.log(score.length);
// for (let i = 0; i < score.length; i++) {
//   console.log(score[i]);
// }
// // points.forEach((value) => {
// //   console.log(value);
// // });
// // points.forEach((value, index) => {
// //   console.log(value,index);
// // });
// // points.forEach((value, index, arr) => {
// //   console.log(value, index, arr);
// // });
// points.forEach((a, b, c) => {
// //   console.log(c[b]);
//   console.log(a);
// });

const products = [2, 5, 3, 2, 1, 8];

// products.forEach((element,index,arr)=>{
//   console.log(element," ",index," ",arr);
// })

const newArr = products.map((val,idx)=>{
  return val = val+5;
});

const newArr2 = products.filter((value)=>{
  return value > 2;
})

const finding = products.find((value)=>{
  return value === 2;
})
console.log(finding);
console.log(newArr2);
console.log(newArr);

const res = newArr2.reduce((sum,value)=>{
  return sum+value;
},0);

console.log(res);


