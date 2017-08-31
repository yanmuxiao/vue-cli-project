<template>

	<div class="">
		
		<h2 class="control">控制台</h2>
		<div class="flex"></div>

	</div>

</template>

<style lang="scss">

$color: #f00;
.control {
	color: $color
}
.flex {
	display: flex;
}
</style>
<style type="text/css">
	

	
</style>

<script>
	
	export default {
		data() {
			return {
			
			}
		},
		methods: {

		},
		created() {
			console.log('Index导航完成后获取数据填充');
		}
	}

</script>