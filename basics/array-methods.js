
//forEach is a method that is used to iterate over an array and execute a provided function once for each element in the array. It does not return a new array, but it allows you to perform side effects on each element of the array. The syntax for forEach is as follows:

var arr=[1,2,3,4,5];
arr.forEach (function(val){
    console.log(val+ " hello " );
})




// maps is a method that is used to create a new array by applying a provided function to each element in the original array. It returns a new array with the results of calling the provided function on every element in the original array. The syntax for map is as follows:

var arr=[1,2,3,4];
var newArr=arr.map(function(val){
    return val*2;
});
console.log(newArr);




// filter is a method that is used to create a new array with all elements that pass the test implemented by the provided function. It returns a new array with all elements that satisfy the condition specified in the provided function. The syntax for filter is as follows:


var arr=[1,2,3,4];

var ans=arr.filter(function(val){
    if (val>=2) {
        return true;
    }
    else return false;
})
console.log(ans);




//find is a method that is used to return the value of the first element in the array that satisfies the provided testing function. It returns the value of the first element that satisfies the condition specified in the provided function, or undefined if no such element is found. The syntax for find is as follows:

var arr=[1,2,3,4];

var ans=arr.find(function(val){
    if (val===2)
        return val;
})
console.log(ans);


//indexOf is a method that is used to return the first index at which a given element can be found in the array, or -1 if it is not present. The syntax for indexOf is as follows:

var arr=[1,2,3,4];
console.log(arr.indexOf(3));

