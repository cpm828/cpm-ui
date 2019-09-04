<template>
    <div class="index-wrap">
        <h2>Loading加载中</h2>

        <div class="block">
            <div>
                <a @click.prevent="show1()">简单传参</a>
            </div>
            <div>
                <a @click.prevent="show2()">复杂传参</a>
            </div>
            <div>
                <a @click.prevent="show3()">自定义关闭时间</a>
            </div>
            <div>
                <a @click.prevent="show4()">倒计时回调</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    methods: {
        show1 () {
            this.$toast('我是测试的toast文本内容1')
        },
        show2 () {
            this.$toast({
                propsData: {
                    message: '我是测试的toast文本内容2'
                }
            })
        },
        show3 () {
            this.$toast({
                propsData: {
                    message: '我是测试的toast文本内容3',
                    time: 3000
                }
            })
        },
        show4 () {
            // 注：调用方法除props改用propsData外，其余都与组件内部一致，可使用propsData、data、computed、methods、watch
            this.$toast({
                propsData: {
                    message: '我是测试的toast文本内容4',
                    time: 3000
                },
                methods: {
                    callback () {
                        alert('toast 消失了')
                    }
                }
            })
        }
    }
}
</script>
