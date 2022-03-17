import {
	isSameMonth
} from './public.js'

/**
 * @description 修改一条周期记录
 * @param {Bmob} bmob this.$bmob
 * @@param {Number} timestamp 记录的时间戳毫秒
 */
export const updateCycle = function(bmob, timestamp) {
	return new Promise((resolve, reject) => {
		// 本月日期判断
		let flag = false
		// 记录ID
		let objectId = ''

		const query = bmob.Query("CSH_AllCycles");
		query.limit(10);
		query.order("-timestamp");
		uni.showLoading()
		query.find().then(res => {
			// 遍历最近10次的周期记录
			for (let i = 0; i < res.length; i ++) {
				if (isSameMonth(new Date(res[i].timestamp))) {
					flag = true
					objectId = res[i].objectId
					break
				}
			}

			// 有当月周期记录，询问是否需要再次更新
			if (flag) {
				uni.hideLoading()
				uni.showModal({
					title: '温馨提示',
					content: '本月周期已更新过，是否要覆盖？',
					confirmText:'确定',
					cancelText:'取消',
					confirmColor:'#e96494',
					success(res) {
						if (res.confirm) {
							// 重新提交周期，就修改记录
							uni.showLoading()
							query.get(objectId).then(res => {
								uni.hideLoading()
								res.set('timestamp', timestamp)
								res.save()
								resolve(res)
							}).catch(err => {
								uni.hideLoading()
								reject(err)
							})
						}
					}
				})
				return
			}

			// 没有当月周期记录，就新增记录
			if (!flag) {
				// 新增一条记录
				query.set("timestamp", timestamp)
				query.save().then(res => {
					uni.hideLoading()
					resolve(res)
				}).catch(err => {
					uni.hideLoading()
					reject(err)
				})
			}
		});
	})
}

/**
 * @description 获取周期记录
 * @param {Bmob} bmob Bmob对象
 * @param {Number} page 分页 
 */ 
export const allCycles = function(bmob, page) {
	return new Promise((resolve, reject) => {
		const query = bmob.Query("CSH_AllCycles");
		query.limit(1000)
		query.skip(page > 1 ? 1000*(page-1) : 0)
		query.find().then(res => {
		    resolve(res)
		}).catch(err => {
			reject(err)
		});
	})
}