// Creating  an array there are two ways............
//1. Creating an Array using Array Literal

//empty array

// let arr=[]
// Creating an Array and Initializing with Values
// let arr=["Anu",26,"chouhan"]
// console.log(arr[0]);

//2. Creating an Array using Array Constructor (JavaScript new Keyword)
//let name =new Array()
// Creating and Initializing an array with values
// let dog= new Array(1,2,3,4,5)
// console.log(dog);

//// Initializing Array while declaring
let arr = new Array(4)
arr[0] = 12;
arr[1] = 33;
arr[2] = 88;
arr[3] = 44;
arr[4] = 25;
arr[5] = 23;
arr[6] = 334;
console.log(arr);


//Note: Both the above methods do exactly the same. Use the array literal method for efficiency, readability, and speed.

//3. Accessing the Last Element of an Array
//We can access the last array element using [array.length – 1] index number.
let v= new Array("HTMl" ,"CSS", "Js")
//console.log(v.length-1);
console.log(v[v.length-1]);
