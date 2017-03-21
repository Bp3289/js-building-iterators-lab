// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.



var numArray = [0,1,10,100,1000];

function add () {
	return current + previous;
}

function myReduce(arr, add) {

for(var i = 0; i < arr.length; i++){
		add(arr[i], i, arr);
}

}
myReduce(numArray, add);
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
