var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
  var newArr = [element, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  return [element, ...arr];
}

funtion addElementToEndOfArray(arr, element){
  var newArray = [arr, ...element];
  return newArray;
}

destructivelyAddElementToEndOfArray(arr, element){
  return [arr, ...element];
}

function accessElementInArray(arr, index){
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  arr.slice(0,1);
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray (arr){
  arr.slice(arr.length-1);
  return arr;
}
