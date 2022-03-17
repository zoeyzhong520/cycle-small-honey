<template>
	<view class="index-float-button" @click="btnClick"
	:style="{'margin-top': floatBtnTopMargin, 'background': isClick ? '#e96494' : '#fff'}">
		<u-icon name="plus" :color="isClick ? '#fff' : '#e96494'" size="64rpx"></u-icon>
	</view>
</template>

<script>
	import { updateCycle } from '../../public/request.js'
	
	export default {
		data() {
			return {
				isClick: false,
			}
		},
		computed: {
			floatBtnTopMargin() {
				return uni.getSystemInfoSync().windowHeight-150+'rpx'
			}
		},
		mounted() {
			
		},
		methods: {
			btnClick() {
				/*
				  1 本次记录的周期上报到服务器
				  2 当天提交多次的周期记录只取最新的
				*/ 
				this.isClick = true
				setTimeout(() => {
					this.isClick = false
					
					updateCycle(this.$bmob, new Date().getTime(), this.$store.state.configs.isInReview).then(res => {
						this.$store.commit('updateCycleValue', (new Date()).getTime())
						this.$emit('click',true)
					}).catch(err => {
						
					})
				},150)
			}
		}
	}
</script>

<style>
	@import url("./indexFloatButton.css");
</style>
