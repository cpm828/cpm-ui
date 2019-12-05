<template>
  <div class="page-wrap checkboxgroup-wrap">
    <div class="top">CheckboxGroup复选组</div>

    <div c_wrap="ta-l pl-20 pr-20">
      <p c_wrap="fs-14 mb-10 ta-j">
        提示：<br>
        1. 考虑是移动端组件，几乎不存在使用form表单提价的情况。组件会按照form表单的思想来构建属性，但不会使用form提交。<br>
        2. 考虑到页面设计的复杂可能性，组件本身只实现了功能，未配置相关style属性，推荐使用手写样式达到UI效果，如案例5、案例6。<br>
        3. 对于hidden属性，设计之初的目的是为了过滤掉某些不需要展示的项，hidden属性为true时隐藏组件。
      </p>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">1. 普通使用，喜欢的水果：{{config1.activeValue}}</h3>
        <cCheckboxGroup :options="config1.options" v-model="config1.activeValue" @onChange="onChange1"></cCheckboxGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config1)">code</span>
        <code-block :code="config1.code" v-if="config1.showCode"></code-block>
      </div>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">2. 默认选中，喜欢的水果：{{config2.activeValue}}</h3>
        <cCheckboxGroup :options="config2.options" v-model="config2.activeValue"></cCheckboxGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config2)">code</span>
        <code-block :code="config2.code" v-if="config2.showCode"></code-block>
      </div>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">3. 禁用disabled，喜欢的水果：{{config3.activeValue}}</h3>
        <cCheckboxGroup :options="config3.options" v-model="config3.activeValue"></cCheckboxGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config3)">code</span>
        <code-block :code="config3.code" v-if="config3.showCode"></code-block>
      </div>

      <div c_wrap="pb-10">
        <h3 c_wrap="fs-18 mb-10">4. 隐藏hidden（橘子），喜欢的水果：{{config4.activeValue}}</h3>
        <cCheckboxGroup :options="config4.options" v-model="config4.activeValue"></cCheckboxGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config4)">code</span>
        <code-block :code="config4.code" v-if="config4.showCode"></code-block>
      </div>

      <div c_wrap="pb-10" class="config5">
        <h3 c_wrap="fs-18 mb-10">5. inline-block（改写样式），喜欢的水果：{{config5.activeValue}}</h3>
        <cCheckboxGroup :options="config5.options" v-model="config5.activeValue"></cCheckboxGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config5)">code</span>
        <code-block :code="config5.code" v-if="config5.showCode"></code-block>
      </div>

      <div c_wrap="pb-10" class="config6">
        <h3 c_wrap="fs-18 mb-10">6. 全部参数（改写样式），喜欢的水果：{{config6.activeValue}}</h3>
        <cCheckboxGroup :options="config6.options" v-model="config6.activeValue"></cCheckboxGroup>
        <span class="code-btn" @click.prevent.stop="showCode(config6)">code</span>
        <code-block :code="config6.code" v-if="config6.showCode"></code-block>
      </div>

      <div c_wrap="mt-20">
        <cButton type="primary" size="small" @onClick="getData">提交全部</cButton>
      </div>
    </div>

    <div>
      <a class="aLink" c_wrap="fs-12"
        href="https://cpm828.github.io/cpm-ui-docs/form/cCheckboxGroup.html">查看文档</a>
    </div>
  </div>
</template>

