<template>
	<view class="cycleDetail-page">
		<view
			class="backgroundPrimaryColor cycleDetail-page-list"
			v-for="(item,index) in datas.list"
		    :key="index"
			@click="listClick(index)">
			{{$u.timeFormat(item.timestamp, 'yyyy-mm-dd')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas: [],
			}
		},
		onLoad(e) {
			if (e.datas) {
				this.datas = JSON.parse(e.datas)
				// 遍历数组
				this.datas.list.map(item => {
					item.isClick = false
				})
				
				uni.setNavigationBarTitle({
					title:`${this.datas.year}年度`
				})
			}
		},
		methods: {
			listClick(e) {
				uni.vibrateShort()
				// 遍历数组
				this.datas.list.map((item, index) => {
					item.isClick = index == e
				})
				// 动画结束后恢复
				setTimeout(() => {
					this.datas.list.map(item => {
						item.isClick = false
					})
				},3000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './cycleDetail.scss';
</style>
