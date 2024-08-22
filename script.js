//your JS code here. If required.

let myObj = {
	name : 'Sriram'
}

Object.prototype.getKeys = function () {
	return Object.keys(this)
}

const keys = myObj.getKeys();
console.log(keys)
