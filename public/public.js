/**
 * @description 本月日期判断
 * @param {type} inDate一个date对象 
 */ 
export const isSameMonth = function(inDate) { // inDate 是一个date对象
	var nowDate = new Date();
	return ((nowDate.getFullYear() == inDate.getFullYear()) &&
		(nowDate.getMonth() == inDate.getMonth())
	);
}
