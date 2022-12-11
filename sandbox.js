//Chain Array method
const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];
const promos = products
  .filter(product => product.price > 20)
  .map(product => `The ${product.name} is ${product.price / 2} pounds`);

  console.log(promos);
  


// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

// console.log(promos);

//sort method
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
names.reverse();

// console.log(names);

const scores = [10, 5, 0, 40, 30, 90, 70];

scores.sort((a,b) => b - a);
scores.sort();
// console.log(scores);


const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

players.sort((a,b) => {
  if(a.score > b.score){
    return -1;
  }else if (b.score > a.score){
    return 1;
  }else{
    return 0;
  }
});


players.sort((a,b) => b.score -a.score);

// console.log(players);






//Find method 
// const scores = [10, 5, 0., 40, 30, 90, 70];

// const firstHighScore = scores.find(score => score > 50);

// console.log(firstHighScore);



//reduce method

// const scores = [10, 20, 60, 40, 70, 90,30 ];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

//complex example
// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60}
//   ];

//   const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario'){
//       acc += curr.score;
//     }
//     return acc;
//   }, 0);

//   console.log(marioTotal);


//Map method
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// // const salePrices = prices.map(price =>  price / 2)

// // console.log(salePrices)



// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
//   ];

//   const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     }else {
//         return product;
//     }
//   } );

//   console.log(saleProducts, products);

//Filter Method

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScore = scores.filter((score) => {
//     return score > 20;

// });

// console.log(filteredScore);

// const users = [
//     {name: 'shaun', prenium: true},
//     {name: 'yoshi', prenium: false},
//     {name: 'mario', prenium: false},
//     {name: 'jennifer',prenium: true}
// ];

// const preniumUser = users.filter(user => user.prenium);
// console.log(preniumUser);