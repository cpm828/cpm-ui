<template>
    <div class="page-wrap index-wrap">
        <h2>cpm-ui--vue2.0</h2>

        <div class="block">
            <div class="block-item" v-for="(item, index) in list" :key="index">
                <router-link :to="item.path">{{item.title}}</router-link>
            </div>
        </div>

        <div class="block">
            <div class="block-item" v-for="(item, index) in list" :key="index">
                <router-link :to="item.path">{{item.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    title: 'Toast提示',
                    path: '/toast'
                },
                {
                    title: 'Loading加载',
                    path: '/loading'
                },
                {
                    title: 'Dialog弹窗',
                    path: '/dailog'
                }
            ]
        }
    }
}
</script>