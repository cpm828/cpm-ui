<template>
    <div class="page-wrap index-wrap">
        <h2>Toast提示</h2>

        <div class="block">
            <div class="block-item" v-for="(item, index) in list" :key="index">
                <a @click.prevent="showToast(index)">{{index + 1}}、{{item.title}}<i
                        @click.prevent.stop="showCode(item, index)">code</i></a>
                <code-block :code="item.code" v-if="item.showCode"></code-block>
            </div>
        </div>
    </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
    name: 'toast',
    components: { codeBlock },
    data () {
        return {
            list: [
                {
                    title: '简单传参',
                    showCode: false,
                    code: `
this.$toast('我是测试的toast文本内容1')`
                },
                {
                    title: '复杂传参',
                    showCode: false,
                    code: `
this.$toast({
    propsData: {
        message: '我是测试的toast文本内容2'
    }
})`
                },
                {
                    title: '自定义关闭时间',
                    showCode: false,
                    code: `
this.$toast({
    propsData: {
        message: '我是测试的toast文本内容3',
        time: 3000
    }
})`
                },
                {
                    title: '倒计时回调',
                    showCode: false,
                    code: `
this.$toast({
    propsData: {
        message: '我是测试的toast文本内容3',
        time: 3000
    }
}),
methods: {
    callback () {
        alert('toast 消失了')
    }
}`
                },
                {
                    title: '全部参数',
                    showCode: false,
                    code: `
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
})`
                }
            ]
        }
    },
    methods: {
        showCode (item, index) {
            if (item.showCode) {
                item.showCode = false
                return
            }
            this.list.map((item) => {
                return (item.showCode = false)
            })
            this.list[index].showCode = true
        },
        showToast (index) {
            this[`showToast${index + 1}`]()
        },
        showToast1 () {
            this.$toast('我是测试的toast文本内容1')
        },
        showToast2 () {
            this.$toast({
                propsData: {
                    message: '我是测试的toast文本内容2',
                    time: 1000000000
                }
            })
        },
        showToast3 () {
            this.$toast({
                propsData: {
                    message: '我是测试的toast文本内容3',
                    time: 3000
                }
            })
        },
        showToast4 () {
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
        },
        showToast5 () {
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
        },
    }
}
</script>
