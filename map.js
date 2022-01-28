let arr = [1, 2, 3, 4, 5, 6, 7];
//map() doesnt change themain array
let result = arr.map((element) =>{
    return element*2;
})

console.log(result);