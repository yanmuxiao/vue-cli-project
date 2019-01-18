function log(clog, json) {
	json ? console.log(JSON.stringify(clog)) : console.log(clog);
}

/*	关键点：
*	typeof instanceof constructor indexOf toString
*	for..in.. === NaN !== NaN
* 	JSON.stringify JSON.parse
*/ 

let isArray = function(arr) {
	return arr instanceof Array;
}
let forEach = function(arr, fn) {
	for(let i = 0, len = arr.length; i < len; i++) {
		fn(arr[i], i, arr);
	}
}
let find = function(arr, fn) {
	let fValue = false;
	for(let i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			fValue = arr[i];
			break;
		}
	}
	return fValue;
}
let findIndex = function(arr, fn) {
	let fIndex = false;
	for(let i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			fIndex = i;
			break;
		}
	}
	return fIndex;
}
let filter = function(arr, fn) {
	let filterResult = [];
	for(let i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			filterResult.push(arr[i]);
		}
	}
	return filterResult;
}
/*
*	arr：操作的原数组(该方法直接操作原数组，不想操作原数组改用filter方法)
*	fn：function(value, index) {} ==> 从数组的某个索引开始操作可通过index判断
*	return: array==> if(origin == false) { return 被remove的对象 } else { return 被remove后的原数组 }
*/ 
let remove = function(arr, fn, origin) {
	let removeResult = [];
	for(let i = 0; i < arr.length; i++) {
		if(fn(arr[i], i)) {
			removeResult.push(arr[i]);
			arr.splice(i--, 1); // 操作原数组，并且i-1重新循环改位置的判断
		}
	}
	return originArr ? arr : removeResult;
};
let some = function(arr, fn) {
	let someTrue = false;
	for(let i = 0, len = arr.length; i < len; i++) {
		if(fn(arr[i], i, arr)) {
			someTrue = true;
			break;
		}
	}
	return someTrue;
}
let every = function(arr, fn) {
	let everyTrue = true;
	for(let i = 0, len = arr.length; i < len; i++) {
		if(!fn(arr[i], i, arr)) {
			everyTrue = false;
			break;
		}
	}
	return everyTrue;
}
let map = function(arr, fn) {
	let mapResult = [];
	for(let i = 0, len = arr.length; i < len; i++) {
		mapResult.push(fn(arr[i], i, arr));
	}
	return mapResult;
}

let keys = function(arrOrObj, fn) {
	let keysResult = [];
	if(arrOrObj instanceof Array) {
		for(let i = 0, len = arrOrObj.length; i < len; i++) {
			keysResult.push(i);
		}
	}else{
		for(let keys in obj) {
			keysResult.push(keys);
		}
	}
	return keysResult;
}
let values = function(arrOrObj, fn) {
	let valuesResult = [];
	if(arrOrObj instanceof Array) {
		for(let i = 0, len = arrOrObj.length; i < len; i++) {
			valuesResult.push(arrOrObj[i]);
		}
	}else{
		for(let keys in obj) {
			valuesResult.push(arrOrObj[keys]);
		}
	}
	return valuesResult;
}
let entries = function(arrOrObj, fn) {
	let entriesResult = [];
	if(arrOrObj instanceof Array) {
		for(let i = 0, len = arrOrObj.length; i < len; i++) {
			entriesResult.push([i, arrOrObj[i]]);
		}
	}else{
		for(let keys in obj) {
			entriesResult.push([keys, arrOrObj[keys]]);
		}
	}
	
	return entriesResult;
}

/**
* 判断两个变量是否SameValueZero相等
*
*/
// 复杂类型只考虑Boolean, Number, String, Object, Array, Date
// new Boolean()的返回值是一个对象，Boolean(new Boolean())这个为真
// 判断new Boolean(bool)的真假 ==> new Boolean(bool).toString() ==> 转化为字符串类型

