<template>
	<div class="demo">
		<h1>demo页面</h1>	
		<div>
			<a @click="getAjax">请求demo</a>
			<div v-for="(item,i) in demoData" :key="i">
				<span>name: {{item.description}}</span>
				<span>code: {{item.code}}</span>
			</div>
		</div>
	</div>

</template>

<script>
	import {demoApi1} from 'api/demo'

	export default {
		data(){
			return {
				demoData: '',
			}
		},
		methods: {
			getAjax(){
				const _this = this;
				demoApi1().then(data => {
					console.log(data);
					_this.demoData = data.body.list
				})
			}
		}
	}
</script>

<style scoped>
	.demo {
		text-align: center;
		margin-top: 20px;
	}
</style>