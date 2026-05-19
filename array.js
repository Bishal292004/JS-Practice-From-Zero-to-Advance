// Q1 Write a function secondLargest(arr) that returns the second largest number in an array. Handle duplicates — [5, 5, 4, 3] should return 4, not 5.

let arr = [5,5,5,5,5,3,4];

function secondLargest(arr){
    //first sort the given array
    //using bubble sort
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    //finding the 2nd largest element
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[0]){
            return arr[i];
        }
    }
    return "2nd largest value not present.";
}

// console.log(secondLargest(arr));

//Q2 Given an array of numbers, return a new array with only the numbers that appear exactly once. Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5].

let arr2 = [2, 2, 4, 4, 5, 2];
//declaring the new array
let newArr2 =[];

newArr2 = findUnique(arr2, newArr2);

function findUnique(arr,newArr2){
    //sorting the array
    for(let i = 0; i <arr.length -1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    //checking if each element is unique from its adjacent elements
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1] && arr[i] != arr[i-1]){
            newArr2.push(arr[i]);
        }
    }
    return newArr2;
}

// console.log(newArr2);

// this question took me some time to figure out the logic

//Q3 Write flatten(arr) that flattens a nested array one level deep without using .flat(). Example: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, [5]].


let multiArray = [1,[0, 4, 5, 7], [2, 3], [4, [5]]];
function flatten(arr){
    let flatArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(let j = 0; j < arr[i].length; j++){
                flatArr.push(arr[i][j]);
            }
        }else{
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
}

let flatArray = flatten(multiArray);
// console.log(flatArray);


//Q4 Given two arrays, return their intersection (common elements, no duplicates). Example: [1, 2, 2, 3] and [2, 3, 4] → [2, 3].

let num1 = [1, 2, 2, 3, 4];
let num2 = [2, 3, 4, 1];

//the logic to first find compare each element of one array with the elements of the another array, if there is a match and that element is not present in the resultant array(removing duplicayes) then push that element in the resultant array.

function intersection(arr1, arr2){
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j] && result.indexOf(arr1[i]) === -1){
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

let arrayIntersection = intersection(num1, num2);
// console.log(arrayIntersection);

//Q5 Write chunk(arr, size) that splits an array into chunks of given size. Example: 
// chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]].

let bulkArray = [1, 2, 3, 4, 5, 6, 7];

function chunk(arr, chunkSize){
    let result = [];
    let chunks = [];
    for(let i = 0; i <arr.length; i+=chunkSize){
        for(let j = i; j < i+chunkSize; j++){
            if(arr[j] !== undefined)
                chunks.push(arr[j]);
        }
        result.push(chunks);
        chunks = [];
    }
   
    return result;
}

let chunks = chunk(bulkArray, 3);
// console.log(chunks);


//Q6 Given an array of objects [{name: 'A', age: 25}, {name: 'B', age: 30}, ...], return the object with the highest age. Use reduce.

const students =[
    {
        name: "A",
        age: 22
    },{
        name: "B",
        age: 23
    },{
        name: "C",
        age: 21
    },{
        name: "D",
        age: 25
    }
];

let oldest = students.reduce((acc, ele) => {
    if(ele.age > acc.age){
        return ele;
    }
    return acc;
}, students[0]);

// console.log(oldest);


//Q7 Write groupBy(arr, key) — group an array of objects by a given key. Example: groupBy([{type:'fruit', name:'apple'}, {type:'fruit', name:'mango'}, {type:'veg', name:'potato'}], 'type') → { fruit: [...], veg: [...] }.


const foodType = [
    {
        type: "fruit",
        name: "apple"
    },{
        type: "fruit",
        name: "mango"
    },{
        type: "veg",
        name: "potato",
    },{
        type: "herb",
        name: "mint"
    }
];

let groupByType = Object.groupBy(foodType, food => food.type);
// console.log(groupByType);


//Q8 Remove duplicates from [1, 2, 2, 3, 3, 3, 4] without using Set. Then do it again using Set.

let numbers = [1, 2, 2, 3, 3, 3, 4, 7, 0, 0, 0];

//without set
let uniquenumbers = (numbers) => {
    let newNum = [];
    for(let i = 0; i < numbers.length; i++){
        if(newNum.indexOf(numbers[i]) === -1){
            newNum.push(numbers[i]);
        }
    }
    return newNum;
}
numbers = uniquenumbers(numbers);
// console.log(numbers);

//using set

let numUnique = new Set(numbers);
// console.log(numUnique);

//Q9 Given [3, 1, 4, 1, 5, 9, 2, 6, 5, 3], return the frequency of each number as an object: {3: 2, 1: 2, 4: 1, ...}.

let record = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 9];

// my approach is to 1st fing the unique elements in the array, and after that find the frequency of that element in the 1st array.

function frequency(arr){
    let unique = [];
    let freq = {};
    for(let i = 0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) === -1){
            unique.push(arr[i]);
        }
    }
    // console.log(unique);
    for(let j = 0; j < unique.length; j++){
        let count = 0;
        for(let k = 0; k <arr.length; k++){
            if(unique[j] === arr[k]){
                count++;
            }
        }
        freq[unique[j]] = count;
        count = 0;
    }
    return freq;
}

let numFreq = frequency(record);
// console.log(numFreq);


//Q10 Rotate an array to the right by k positions. Example: rotate([1,2,3,4,5], 2) → [4,5,1,2,3].


const toBeRotated = [1,2,3,4,5, 6];

function rotate(arr, pos){
    let new1 = [];
    let new2 = [];
    for(let i = 0; i < arr.length - pos; i++){
        new1.push(arr[i]);
    }
    for(let i = arr.length - pos; i < arr.length; i++){
        new2.push(arr[i]);
    }
    for(let j = 0; j<new1.length; j++){
        new2.push(new1[j]);
    }
    return new2;
}

let rotatedArray = rotate(toBeRotated,3);
console.log(rotatedArray);