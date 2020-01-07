// 全局基础类
import Toast from './packages/toast/index'
import Loading from './packages/loading/index'
import Dialog from './packages/dialog/index'
import ActionSheet from './packages/actionSheet/index'
import Picker from './packages/picker/index'
import DatePicker from './packages/datePicker/index'

// 页面组件类（以c开头）
import cIcon from './packages/cIcon/index'
import cButton from './packages/cButton/index'
import cRange from './packages/cRange/index'
import cRate from './packages/cRate/index'
import cProgress from './packages/cProgress/index'
import cSearch from './packages/cSearch/index'
import cCountDown from './packages/cCountDown/index'

// 表单类（以c开头）
import cRadio from './packages/cRadio/index'
import cRadioGroup from './packages/cRadioGroup/index'
import cCheckbox from './packages/cCheckbox/index'
import cCheckboxGroup from './packages/cCheckboxGroup/index'
import cRangeDouble from './packages/cRangeDouble/index'
import cIndexList from './packages/cIndexList/index'
import cSwitch from './packages/cSwitch/index'
import cInput from './packages/cInput/index'

// 布局类（以c开头）
import cSticky from './packages/cSticky/index'
import cFixed from './packages/cFixed/index'
import cTitleBar from './packages/cTitleBar/index'

// css类
// 1px解决方案，直接导入class即可

export {
  // 反馈组件
  Toast,
  Loading,
  Dialog,
  ActionSheet,
  DatePicker,
  Picker,
  // 基础组件
  cIcon,
  cButton,
  cIndexList,
  cRate,
  cProgress,
  cSearch,
  cCountDown,
  // 表单组件
  cRadio,
  cRadioGroup,
  cCheckbox,
  cCheckboxGroup,
  cRange,
  cRangeDouble,
  cSwitch,
  cInput,
  // 布局组件
  cSticky,
  cFixed,
  cTitleBar
}

/**
 * 提示：
 * 1. 全局组件包括：toast、loading、dialog、actionsheet，页面内组件使用c开头
 * 2. 组件内所有的默认激活色为：background-color: #4574ff、color: #4574ff
 * 3. 组件内部分灰色为：color: #C8C7CC
 * 4. 所有的渐变激活色为：background-image: linear-gradient(90deg, #508BEF 0%, #4B5FFE 100%);
 */
