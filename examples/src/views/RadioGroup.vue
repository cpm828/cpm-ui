<template>
  <div class="page-wrap radiogroup-wrap">
    <div class="top">RadioGroup单选组</div>

    <div c_wrap="ta-l pl-20 pr-20">
      <p c_wrap="fs-14 mb-10 ta-j">
        提示：<br>
        1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
        2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式达到UI效果，如案例5、案例6。<br>
        3. 对于hidden属性，设计之初的目的是为了过滤掉某些不需要展示的项，hidden属性为true时隐藏组件。
      </p>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">1. 普通使用，性别：{{config1.activeValue}}</h3>
        <cRadioGroup :options="config1.options" v-model="config1.activeValue" @onChange="onChange1"></cRadioGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config1)">code</span>
        <code-block :code="config1.code" v-if="config1.showCode"></code-block>
      </div>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">2. 默认选中，性别：{{config2.activeValue}}</h3>
        <cRadioGroup :options="config2.options" v-model="config2.activeValue"></cRadioGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config2)">code</span>
        <code-block :code="config2.code" v-if="config2.showCode"></code-block>
      </div>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">3. 禁用disabled，年级：{{config3.activeValue}}</h3>
        <cRadioGroup :options="config3.options" v-model="config3.activeValue"></cRadioGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config3)">code</span>
        <code-block :code="config3.code" v-if="config3.showCode"></code-block>
      </div>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">4. 隐藏hidden（四年级），年级：{{config4.activeValue}}</h3>
        <cRadioGroup :options="config4.options" v-model="config4.activeValue"></cRadioGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config4)">code</span>
        <code-block :code="config4.code" v-if="config4.showCode"></code-block>
      </div>

      <div c_wrap="pb-10" class="config5">
        <h3 c_wrap="fs-18 mb-10">5. inline-block（改写样式），年级：{{config5.activeValue}}</h3>
        <cRadioGroup :options="config5.options" v-model="config5.activeValue"></cRadioGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config5)">code</span>
        <code-block :code="config5.code" v-if="config5.showCode"></code-block>
      </div>

      <div c_wrap="pb-10" class="config6">
        <h3 c_wrap="fs-18 mb-10">6. 全部参数（改写样式），选择答案：{{config6.activeValue}}</h3>
        <cRadioGroup :options="config6.options" v-model="config6.activeValue"></cRadioGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config6)">code</span>
        <code-block :code="config6.code" v-if="config6.showCode"></code-block>
      </div>

      <div c_wrap="mt-20">
        <cButton type="primary" size="small" @onClick="getData">提交全部</cButton>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://github.com/cpm828/cpm-ui/tree/gh-pages/document/cRadioGroup.md">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'RadioGroup',
  components: { codeBlock },
  data () {
    return {
      config1: {
        options: [
          {
            label: '男',
            value: 'male'
          },
          {
            label: '女',
            value: 'female'
          }
        ],
        activeValue: '',
        showCode: false,
        code: `config1: {
  options: [
    {
      label: '男',
      value: 'male'
    },
    {
      label: '女',
      value: 'female'
    }
  ],
  activeValue: '',
}

<cRadioGroup :options="config1.options" v-model="config1.activeValue"></cRadioGroup>`
      },
      config2: {
        options: [
          {
            label: '男',
            value: 'male'
          },
          {
            label: '女',
            value: 'female'
          }
        ],
        activeValue: 'male',
        showCode: false,
        code: `config2: {
  options: [
    {
      label: '男',
      value: 'male'
    },
    {
      label: '女',
      value: 'female'
    }
  ],
  activeValue: 'male',
}

<cRadioGroup :options="config2.options" v-model="config2.activeValue"></cRadioGroup>`
      },
      config3: {
        options: [
          {
            label: '一年级',
            value: 1,
            disabled: false
          },
          {
            label: '二年级',
            value: 2,
            disabled: false
          },
          {
            label: '三年级',
            value: 3,
            disabled: false
          },
          {
            label: '四年级',
            value: 4,
            disabled: true
          }
        ],
        activeValue: 1,
        showCode: false,
        code: `config3: {
  options: [
    {
      label: '一年级',
      value: 1,
      disabled: false
    },
    {
      label: '二年级',
      value: 2,
      disabled: false
    },
    {
      label: '三年级',
      value: 3,
      disabled: false
    },
    {
      label: '四年级',
      value: 4,
      disabled: true
    }
  ],
  activeValue: 1,
}

<cRadioGroup :options="config3.options" v-model="config3.activeValue"></cRadioGroup>`
      },
      config4: {
        options: [
          {
            label: '一年级',
            value: 1,
            hidden: false
          },
          {
            label: '二年级',
            value: 2,
            hidden: false
          },
          {
            label: '三年级',
            value: 3,
            hidden: false
          },
          {
            label: '四年级',
            value: 4,
            hidden: true
          }
        ],
        activeValue: 1,
        showCode: false,
        code: `config4: {
  options: [
    {
      label: '一年级',
      value: 1,
      hidden: false
    },
    {
      label: '二年级',
      value: 2,
      hidden: false
    },
    {
      label: '三年级',
      value: 3,
      hidden: false
    },
    {
      label: '四年级',
      value: 4,
      hidden: true
    }
  ],
  activeValue: 1,
}

<cRadioGroup :options="config4.options" v-model="config4.activeValue"></cRadioGroup>`
      },
      config5: {
        options: [
          {
            label: '选项A',
            value: 'A'
          },
          {
            label: '选项B',
            value: 'B'
          },
          {
            label: '选项C',
            value: 'C'
          },
          {
            label: '选项D',
            value: 'D'
          }
        ],
        activeValue: 'A',
        showCode: false,
        code: `config5: {
  options: [
    {
      label: '选项A',
      value: 'A'
    },
    {
      label: '选项B',
      value: 'B'
    },
    {
      label: '选项C',
      value: 'C'
    },
    {
      label: '选项D',
      value: 'D'
    }
  ],
  activeValue: 'A',
}

<cRadioGroup :options="config5.options" v-model="config5.activeValue"></cRadioGroup>

.config5 {
  .cpm-cRadio {
    display: inline-flex;
    margin-right: 10px;
  }
}`
      },
      config6: {
        options: [
          {
            label: '选项A',
            value: 'A',
            disabled: false,
            hidden: false,
            radioColor: ['#f00', '#ccc']
          },
          {
            label: '选项B',
            value: 'B',
            disabled: false,
            hidden: false,
            radioColor: ['#f00', '#ccc']
          },
          {
            label: '选项C',
            value: 'C',
            disabled: false,
            hidden: false,
            radioColor: ['#f00', '#ccc']
          },
          {
            label: '选项D',
            value: 'D',
            disabled: true,
            hidden: false,
            radioColor: ['#f00', '#ccc']
          },
          {
            label: '选项E',
            value: 'E',
            disabled: false,
            hidden: true,
            radioColor: ['#f00', '#ccc']
          }
        ],
        activeValue: 'A',
        showCode: false,
        code: `config6: {
  options: [
    {
      label: '选项A',
      value: 'A',
      disabled: false,
      hidden: false,
      radioColor: ['#f00', '#ccc']
    },
    {
      label: '选项B',
      value: 'B',
      disabled: false,
      hidden: false,
      radioColor: ['#f00', '#ccc']
    },
    {
      label: '选项C',
      value: 'C',
      disabled: false,
      hidden: false,
      radioColor: ['#f00', '#ccc']
    },
    {
      label: '选项D',
      value: 'D',
      disabled: true,
      hidden: false,
      radioColor: ['#f00', '#ccc']
    },
    {
      label: '选项E',
      value: 'E',
      disabled: false,
      hidden: true,
      radioColor: ['#f00', '#ccc']
    }
  ],
  activeValue: 'A',
}

<cRadioGroup :options="config6.options" v-model="config6.activeValue"></cRadioGroup>

.config6 {
  .cpm-cRadio {
    padding: 6px 0;
    .iconfont {
      font-size: 1.4rem !important;
    }
    .label {
      flex: 1;
      text-align: right;
      font-size: 0.9rem;
    }
  }
}`
      }
    }
  },
  methods: {
    showCode (config) {
      if (config.showCode) {
        config.showCode = false
        return
      }
      ['config1', 'config2', 'config3', 'config4', 'config5', 'config6'].forEach((item) => {
        this[item].showCode = false
      })
      config.showCode = true
    },
    onChange1 (option) {
      this.$toast(`您选中了${option.value}`)
    },
    getData () {
      let formObj = {
        'sex1': this.config1.activeValue,
        'sex2': this.config2.activeValue,
        'grade1': this.config3.activeValue,
        'grade2': this.config4.activeValue,
        'answer1': this.config5.activeValue,
        'answer2': this.config6.activeValue
      }
      // 以下为demo所需
      const message = `您要提交的数据为：<br>${JSON.stringify(formObj)}`
      this.$dialog({
        propsData: {
          animateName: 'zoom-in',
          message,
          showCancelBtn: false,
          confrimBtnText: '我知道了'
        },
        methods: {
          onConfirm () {
            this.remove()
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.radiogroup-wrap {
  .config5 {
    .cpm-cRadio {
      display: inline-flex;
      margin-right: 10px;
    }
  }
  .config6 {
    .cpm-cRadio {
      padding: 6px 0;
      .iconfont {
        font-size: 1.4rem !important;
      }
      .label {
        flex: 1;
        text-align: right;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