// 判断Object的缺陷：
// 1、key==>value中的value不能是NaN，也就是不能区分null和NaN
// 2、key==>value中的value不能是undefined，否则不比较当前的键值
let isEqual = function(e1, e2) {
	let typeofE1 = typeof e1;
	let typeofE2 = typeof e2;
	if(e1 === e2) {
		log('===');
		return true;
	}else{
		if(e1 !== e1 || e2 !== e2){
			log('NaN:');
			return (e1 !== e1 && e2 !== e2);
		}else if(e1 === null || e2 === null || typeofE1 === 'function' || typeofE2 === 'function'){
			log('null || function:');
			return false;
		}else if(typeofE1 === 'object' && typeofE2 === 'object') { // 不存在null, NaN, function，并且两个都是复杂类型
			if(e1 instanceof Array && e2 instanceof Array){
				if(e1.length !== e2.length || JSON.stringify(e1) !== JSON.stringify(e2)) { // 粗略判断检验
					log('粗略判断检验:');
					return false;
				}else{
					let arrEqual = true;
					for(let i = 0, len = e1.length; i < len; i++) {
						if(!isEqual(e1[i], e2[i])) {
							arrEqual = false;
							break;
						}
					}
					log('---');
					return arrEqual;
				}
			}else if(e1.constructor === Object && e2.constructor === Object) {
				log('Object判断：（不能辨别null和NaN）');
				return JSON.stringify(e1) === JSON.stringify(e2);
			}else if(e1 instanceof Number && e2 instanceof Number) {
				log('Number:');
				return Number(e1) === Number(e2);
			}else if(e1 instanceof String && e2 instanceof String) {
				log('String:');
				return String(e1) === String(e2);
			}else if(e1 instanceof Boolean && e2 instanceof Boolean) {
				log('Boolean:');
				return e1.toString() === e2.toString();
			}else if(e1 instanceof Date && e2 instanceof Date){
				log('Date:');
				log('e1===>' + e1.getTime());
				log('e2===>' + e2.getTime());
				return e1.getTime() === e2.getTime();
			}else{
				log('非数组、Object、Number、String、Boolean、Date的判断:');
				return false;
			}
		}else{ // 不存在null, NaN, function，并且一个是简单类型，一个是复杂类型
			let e1isObj = typeof e1 === 'object';
			let e2isObj = typeof e2 === 'object';
			let E1, E2;
			if(e1 instanceof Number || e2 instanceof Number) {
				log('Number:');
				E1 = e1isObj ? Number(e1) : e1;
				E2 = e2isObj ? Number(e2) : e2;
				return E1 === E2;
			}else if(e1 instanceof String || e2 instanceof String) {
				log('String:');
				E1 = e1isObj ? String(e1) : e1;
				E2 = e2isObj ? String(e2) : e2;
				return E1 === E2;
			}else if(e1 instanceof Boolean) {
				log('e1 is Boolean Object:');
				return (typeof e2 === 'boolean') && e1.toString() === e2.toString();
			}else if(e2 instanceof Boolean) {
				log('e2 is Boolean Object:');
				return (typeof e1 === 'boolean') && e1.toString() === e2.toString();
			}else{
				log('简单类型和复杂类型的比较:');
				return false;
			}
		}
	}
}
// 单个数组
/**
* 值类型去重，可对NaN去重，使用indexOf
*/ 
let uniq = function(arr) {
	let len = arr.length;
	let uniqResult = [];
	let hasNaN = false;
	for(let i = 0; i < len; i++) {
		if(arr[i] !== arr[i]) {
			if(!hasNaN) {
				hasNaN = true;
				uniqResult.push(NaN);
			}
		}else if(uniqResult.indexOf(arr[i]) === -1) {
			uniqResult.push(arr[i]);
		}
	}
	return uniqResult;
}
/**
* 数组中的Object通过某个键值去重，该键对应的值最好为数字或字符串
*
*/ 
let uniqBy = function(arrObj, key) {
	let len = arrObj.length;
	let uniqResult = [];
	let keyArr = [];
	let hasNaN = false;
	for(let i = 0; i < len; i++) {
		if(arrObj[i][key] !== undefined && keyArr.indexOf(arrObj[i][key]) === -1) {
			if(arrObj[i][key] !== arrObj[i][key]) {
				if(!hasNaN) {
					hasNaN = true;
					uniqResult.push(arrObj[i]);
				}
			}else{
				keyArr.push(arrObj[i][key]);
				uniqResult.push(arrObj[i]);
			}
		}
	}
	return uniqResult;
}
let uniqWith = function(arrObj, fn) {
	let len = arrObj.length;
	let uniqResult = [];
	for(let i = 0; i < len; i++) {
		let uniqBoolean = true;
		for(let j = 0; j < uniqResult.length; j++) {
			if(fn(arrObj[i], uniqResult[j])) {
				uniqBoolean = false;
				break;
			}
		}
		if(uniqBoolean) {
			uniqResult.push(arrObj[i]);
		}
	}
	return uniqResult;
}

// 两个数组
/**
* 值类型排除，可对NaN排除，使用indexOf
*/ 
let difference = function(arr1, arr2) {
	let diffResult = [];
	for(let i = 0; i < arr1.length; i++) {
		let diffBoolean = true;
		for(let j = 0; j < arr2.length; j++) {
			if((arr1[i] !== arr1[i] && arr2[j] !== arr2[j]) || arr1[i] === arr2[j]) {
				diffBoolean = false;
				break;
			}
		}
		if(diffBoolean) {
			diffResult.push(arr1[i]);
		}
	}
	return diffResult;
}
/**
* 引用类型通过某个键值排除，该键值最好为数字或字符串，不做NaN的对比
*
*/ 
let differenceBy = function(arrObj1, arrObj2, key) {
	let diffResult = [];
	let arrObj2Keys = [];
	for(let j = 0; j < arrObj2.length; j++) {
		arrObj2Keys.push(arrObj2[j][key]);
	}
	for(let i = 0; i < arrObj1.length; i++) {
		if(arrObj2Keys.indexOf(arrObj1[i][key]) == -1) {
			diffResult.push(arrObj1[i]);
		}
	}
	return diffResult;
}
let differenceWith = function(arrObj1, arrObj2, fn) {
	let diffResult = [];
	for(let i = 0; i < arrObj1.length; i++) {
		let diffBoolean = true;
		for(let j = 0; j < arrObj2.length; j++) {
			if(fn(arrObj1[i], arrObj2[j])) {
				diffBoolean = false;
				break;
			}
		}
		if(diffBoolean) {
			diffResult.push(arrObj1[i]);
		}
	}
	return diffResult;
}


export default {
	log,
	isArray,
	forEach,
	
	find,
	findIndex,
	filter,
	remove,
	some,
	every,
	map,

	isEqual,

	keys,
	values,
	entries,

	uniq,
	uniqBy,
	uniqWith,
	difference,
	differenceBy,
	differenceWith
}

