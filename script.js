// let mainElement = document.querySelector('main');
// let but = document.querySelector(".link");
// but.onclick = showMessage;
//
// function showMessage(event) {
// mainElement.prepend(event.currentTarget.tagName);
// };

// let arr1 = ['one', Infinity, 'free'];
// let arr2 = ['free', ['four', 'five',['two', 'free']]];
let arr3 = [ -1, 0, 1, 2, 5, 4, -3];
// let arr = [...arr1,...arr2].join().split(',');
// let out = [
//   {from: 'four', to: 'five', data: 'data4'},
//   {from: 'two', to: 'free', data: 'data2'},
//  {from: 'six', to: {z: 'seven', x: 7}, data: 'data3'},
//   {from: 'five', to: 'six', data: 'data5'},
//   {from: 'one', to: 'two', data: 'data1'},
//   {from: 'free', to: 'four', data: 'data3'},
// ];
const sumOfFree = (arr, target = 0) => {
  let arrA = [];
  arr = arr.sort((a,b)=> a-b);
  for ( let i = 0; i < arr.length; i++) {
    for ( let j = 0; j < arr.length; j++) {
      let num = arr.find(el => el === target - arr[i] - arr[j])
      let res = [arr[i], arr[j], num].sort((a,b)=> a-b)
      if (num !== undefined)
      arrA.push(res);
    }
  }
  let str =[];
  for ( let i = 0; i < arrA.length; i++) {
    if (arrA.length > 0){
    let strtemp = arrA[i].join(',');
    str.push(strtemp)
    }
  }
  let result = new Set(str);
return result;
};
// const sumOfTwo = (arr, target = 0) => {
//   let arrB = [];
//   for ( let i = 0; i < arr.length; i++) {
//     let obj = target - arr[i] ;
//      if (obj !== arr[i]){
//       arrB.push(obj);
//     }
//   }
//   let intersection = arr.filter(x => arrB.includes(x)) ;
//   return intersection;
// };
// const sumOfTwo = (arr, target) => {
// 	for ( let i = 0; i < arr.length; i++) {
//     for ( let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return `${arr[i]} + ${arr[j]}`
//       }
//     }
//   }
// };
console.log(sumOfFree(arr3))
