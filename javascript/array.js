// let marks = [97,98,99,95,84];

// console.log(marks);

// console.log(names)
// console.log(marks.length); // property to calculate length 
// console.log(typeof(marks))

// note: array are mutable
// Looping over an array
// for loop
// let names = ["Gunjan","megha","simran","cia"]
// for(let idx= 0; idx<names.length; idx++){
//     console.log(names[idx]);
// }

// for of
// for(let item of names) {
//     console.log(item);
// }
//  let cities = ["delhi","pune","mumbai","hyderabad","gurgoan"];
//  for(let city of cities){
//     console.log(city.toUpperCase());
//     console.log(city);
//  }
 

//qs for a given array marks of student ->[85,97,44,37,76,60]
// find the average marks of entire class.
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//     sum += val;
//     console.log(val);
// }
// let avg = sum/marks.length;
// console.log(`avg marks of class = ${avg}`);


// Qs for a given array with prices of 5 items -> [250,645,300,900,50] all items have an offer of 10% Off on them .chnage the array to store final price after applying offer.

// let thing = [250,645,300,900,50];
// let idx = 0;
// console.log("value of thing=",thing);

// for (let val of thing){
//     console.log(`value of index ${idx}=${val}`);
//     let offer = val/10;
//    thing[idx] = thing[idx]-offer;
//     console.log(`value after offer=${thing[idx]}`);
//     idx++
// }


// second method
// let items = [250,645,300,900,50];
// for(let i = 0; i< items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer; 
// }
// console.log(items);



//methods in array
// push method  -> add at the end [items.push("itmename")]
// let items = ["graps",'apple','banana','blueberry',]
// items.push('paneer','makkhan');//change in original array
// console.log(items);


// pop method -> delete from end & return
// it also change in original array
// let fooditems = ["patato","apple","litchi","onian"]
// console.log(fooditems);
// let deleteditem = fooditems.pop();
// console.log("deleted item",deleteditem);
// console.log(fooditems);

// tostring method -> convert array to string
// let str = ["javascript","python","html","css"];
// console.log(str);
// console.log(str.toString());
// console.log(str);
// let marks = [97,45,89,56,36];
// console.log(marks);
// console.log(marks.toString());


// conacat method -> joins multiple arrays &  return result 

// let branch = ['cs','ec','ce','ae'];
// let otherbranch = ['mca','bca','bba'];
// let scibranch = ['b.sc','b.hons']
// let allbranch = branch.concat(otherbranch,scibranch);
// console.log(allbranch);


// slice(): returns a piece of the aaray
// do not change in original array

// let branch = ['cs','ec','ce','ae'];
// console.log(branch);
// console.log(branch.slice(1,3));


// splice method -> change in original Array(add ,remove,replace)
















