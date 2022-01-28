let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90 , 100];


let result = arr.filter((currentValue) =>{
    return (currentValue > 10 && currentValue < 90);
});

console.log(result);