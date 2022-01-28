//splice() changes the whole arrayop

let arr =[1,2,3,4,5,6,7,26,45,65,78];

let result = arr.splice(7, 4, 8, 9, 10, 11);

//changes array here !
console.log(arr);

//result returns the deleted items 
console.log(result);