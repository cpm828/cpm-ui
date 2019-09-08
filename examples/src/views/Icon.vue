<template>
  <div class="page-wrap index-wrap">
    <h2>Icon</h2>

    <div class="block">
      <div
        class="block-item"
        :class="{'active': item.showCode}"
        v-for="(item, index) in list"
        :key="index"
      >
        <a>
          {{index + 1}}、{{item.title}}
          <i @click.prevent.stop="showCode(item, index)">code</i>
        </a>
        <code-block :code="item.code" v-if="item.showCode"></code-block>
      </div>
    </div>

    <div class="block">
      <div c_wrap="ta-l p-20">
        <p c_wrap="fs-18 c_000">常用的icon如下：</p>
        <p c_wrap="fs-14 ta-j">1. icon下方依次是unicode，font-class和symbol字段值，font-class和symbol同名，对应于组件内type；</p>
        <p c_wrap="fs-14 ta-j">2. font-class和symbol真实字段前面有icon-，如icon-close，已在组件内统一处理。</p>
      </div>
      <div c_wrap="flex ai-c fw-w">
        <div
          style="width:25%;margin-bottom:10px"
          c_wrap="flex fd-c"
          v-for="(item, index) in list2"
          :key="index"
        >
          <cIcon render="unicode" :type="item.unicode" :color="iconColor" size="1.5rem" @cIconClick="cIconClick" :key="iconColor"></cIcon>
          <i c_wrap="fs-10 c-333">{{item.unicode}}</i>
          <i c_wrap="fs-10 c-333">{{item.font}}</i>
          <i c_wrap="fs-10 c-333">{{item.symbol}}</i>
        </div>
      </div>
      <a class="aLink" c_wrap="fs-12" href="https://cpm828.github.io/cpm_ui/fontdemo/demo_index.html">以上只列举了使用频率较多的icon，更多请查看</a>
      <br>
      <a class="aLink" c_wrap="fs-12" href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cIcon.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'icon',
  components: { codeBlock },
  data () {
    return {
      list: [
        {
          title: 'unicode渲染（ie6+）',
          showCode: false,
          code: `<cIcon render="unicode" type="&#xe699;" color="white" size="15px" @cIconClick="cIconClick"></cIcon>`
        },
        {
          title: 'font-class渲染（ie8+，默认）',
          showCode: false,
          code: `<cIcon render="font-class" type="delete" color="white" size="2rem" @cIconClick="cIconClick"></cIcon>`
        },
        {
          title: 'symbol渲染（ie9+，svg渲染）',
          showCode: false,
          code: `<cIcon render="symbol" type="delete" color="white" size="2rem" @cIconClick="cIconClick"></cIcon>`
        }
      ],
      list2: [
        // 第1行
        {
          unicode: '&#xe65e;',
          font: 'check'
        },
        {
          unicode: '&#xe660;',
          font: 'check-filled'
        },
        {
          unicode: '&#xe65f;',
          font: 'close'
        },
        {
          unicode: '&#xe65d;',
          font: 'close-filled'
        },
        // 第2行
        {
          unicode: '&#xe661;',
          font: 'forbidden'
        },
        {
          unicode: '&#xe662;',
          font: 'forbidden-filled'
        },
        {
          unicode: '&#xe666;',
          font: 'help'
        },
        {
          unicode: '&#xe665;',
          font: 'help-filled'
        },
        // 第3行
        {
          unicode: '&#xe664;',
          font: 'info'
        },
        {
          unicode: '&#xe663;',
          font: 'info-filled'
        },
        {
          unicode: '&#xe68b;',
          font: 'info-down'
        },
        {
          unicode: '&#xe68c;',
          font: 'info-down-filled'
        },
        // 第4行
        {
          unicode: '&#xe66b;',
          font: 'star'
        },
        {
          unicode: '&#xe66c;',
          font: 'star-filled'
        },
        {
          unicode: '&#xe6e1;',
          font: 'volume-off'
        },
        {
          unicode: '&#xe6e3;',
          font: 'volume'
        },
        // 第5行
        {
          unicode: '&#xe66d;',
          font: 'arrow-up'
        },
        {
          unicode: '&#xe66f;',
          font: 'arrow-down'
        },
        {
          unicode: '&#xe66e;',
          font: 'arrow-left'
        },
        {
          unicode: '&#xe670;',
          font: 'arrow-right'
        },
        // 第6行
        {
          unicode: '&#xe677;',
          font: 'show-less'
        },
        {
          unicode: '&#xe678;',
          font: 'show-more'
        },
        {
          unicode: '&#xe675;',
          font: 'page-turn-left'
        },
        {
          unicode: '&#xe676;',
          font: 'page-turn-right'
        },
        // 第7行
        {
          unicode: '&#xe69e;',
          font: 'close-simple'
        },
        {
          unicode: '&#xe699;',
          font: 'delete'
        },
        {
          unicode: '&#xe63f;',
          font: 'search'
        },
        {
          unicode: '&#xe640;',
          font: 'edit'
        }
      ],
      iconColorArr: ['#333', '#4080e8', '#079a07', '#27c3d8', '#960596'],
      iconColor: '#333'
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
    cIconClick () {
      this.iconColor = this.iconColorArr[Math.floor(Math.random() * this.iconColorArr.length)]
    }
  }
}
</script>

<style lang="scss">
</style>
