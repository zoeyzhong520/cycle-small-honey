<template>
	<view class="cycleDetail-page">
		<view class="cycleDetail-page-list" v-for="(item,index) in datas.list" :key="index">
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
				
			}
		}
	}
</script>

<style>
</style>
