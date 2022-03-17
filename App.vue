<script>	
	import { configs } from './public/request.js'

	export default {
		onLaunch: function() {
			console.log('App Launch')
			// HTTP
			this.getConfigs()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			// 配置信息
			getConfigs() {
				configs(this.$bmob).then(res => {
					this.$store.commit('updateConfigs', res[0])
				})
			}
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>

<style>
	/*每个页面公共css */
	@import url("./public/public.css");
</style>
