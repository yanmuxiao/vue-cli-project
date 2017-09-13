<template>

	<div class="">
		
		<h2 class="control">控制台</h2>
		<div class="flex"></div>
		<i class="el-icon-fa-heart"></i>

	</div>

</template>

<style lang="scss">

$color: #f00;
.control {
	color: $color
}

</style>

<script>
	// import { mapState } from 'vuex'
	export default {
		data() {
			return {
			
			}
		},
		computed: {
			// ...mapState({
			// 	asideMenu: state => state.publicM.asideMenu
			// }),
		},
		methods: {

		},
		created() {
			// console.log(this.$store.state.publicM.asideMenu)
			// console.log('Index导航完成后获取数据填充');
		}
	}

</script>