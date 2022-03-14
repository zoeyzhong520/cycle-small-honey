<template>
	<view class="checkCycle-container">
		<text class="checkCycle-container-title textPrimaryColor">请选择需要查询的年份：</text>
		<!-- 年份列表 -->
		<view
			@click="listClick(item)"
			class="checkCycle-container-list"
			v-for="(item,index) in Array(5)"
		   :key="index">
			<text>{{`${2018+index}`}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			listClick(e) {
				uni.navigateTo({
					url:'/subPackages/checkCycle/cycleDetail/cycleDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
