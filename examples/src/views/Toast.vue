<template>
	<div class="toast-wrap">
		<div class="btn" @click="show1()">简单传字符串</div>
		<div class="btn" @click="show2()">简单标准形式</div>
		<div class="btn" @click="show3()">3s消失且有回调</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {}
		},
		mounted () {
		},
		methods: {
			show1() {
				const self = this;
				self.$toast('我是测试的toast文本内容1');
			},
			show2() {
				const self = this;
				self.$toast({
					propsData: {
						message: '我是测试的toast文本内容2'
					},
				});
			},
			show3() {
				const self = this;
				// 注：调用方法除props改用propsData外，其余都与组件内部一致，可使用propsData、data、computed、methods、watch
				self.$toast({
					propsData: {
						message: '我是测试的toast文本内容3',
						time: 3000
					},
					methods: {
						callback() {
							alert('toast 消失了')
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.toast-wrap {
		width: 100%;
		height: 100%;
		
		.para {
			font-size: 24px;
		}
	}
</style>
