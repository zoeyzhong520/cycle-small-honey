/**
 * @description 组合周期数据
 * @param {Array} list 周期数组
 * @return {Array}
 */
export const combinateCycles = function(list) {
	// 年份数组
	let years = []
	// 周期数组
	let cycles = []

	// 遍历list
	list.map(item => {
		// 设置年份
		item.year = new Date(item.timestamp).getFullYear()
		years.push(item.year)
	})

	// Set去重
	years = Array.from(new Set(years))

	for (let i = 0; i < years.length; i++) {
		let year = years[i]
		let cyclesItemList = []

		for (let j = 0; j < list.length; j++) {
			let listItem = list[j]
			if (year == listItem.year) {
				cyclesItemList.push(listItem)
			}
		}
		cycles.push({
			year: year,
			list: cyclesItemList
		})
	}
	return cycles
}
