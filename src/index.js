// 全局基础类
import Toast from './packages/toast'
import Loading from './packages/loading'
import Dialog from './packages/dialog'
import ActionSheet from './packages/actionSheet'

// 页面组件类（以c开头）
import cIcon from './packages/cIcon'
import cButton from './packages/cButton'
import cRange from './packages/cRange'
import cRangeDouble from './packages/cRangeDouble'
import cIndexList from './packages/cIndexList'
import cRate from './packages/cRate'

// 布局类（以c开头）
import cSticky from './packages/cSticky'
import cFixed from './packages/cFixed'
import cTitleBar from './packages/cTitleBar'

// 表单类（以c开头）
import cRadio from './packages/cRadio'
import cRadioGroup from './packages/cRadioGroup'
import cCheckbox from './packages/cCheckbox'
import cCheckboxGroup from './packages/cCheckboxGroup'
import cSwitch from './packages/cSwitch'

// css类
// 1px解决方案，直接导入class即可

export {
  Toast,
  Loading,
  Dialog,
  ActionSheet,
  cIcon,
  cButton,
  cRange,
  cRangeDouble,
  cIndexList,
  cRate,
  cSticky,
  cFixed,
  cTitleBar,
  cRadio,
  cRadioGroup,
  cCheckbox,
  cCheckboxGroup,
  cSwitch
}

/**
 * 提示：
 * 1. 全局组件包括：toast、loading、dialog、actionsheet，页面内组件使用c开头
 * 2. 组件内所有的默认激活色为：background-color: #4574ff、color: #4574ff
 * 3. 组件内部分灰色为：color: #C8C7CC
 * 4. 所有的渐变激活色为：background-image: linear-gradient(90deg, #508BEF 0%, #4B5FFE 100%);
 */
