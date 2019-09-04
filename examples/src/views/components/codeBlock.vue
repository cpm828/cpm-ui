<template>
    <div class="code-view">
        <pre>
            <i class="copy" @click="copyCode">copy</i>
            <code v-html="code"></code>
        </pre>
    </div>
</template>

<script>
import ClipboardJS from 'clipboard'
export default {
    name: 'codeBlock',
    props: {
        code: {
            type: String,
            default: ''
        }
    },
    methods: {
        copyCode () {
            const self = this
            try {
                if (ClipboardJS.isSupported()) {
                    var clipboard = new ClipboardJS('.copy', {
                        text: function () {
                            return self.code
                        }
                    })
                    clipboard.on('success', function (e) {
                        self.$toast('复制成功')
                        e.clearSelection()
                    })
                    clipboard.on('error', function (e) {
                        self.$toast('复制失败请手动复制')
                    })
                } else {
                    self.$toast('复制失败请手动复制')
                }
            } catch (e) {
                self.$toast('复制失败请手动复制')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.code-view {
    width: 100%;
    position: relative;
}
</style>
