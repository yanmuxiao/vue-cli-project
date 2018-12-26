(function(window, undefined){
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
	* 引用类型通过某个键值去重，该键值最好为数字或字符串
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


	// 无法区别NaN
	var difference = function(arr1, arr2) {
		var diffResult = [];
		for(var i = 0; i < arr1.length; i++) {
			if(arr2.indexOf(arr1[i]) == -1) {
				diffResult.push(arr1[i]);
			}
		}
		return diffResult;
	}

	var differenceBy = function(arr1, arr2, key) {
		var diffResult = [];
		var arr2Keys = [];
		for(var j = 0; j < arr2.length; j++) {
			arr2Keys.push(arr2[j][key]);
		}
		for(var i = 0; i < arr1.length; i++) {
			if(arr2Keys.indexOf(arr1[i][key]) == -1) {
				diffResult.push(arr1[i]);
			}
		}
		return diffResult;
	}

	var differenceWith = function(arr1, arr2, fn) {
		var diffResult = [];
		for(var i = 0; i < arr1.length; i++) {
			var diffBoolean = true;
			for(var j = 0; j < arr2.length; j++) {
				if(fn(arr1[i], arr2[j])) {
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

	window._ = {
		uniq: uniq,
		uniqBy: uniqBy,
		uniqWith: uniqWith,
		difference: difference,
		differenceBy: differenceBy,
		differenceWith: differenceWith
	}

})(window)