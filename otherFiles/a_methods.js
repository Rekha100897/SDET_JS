// var arr1 = [55,11,111,4,4444,2,3]
// var arr2 = [10,20, 30, 40]
// var strArray = ["a", "b","c"]


// console.log(arr1.every( function (element) {
//     return element>3
// } ));

//some
// console.log(arr1.some( function (element) {
//     return element>3
// } ));

// console.log(arr1.indexOf(4));
// console.log(arr1.indexOf(40));

// console.log(arr1.lastIndexOf(3, 5));

// reverse
// console.log(arr1.reverse());
// console.log(arr1);

// includes
// console.log(arr1.includes(50));


//join
// console.log(strArray.join("*"));


//foreach is implimented by map method
// arr1.forEach((element, index)=>{
//     console.log(element+":"+index);
//     console.log(element*2);
// })



//map method is implimented by filter method
// console.log(arr1.map((element, index)=>{
//     return element*3
// }));
// console.log(arr1);


//filter
// console.log(arr1.filter((element, index, array)=>{
//     if (element >3) {
//         return element
//     }
// }));
// console.log(arr1);


//sort
// console.log(arr1.sort((a,b)=>{
//     return a-b
// }));


//reduce
// console.log(arr1.reduce((a,b)=>{
//     return a+b
// },2));


// reduceRight
// console.log(arr1.reduceRight((a,b)=>{
//     return a-b
// },2));

// var amazon = [
//                 {productName : "iphone", productPrice : 10000},
//                 {productName : "ipod", productPrice : 5000},
//                 {productName : "mac", productPrice : 15000}
//             ]
//               //["iphone", ipod", "mac"]
//               //[10000, 5000, 15000]

// var citizen = [                                  //{India : 2 , USA : 1, EUROPE : 1, JAPAN: 1}
//     {name : "abc", address : "INDIA"},
//     {name : "def", address : "USA"},
//     {name : "ghi", address : "EUROPE"},
//     {name : "jkl", address : "JAPAN"},
//     {name : "mno", address : "INDIA"}
// ]

// console.log(citizen.reduce((countObj, item )=>{
//     if (countObj[item.address]) {
//         // countObj[item.address]++
//         countObj[item.address] = countObj[item.address] + 1
//     }
//     else{
//         countObj[item.address] = 1
//         // countObj.item.address = 1
//     }
//     return countObj
// },{}));

// var ref_obj = {};
// ref_obj.India = 1
// console.log(ref_obj);

// console.log(citizen.reduce((count, people)=>{
//         if (people.address == "INDIA") {
//             count = count + 1
//         }
//         return count
// },0));

// var IndiansArray = citizen.filter((people)=>{
//     return people.address == "INDIA"
// });

// IndiansArray.forEach((item)=>{
//     console.log(item.name);
// })


// console.log(amazon.reduce((price,item)=>{
//     price.push(item.productPrice)
//     return price
// },[]));

// var productName = [];
// for (const item of amazon) {
//     // console.log(item.productName);
//     productName.push(item.productName)
// }
// console.log(productName);

   //get the sum product price

//    var sum = 0;
//    for (const product of amazon) {
//        console.log(product);
//        console.log(product.productPrice);
//        sum = sum + product.productPrice
//    }
//    console.log(sum);

//using forEach method
// var sum = 0;
// amazon.forEach((product)=>{
//     sum = sum + product.productPrice
// })
// console.log("total sum of the product "+sum);



//for loop
// var sum = 0;
// for (let index = 0; index < amazon.length; index++) {
//     sum = sum + amazon[index].productPrice
//     console.log(sum);
// }
// console.log("total sum of the product "+sum);


// console.log(amazon.reduce((sum, product)=>{
//     sum = sum + product.productPrice
//     return sum
// }, 0)
// );

// arr1.reduce

//************************************************************************/
// 1==>array.concat(number[]) 
// Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays


 var arr1 = [10, 20, 30, 40, 50, 60, 20, 40]
//  var arr2 = [9,70]
//  console.log( arr1.concat(arr2)); //concatinating arr1 with arr2
//  console.log(arr1); //existing array is not modified

//*******************************************************************/
//  2==>array.push(elements) 
//  it will add the given elements at the end of an array and returns the length of an array. 
//  It will modify the existing array

// console.log(arr1.push("Rekha"));
// console.log(arr1);

//*******************************************************************/
//  3==> array.pop() 
// it will remove the last element from the array and returns the removed element. 
// It will modify the existing array

// console.log(arr1.pop("Rekha"));
// console.log(arr1);

//*******************************************************************/
// 4 ==> array.unshift(elements)
// it will add the elements to the beginning of an array and returns the length of an array
//  it will modify the existing array

// console.log(arr1.unshift("Rekha"));
// console.log(arr1);


//*******************************************************************/
// 5 ==> 	array.shift() 
// it will remove the first element from the array and returns the removed element
// it will modify the existing array

// console.log(arr1.shift("Rekha"));
// console.log(arr1);

