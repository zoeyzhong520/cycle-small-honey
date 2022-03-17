<template>
	<view class="write-cycle">
		<u-transition :show="showTransition" mode="fade-up">
			<floatBtn @click="floatBtnClick" />
		</u-transition>
		<u-notify ref="uNotify"></u-notify>
	</view>
</template>

<script>
	import floatBtn from '../../../components/indexFloatButton/indexFloatButton.vue'

	export default {
		data() {
			return {
				showTransition: false,
				showNotify: false,
			}
		},
		components: {
			floatBtn
		},
		onShow() {
			this.showTransition = true
		},
		onHide() {
			this.showTransition = false
		},
		onLoad() {
			
		},
		methods: {
			floatBtnClick() {
				this.$refs.uNotify.show({
					type: 'success',
					bgColor: '#e96494',
					message: '有新的周期更新成功',
					duration: 2000
				})
			},
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
