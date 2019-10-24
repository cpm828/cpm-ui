<template>
  <div class="page-wrap rate-wrap">
    <div class="top">Rate评分</div>
    <div c_wrap="pl-20 pr-20">
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">默认 星星：</span>
          <cRate @onChange="onChange" v-model="rateConfig1.value"></cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(1)">code</span>
        <code-block type="html" :code="rateConfig1.code" v-if="rateConfig1.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">类型2 心形：</span>
          <cRate :type="rateConfig2.type" v-model="rateConfig2.value"></cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(2)">code</span>
        <code-block type="html" :code="rateConfig2.code" v-if="rateConfig2.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">类型3 笑脸：</span>
          <cRate :type="rateConfig3.type" v-model="rateConfig3.value"></cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(3)">code</span>
        <code-block type="html" :code="rateConfig3.code" v-if="rateConfig3.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">星星（6分制，带结果）：</span>
          <cRate :type="rateConfig4.type" :max="rateConfig4.max" v-model="rateConfig4.value">
            <span style="font-size:0.8rem;margin-left:0.3rem">
              {{rateConfig4.value ? rateConfig4.texts[rateConfig4.value - 1] : ''}}
            </span>
          </cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(4)">code</span>
        <code-block type="html" :code="rateConfig4.code" v-if="rateConfig4.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">笑脸（6分制，3种笑脸）：</span>
          <cRate :type="rateConfig5.type" :max="rateConfig5.max" :threshold="rateConfig5.threshold" v-model="rateConfig5.value">
            <span style="font-size:0.8rem;margin-left:0.3rem">
              {{rateConfig5.value ? rateConfig5.texts[rateConfig5.value - 1] : ''}}
            </span>
          </cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(5)">code</span>
        <code-block type="html" :code="rateConfig5.code" v-if="rateConfig5.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">笑脸（6分制，设置颜色）：</span>
          <cRate :type="rateConfig6.type" :max="rateConfig6.max" :threshold="rateConfig6.threshold" :voidColor="rateConfig6.voidColor" :colors="rateConfig6.colors" v-model="rateConfig6.value">
            <span style="font-size:0.8rem;margin-left:0.3rem">
              {{rateConfig6.value ? rateConfig6.texts[rateConfig6.value - 1] : ''}}
            </span>
          </cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(6)">code</span>
        <code-block type="html" :code="rateConfig6.code" v-if="rateConfig6.showCode"></code-block>
      </div>
      <div c_wrap="mb-20">
        <div c_wrap="flex fd ai-c">
          <span c_wrap="fs-14">笑脸（只读）：</span>
          <cRate :type="rateConfig7.type" :disabled="rateConfig7.disabled" :disabledVoidColor="rateConfig7.disabledVoidColor" v-model="rateConfig7.value">
          </cRate>
        </div>
        <span class="code-btn" @click.prevent.stop="showCode(7)">code</span>
        <code-block type="html" :code="rateConfig7.code" v-if="rateConfig7.showCode"></code-block>
      </div>
    </div>
    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm828.github.io/blob/master/cpm_ui/document/cRate.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'Rate',
  components: { codeBlock },
  data () {
    return {
      rateConfig1: {
        value: 0,
        showCode: false,
        code: `<cRate @onChange="onChange" v-model="rateConfig1.value"></cRate>

rateConfig1: {
  value: 0
}`
      },
      rateConfig2: {
        type: 'heart',
        value: 1,
        showCode: false,
        code: `<cRate :type="rateConfig2.type" v-model="rateConfig2.value"></cRate>

rateConfig2: {
  type: 'heart',
  value: 1
}`
      },
      rateConfig3: {
        type: 'smile',
        value: 2,
        showCode: false,
        code: `<cRate :type="rateConfig3.type" v-model="rateConfig3.value"></cRate>

rateConfig3: {
  type: 'smile',
  value: 2
}`
      },
      rateConfig4: {
        value: 0,
        max: 6,
        texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],
        showCode: false,
        code: `<cRate :type="rateConfig4.type" :max="rateConfig4.max" v-model="rateConfig4.value">
  <span style="font-size:0.8rem;margin-left:0.3rem">
    {{rateConfig4.value ? rateConfig4.texts[rateConfig4.value - 1] : ''}}
  </span>
</cRate>

rateConfig4: {
  value: 0,
  max: 6,
  texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌']
}`
      },
      rateConfig5: {
        type: 'smile',
        value: 0,
        max: 6,
        texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],
        threshold: [2, 5],
        showCode: false,
        code: `<cRate :type="rateConfig5.type" :max="rateConfig5.max" :threshold="rateConfig5.threshold" v-model="rateConfig5.value">
  <span style="font-size:0.8rem;margin-left:0.3rem">
    {{rateConfig5.value ? rateConfig5.texts[rateConfig5.value - 1] : ''}}
  </span>
</cRate>

rateConfig5: {
  type: 'smile',
  value: 0,
  max: 6,
  texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],
  threshold: [2, 5]
}`
      },
      rateConfig6: {
        type: 'smile',
        value: 0,
        max: 6,
        texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],
        threshold: [2, 5],
        voidColor: '#ddd',
        colors: ['green', 'blue', 'red'],
        showCode: false,
        code: `<cRate :type="rateConfig6.type" :max="rateConfig6.max" :threshold="rateConfig6.threshold" :voidColor="rateConfig6.voidColor" :colors="rateConfig6.colors" v-model="rateConfig6.value">
  <span style="font-size:0.8rem;margin-left:0.3rem">
    {{rateConfig6.value ? rateConfig6.texts[rateConfig6.value - 1] : ''}}
  </span>
</cRate>
  
rateConfig6: {
  type: 'smile',
  value: 0,
  max: 6,
  texts: ['极差', '失望', '一般', '满意', '惊喜', '无敌'],
  threshold: [2, 5],
  voidColor: '#ddd',
  colors: ['green', 'blue', 'red']
}`
      },
      rateConfig7: {
        type: 'smile',
        value: 4,
        disabled: true,
        disabledVoidColor: '#ddd',
        showCode: false,
        code: `<cRate :type="rateConfig7.type" :disabled="rateConfig7.disabled" :disabledVoidColor="rateConfig7.disabledVoidColor" v-model="rateConfig7.value">
</cRate>
  
rateConfig7: {
  type: 'smile',
  value: 4,
  disabled: true,
  disabledVoidColor: '#ddd'
}`
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    showCode (type) {
      if (this[`rateConfig${type}`].showCode) {
        this[`rateConfig${type}`].showCode = false
        return
      }
      for (let i = 1, len = 7; i <= len; i++) {
        this[`rateConfig${i}`].showCode = false
      }
      this[`rateConfig${type}`].showCode = true
    },
    onChange (index) {
      this.$toast(`您给的评分为：${index}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
