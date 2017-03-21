// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

	var newArray = [];
	function print(item) {
		console.log(item);
	}

function myMap(arr, callback) {
	for(var i = 0; i < arr.length; i++){
		callback(arr[i], i, arr);
	}
 	var newArray = [];
    newArray.push(arr[i],i,arr);
  
}
myMap(newArray, print);



/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
