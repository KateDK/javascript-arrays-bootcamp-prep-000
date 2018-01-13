var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element){
  var newArray = [...arr,element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr){
  arr.slice(arr.length-1);
  return arr;
}
