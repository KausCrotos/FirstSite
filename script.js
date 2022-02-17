let mainElement = document.querySelector('main');
let but = document.querySelector(".link");
but.onclick = showMessage;

function showMessage(event) {
mainElement.prepend(event.currentTarget.tagName);
};

let arr1 = ['one', Infinity, 'free'];
let arr2 = ['free', ['four', 'five',['two', 'free']]];
let arr3 = [0, 1, 2, 3, 4];
let arr = [...arr1,...arr2].join().split(',');
let bilet1 = [
  {from: 'four', to: 'five', data: 'data4'},
  {from: 'two', to: 'free', data: 'data2'},
  {from: 'six', to: {z: 'seven', x: 7}, data: 'data3'},
  {from: 'five', to: 'six', data: 'data5'},
  {from: 'one', to: 'two', data: 'data1'},
  {from: 'free', to: 'four', data: 'data3'},
];
let bilet = JSON.parse(JSON.stringify(bilet1));
let map1 = bilet.map((ob,i) => bilet[i].from);
let map2 = bilet.map((ob,i) => bilet[i].to);
let num = 1;
let p;
let map = bilet.reduce (acc => {
  map1.forEach(item => {
    if (!map2.includes(item)) {
      p = map1.indexOf(item);
      map1[p] = 0;
      map2[p] = 0;
      bilet[p].id = num;
      num++;
      acc.push(bilet[p]);
    }
  });
return acc;
},[]);
map[5].to = 'seven';
console.log(map);
console.log(bilet1);