<script>
import codeBlock from './components/codeBlock.vue'
export default {
  name: 'CheckboxGroup',
  components: { codeBlock },
  data () {
    return {
      config1: {
        options: [
         {
            label: '苹果',
            value: 'apple'
          },
          {
            label: '香蕉',
            value: 'banana'
          },
          {
            label: '西瓜',
            value: 'watermelon'
          }
        ],
        activeValue: [],
        showCode: false,
        code: `config1: {
  options: [
    {
      label: '苹果',
      value: 'apple'
    },
    {
      label: '香蕉',
      value: 'banana'
    },
    {
      label: '西瓜',
      value: 'watermelon'
    }
  ],
  activeValue: [],
}

<cCheckboxGroup :options="config1.options" v-model="config1.activeValue"></cCheckboxGroup>`
      },
      config2: {
        options: [
          {
            label: '苹果',
            value: 'apple'
          },
          {
            label: '香蕉',
            value: 'banana'
          },
          {
            label: '西瓜',
            value: 'watermelon'
          }
        ],
        activeValue: ['banana'],
        showCode: false,
        code: `config2: {
  options: [
    {
      label: '苹果',
      value: 'apple'
    },
    {
      label: '香蕉',
      value: 'banana'
    },
    {
      label: '西瓜',
      value: 'watermelon'
    }
  ],
  activeValue: ['banana'],
}

<cCheckboxGroup :options="config2.options" v-model="config2.activeValue"></cCheckboxGroup>`
      },
      config3: {
        options: [
          {
            label: '苹果',
            value: 'apple',
            disabled: false
          },
          {
            label: '香蕉',
            value: 'banana',
            disabled: false
          },
          {
            label: '西瓜',
            value: 'watermelon',
            disabled: false
          },
          {
            label: '橘子',
            value: 'orange',
            disabled: true
          }
        ],
        activeValue: ['banana'],
        showCode: false,
        code: `config3: {
  options: [
    {
      label: '苹果',
      value: 'apple',
      disabled: false
    },
    {
      label: '香蕉',
      value: 'banana',
      disabled: false
    },
    {
      label: '西瓜',
      value: 'watermelon',
      disabled: false
    },
    {
      label: '橘子',
      value: 'orange',
      disabled: true
    }
  ],
  activeValue: ['banana'],
}

<cCheckboxGroup :options="config3.options" v-model="config3.activeValue"></cCheckboxGroup>`
      },
      config4: {
        options: [
          {
            label: '苹果',
            value: 'apple',
            hidden: false
          },
          {
            label: '香蕉',
            value: 'banana',
            hidden: false
          },
          {
            label: '西瓜',
            value: 'watermelon',
            hidden: false
          },
          {
            label: '橘子',
            value: 'orange',
            hidden: true
          }
        ],
        activeValue: ['banana'],
        showCode: false,
        code: `config4: {
  options: [
    {
      label: '苹果',
      value: 'apple',
      hidden: false
    },
    {
      label: '香蕉',
      value: 'banana',
      hidden: false
    },
    {
      label: '西瓜',
      value: 'watermelon',
      hidden: false
    },
    {
      label: '橘子',
      value: 'orange',
      hidden: true
    }
  ],
  activeValue: ['banana'],
}

<cCheckboxGroup :options="config4.options" v-model="config4.activeValue"></cCheckboxGroup>`
      },
      config5: {
        options: [
          {
            label: '苹果',
            value: 'apple'
          },
          {
            label: '香蕉',
            value: 'banana'
          },
          {
            label: '西瓜',
            value: 'watermelon'
          },
          {
            label: '橘子',
            value: 'orange'
          }
        ],
        activeValue: ['banana'],
        showCode: false,
        code: `config5: {
  options: [
    {
      label: '苹果',
      value: 'apple'
    },
    {
      label: '香蕉',
      value: 'banana'
    },
    {
      label: '西瓜',
      value: 'watermelon'
    },
    {
      label: '橘子',
      value: 'orange'
    }
  ],
  activeValue: ['banana'],
}

<cCheckboxGroup :options="config5.options" v-model="config5.activeValue"></cCheckboxGroup>

.config5 {
  .cpm-cCheckbox {
    display: inline-flex;
    margin-right: 10px;
  }
}`
      },
      config6: {
        options: [
          {
            label: '苹果',
            value: 'apple',
            disabled: false,
            hidden: false,
            checkboxColor: ['#f00', '#ccc']
          },
          {
            label: '香蕉',
            value: 'banana',
            disabled: false,
            hidden: false,
            checkboxColor: ['#f00', '#ccc']
          },
          {
            label: '西瓜',
            value: 'watermelon',
            disabled: false,
            hidden: false,
            checkboxColor: ['#f00', '#ccc']
          },
          {
            label: '橘子',
            value: 'orange',
            disabled: true,
            hidden: false,
            checkboxColor: ['#f00', '#ccc']
          },
          {
            label: '荔枝',
            value: 'itchi',
            disabled: false,
            hidden: true,
            checkboxColor: ['#f00', '#ccc']
          }
        ],
        activeValue: ['banana', 'watermelon', 'orange'],
        showCode: false,
        code: `config6: {
  options: [
    {
      label: '苹果',
      value: 'apple',
      disabled: false,
      hidden: false,
      checkboxColor: ['#f00', '#ccc']
    },
    {
      llabel: '香蕉',
      value: 'banana',
      disabled: false,
      hidden: false,
      checkboxColor: ['#f00', '#ccc']
    },
    {
      label: '西瓜',
      value: 'watermelon',
      disabled: false,
      hidden: false,
      checkboxColor: ['#f00', '#ccc']
    },
    {
      label: '橘子',
      value: 'orange',
      disabled: true,
      hidden: false,
      checkboxColor: ['#f00', '#ccc']
    },
    {
      label: '荔枝',
      value: 'itchi',
      disabled: false,
      hidden: true,
      checkboxColor: ['#f00', '#ccc']
    }
  ],
  activeValue: ['banana', 'watermelon', 'orange'],
}

<cCheckboxGroup :options="config6.options" v-model="config6.activeValue"></cCheckboxGroup>

.config6 {
  .cpm-cCheckbox {
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
      this.$toast(`您${option._select ? '选中' : '取消'}了${option.label}`)
    },
    getData () {
      let formObj = {
        'fruit1': this.config1.activeValue,
        'fruit2': this.config2.activeValue,
        'fruit3': this.config3.activeValue,
        'fruit4': this.config4.activeValue,
        'fruit5': this.config5.activeValue,
        'fruit6': this.config6.activeValue
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
.checkboxgroup-wrap {
  .config5 {
    .cpm-cCheckbox {
      display: inline-flex;
      margin-right: 10px;
    }
  }
  .config6 {
    .cpm-cCheckbox {
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