//*******************************************************************/
// 6 ==> array.splice(startIndex, deleteCount, new_elements) 
//  it will delete and as well as adds the given elements to the specific index of an array and returns the deleted elements in the form of array
// it will modify the existing array

// console.log(arr1.splice(2,0,"a","b")); //will return nothing as no element has been deleted
// console.log(arr1.splice(2,2,"a","b"));   //will delete the second index value
// console.log(arr1.splice(2,arr1.length,"a","b"));
// console.log(arr1);


//*******************************************************************/
// 7 ==> array.slice(stratIndex, endIndex) 
// it will return the fragment of an array based on then specified index and endIndex will be excluded
// retuns the fragment in the form of array
// console.log(arr1.slice(2,4));
// console.log(arr1);

//*******************************************************************/
// 8 ==> array.every(()=>{}) 
// it will return Boolean result based on the condition satisfied by all the elements of an array i.e
// returns true only if all elements satisfies the given condition

// console.log(arr1);
// console.log(arr1.every( (element) => {
//         return element<3                         
//     } ));


//*******************************************************************/
// 9 ==> array.some(()=>{}) 
//  it will return Boolean result based on the condition satisfied by any one of the element of an array 
//  returns true if any of  element satisfies the given condition


// console.log(arr1.some( (element)=> {
//     return element>3
// } ));


//*******************************************************************/
//10 ==> 	array.indexOf(searchElement, startPosition) 
// it will return the index value of search element
//  traversing is from left ===> right

// console.log(arr1);
// console.log(arr1.indexOf(4));
// console.log(arr1.indexOf(40));
// console.log(arr1.indexOf(10, 2)); //by giving the start position


//*******************************************************************/
//11 ==> 	array.lastIndexOf(searchElement, startPosition) 
// it will return the index value of search element
//  traversing is from right ===> left 


// console.log(arr1);
// console.log(arr1.lastIndexOf(4));
// console.log(arr1.lastIndexOf(40));
// console.log(arr1.lastIndexOf(10, 2)); //by giving the start position

//*******************************************************************/
// 12 ==> •	array.reverse() 
//  it will return the array in reverse order
//  it modifies the existing array

// console.log(arr1);
// console.log(arr1.reverse());
// console.log(arr1);


//*******************************************************************/
//13 ==> •	array.includes(searchElement) 
//  it will return the Boolean result based on searchElement presence.
   
// console.log(arr1.includes(40));

//*******************************************************************/
//14 ==>	array.join(join_character) 
//  it will add the elements of an array based on the character specified and returns the string

// console.log(arr1.join("*"));

//*******************************************************************/
//15 ==> array.forEach(()=>{// task}) 
//  it will perform the task given in the callback function and returns void. 
//  Implemented by map method of an array.
//  But it will not modify the existing array.

// arr1.forEach((element, index)=>{
//     console.log(element+" : "+index);
//     console.log(element*2);
// })
// console.log(arr1);

//*******************************************************************/
//16 ==> array.map(()=>{//modify statements}) 
//  it will return the modified form of an array and implemented by filter method of an array
//  but it will not modify the existing array

// console.log(arr1.map((element, index)=>{
//     return element*3
// }));                                 //return type is diffrent from forEach()
// console.log(arr1);

//*******************************************************************/
//17 ==> array.filter(()=>{//filter condition}) 
//  it will return the array based on filter condition 
// it will return the elements in the form of array that only satisfies the given filter condidtion
//  it will not modify the existing array

// console.log(arr1.filter((element, index, array)=>{
//         if (element >30) {
//             return element
//         }
//     }));
//     console.log(arr1);


//*******************************************************************/
//18 ==> array.sort(()=>{//compare function}) 
// it will sort the array in ascending_order(return a-b)
// descending order(return b-a) based on return specified in compare function

// console.log(arr1.sort((a,b)=>{
//     return b-a
// }));

//*******************************************************************/
//19 ==> array.reduce((previousValue, currentValue)=>{}) 
//  it will reduce the entire array into a single unit / to the required form(array, object, number)\

// const numbers = [200, 60, 10];
// function myFunc(total, num) {
//     return total - num;
//   }
//   console.log(numbers.reduce(myFunc));

//eg2
// const numbers1 = [15.5, 2.3, 1.1, 4.7];
// function getSum(total, num) {
//   return total + Math.round(num);
// }
// console.log(numbers1.reduce(getSum,0));

//*******************************************************************/

//20 ==> array.reduceRight((previousValue, currentValue)=>{}) 
// Similar to reduce method but traversing is from right===>left.

// const numbers = [100, 15, 10];

// console.log(numbers.reduceRight(myFunc));

// function myFunc(total, num) {
//   return total - num;
// }
// *****************************************************************

//eg2
// const numbers = [2, 45, 30, 100];
// console.log( numbers.reduceRight(getSum));

// function getSum(total, num) {
//   return total - num;
// }

//*******************************************************************/
