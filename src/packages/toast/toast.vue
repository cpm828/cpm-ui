<template>
    <div class="cpm-toast">
        <div class="cpm-toast-wrap" v-bind:style="styleObj">
            <!-- <div class="cpm-toast-icon" v-if="type !== 'long'"></div> -->
            <!-- <div :class="['cpm-toast-msg', type === 'long' ? 'cpm-toast-longmsg' : '']" v-html="message"></div> -->

            <div class="cpm-toast-msg" v-html="message"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cpmToast',
    data () {
        return {
        }
    },
    props: {
        // toast样式
        wrapStyleObj: {
            type: Object,
            default: () => { }
        },
        // toast位置(top、middle、bottom)
        position: {
            type: String,
            default: 'middle'
        },
        // toast显示信息
        message: {
            type: String
        },
        // toast显示时间（ms）
        time: {
            type: Number,
            default: 2000
        },
        // toast 类型
        type: {
            type: String,
            default: 'long'
        }
    },
    mounted () {
        const self = this
        self.timeoutId = setTimeout(() => {
            self.remove()
            self.callback()
        }, self.time)
        window.addEventListener('hashchange', this.remove) // 监听SPA页面hash的变化
    },
    computed: {
        styleObj () {
            if (this.position === 'top') {
                return { top: '20%' }
            } else if (this.position === 'middle') {
                return { top: '50%' }
            } else if (this.position === 'bottom') {
                return { top: '80%' }
            }
            // return this.wrapStyleObj.bottom
            //     ? this.wrapStyleObj
            //     : Object.assign({ top: '35%' }, this.wrapStyleObj)
        }
    },
    methods: {
        callback () {
            // 组件调用时设置
        },
        remove () {
            const self = this
            clearTimeout(self.timeoutId)
            window.removeEventListener('hashchange', this.remove) // SPA单页需要
            self.$el.remove() // 删除toast
            self.$destroy() // 销毁组件
        }
    }
}
</script>

<style lang="scss" scoped>
.cpm-toast {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 888;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    .cpm-toast-wrap {
        position: fixed;
        left: 50%;
        background: #4c4c4c;
        border-radius: 7px;
        min-width: 184px;
        max-width: 240px;
        margin-left: -92px;

        display: flex;
        justify-content: center;
        align-items: center;

        .cpm-toast-icon {
            padding: 20px 0 10px 0;
        }
        .cpm-toast-msg {
            font-size: 14px;
            padding: 20px;
        }
        .cpm-toast-longmsg {
            padding: 20px 20px;
        }
    }
}
</style>
