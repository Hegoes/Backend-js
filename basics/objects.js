
//objects are a collection of key-value pairs. They are used to store data in a structured way. The syntax for creating an object is as follows

var obj={
    name:"john",
    age:30,
    city:"new york"
}

Object.freeze(obj); // this method is used to prevent the modification of the object. It makes the object immutable. After freezing the object, you cannot add, delete, or modify any properties of the object.

obj.age=31;
console.log(obj);
