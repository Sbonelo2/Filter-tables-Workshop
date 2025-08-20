
// console.log(conitaner);


for (let i = 0; i < 5; i++){
// console.log(i);
}

// numbers.map((element) => console.log(element * 2));

// const newCollection = numbers.map((element) => element * 2);
// console.log(newCollection)



// bone.append("this is a test")





// const root = document.getElementById("root");
// const heading = document.createElement("h2");
// heading.textContent = "My favourite movies";
// root.appendChild(heading);
// const movies = ["ilembe", "spiderMan", "snow", "hulk", "tears"];
// movies.map(function (movie) {
//   const line = document.createElement("p");
//   line.textContent = movie;
//   root.appendChild(line);
// });

// // let i = [2, 3, 5, 10, 33];
// // if (i > 0) {
// //     console.log("bigger than 5")
// // }
// // else
// //     [console.log("less than 5")]
// // root.append("My favourite movies!");
// //

// // 
const numbers = [2, 67, 5, 18, 33];
// let numsBiggerThan5 = numbers.map((x) => {
//     return x > 5 ? true : false;
   
// });
// console.log(numsBiggerThan5);
// numsBiggerThan5.filter((movie) => {
//   let p = document.createElement("p");
//   p.textContent = movie;
//   root.append(p);
// });

// let BiggerThan5 = numbers.filter((x) => {
//   return x > 5 ? true : false;
// });
// console.log(BiggerThan5);
// BiggerThan5.map((num) => {
//   let p = document.createElement("p");
//   p.textContent = num;
//   root.append(p);
// });















root.append("My favourite movies!");

let moviesData = ["ilembe", "spiderMan", "snow", "hulk", "tears"];
moviesData.map((movie) => {
  let p = document.createElement("p");
  p.textContent = movie;
  root.append(p);
});

let numsBiggerThan5 = numbers.map((x) => {
  return x > 5 ? true : false;
});
console.log(numsBiggerThan5);
let BiggerThan5 = numbers.filter((x) => {
  return x > 5 ? true : false;
});
console.log(BiggerThan5);
BiggerThan5.map((num) => {
  let p = document.createElement("p");
  p.textContent = num;
  root.append(p);
});



