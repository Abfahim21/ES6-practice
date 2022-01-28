//array.prototype.find()

let array1 = [1,2,3,4,5,6,7,8,9,0];

let findANumber = array1.find(function(currentValue, index, arr){
    console.log(index);
    console.log(arr);
    return currentValue > 5;
},this);
console.log(findANumber);