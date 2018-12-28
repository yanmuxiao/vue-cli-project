// 单个数组
/**
* 值类型去重，可对NaN去重，使用indexOf
*/ 
var uniq = function(arr) {
	var len = arr.length;
	var uniqResult = [];
	var hasNaN = false;
	for(var i = 0; i < len; i++) {
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
* 引用类型通过某个键值去重，该键值最好为数字或字符串，不做NaN的对比
*
*/ 
var uniqBy = function(arrObj, key) {
	var len = arrObj.length;
	var uniqResult = [];
	var keyArr = [];
	for(var i = 0; i < len; i++) {
		if(arrObj[i][key] && keyArr.indexOf(arrObj[i][key]) === -1) {
			keyArr.push(arrObj[i][key]);
			uniqResult.push(arrObj[i]);
		}
	}
	return uniqResult;
}
var uniqWith = function(arrObj, fn) {
	var len = arrObj.length;
	var uniqResult = [];
	for(var i = 0; i < len; i++) {
		var uniqBoolean = true;
		for(var j = 0; j < uniqResult.length; j++) {
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
var difference = function(arr1, arr2) {
	var diffResult = [];
	for(var i = 0; i < arr1.length; i++) {
		var diffBoolean = true;
		for(var j = 0; j < arr2.length; j++) {
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
var differenceBy = function(arrObj1, arrObj2, key) {
	var diffResult = [];
	var arrObj2Keys = [];
	for(var j = 0; j < arrObj2.length; j++) {
		arrObj2Keys.push(arrObj2[j][key]);
	}
	for(var i = 0; i < arrObj1.length; i++) {
		if(arrObj2Keys.indexOf(arrObj1[i][key]) == -1) {
			diffResult.push(arrObj1[i]);
		}
	}
	return diffResult;
}
var differenceWith = function(arrObj1, arrObj2, fn) {
	var diffResult = [];
	for(var i = 0; i < arrObj1.length; i++) {
		var diffBoolean = true;
		for(var j = 0; j < arrObj2.length; j++) {
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

/**
* 判断两个变量是否SameValueZero相等
*
*/
// 复杂类型只考虑Boolean, Number, String, Object, Array
// new Boolean()的返回值是一个对象，Boolean(new Boolean())这个为真
// 判断new Boolean(bool)的真假 ==> new Boolean(bool).toString() ==> 转化为字符串类型

// 判断Object的缺陷：
// 1、key==>value中的value不能是NaN，也就是不能区分null和NaN
// 2、key==>value中的value不能是undefined，否则不比较当前的键值
var isEqual = function(e1, e2) {
	var typeofE1 = typeof e1;
	var typeofE2 = typeof e2;
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
					var arrEqual = true;
					for(var i = 0, len = e1.length; i < len; i++) {
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
			}else{
				log('非数组、Object、Number、String、Boolean的判断:');
				return false;
			}
		}else{ // 不存在null, NaN, function，并且一个是简单类型，一个是复杂类型
			var e1isObj = typeof e1 === 'object';
			var e2isObj = typeof e2 === 'object';
			var E1, E2;
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


export default {
	uniq,
	uniqBy,
	uniqWith,
	difference,
	differenceBy,
	differenceWith,
	isEqual: isEqual
}

