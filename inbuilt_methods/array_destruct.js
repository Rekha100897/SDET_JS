let arr1 = [10,20,30,40,50]


//========normal way
// to access elements of an array
// let x = arr1[1]
// let y = arr1[3]
// console.log(x,y);

//=========case1
// let [x,y] = arr1
// console.log(x,y);

//=========case2 (to skip the elements in between)
let [x,,,,y] = arr1
console.log(x,y);
