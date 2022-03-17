<template>
	<view class="checkCycle-container">
		<text class="checkCycle-container-title textPrimaryColor">请选择需要查询的年份：</text>
		<!-- 年份列表 -->
		<view
			@click="listClick(item)"
			class="checkCycle-container-list"
			v-for="(item,index) in cycles"
		   :key="index">
			<text>{{item.year}}</text>
		</view>
	</view>
</template>

<script>
	import { allCycles } from '../../../public/request.js'
	import { combinateCycles } from './index.js'
	
	export default {
		data() {
			return {
				page: 1,
				show: false,
				list: [],
				cycles: [],
			}
		},
		onLoad() {
			uni.startPullDownRefresh()
		},
		methods:{
			/**
			 * @description 获取周期记录
			 * @param {Boolean} isRefresh 是否刷新首页
			 * */ 
			getCycles(isRefresh = true) {
				if (isRefresh) {
					this.page = 1
				} else {
					this.page ++
					uni.showLoading()
				}
				
				allCycles(this.$bmob, this.page, this.$store.state.configs.isInReview).then(list => {
					uni.hideLoading()
					uni.stopPullDownRefresh()
					
					if (isRefresh) {
						this.list = list
					} else {
						this.list = this.list.concat(list)
					}
					this.cycles = combinateCycles(this.list)
					
				}).catch(err => {
					uni.hideLoading()
					uni.stopPullDownRefresh()
				})
			},
			listClick(e) {
				uni.$u.route('/subPackages/checkCycle/cycleDetail/cycleDetail', {
					datas: JSON.stringify(e)
				})
			}
		},
		onPullDownRefresh() {
			this.getCycles(true)
		},
		onReachBottom() {
			this.getCycles(false)
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
