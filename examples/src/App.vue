<template>
  <div id="app">
    <!-- 存放一张图片，便于微信浏览器抓取分享头图 -->
    <img src="https://blog.pimichen.com/images/public/favicon_300_transparent.png" alt="" style="display:none">

    <router-view />

    <div c_wrap="flex jc-c ai-c" class="global-btn global-btn-home" v-if="showHomeBtn">
      <cIcon render="font-class" type="home" color="#333" size="1.2rem" @cIconClick="onClick('home')"></cIcon>
    </div>
    <div c_wrap="flex jc-c ai-c" class="global-btn global-btn-refresh">
      <cIcon render="font-class" type="refresh" color="#333" size="1.2rem" @cIconClick="onClick('refresh')"></cIcon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      randomKexy: 0,
      showHomeBtn: false
    }
  },
  watch: {
    $route: {
      handler: function () {
        if (this.$route.name === 'Index') {
          this.showHomeBtn = false
        } else {
          this.showHomeBtn = true
        }
      },
      immediate: true
    }
  },
  methods: {
    onClick (type) {
      if (type === 'home') {
        this.$router.push({ 'path': '/' })
      } else {
        window.location.reload()
      }
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
ul {
  list-style: none;
}
a {
  font-size: r(26);
  color: #4080c8;
}
html,
body {
  background: #efeff4;
  height: 100%;
  font-family: PingFangSC, Microsoft Yahei, sans-serif;
  -webkit-overflow-scrolling: touch; /* 解决ios滑动不流畅问题 */
}

#app {
  font-family: PingFangSC, Microsoft Yahei, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;

  .page-wrap {
    padding-bottom: 60px;
    .top {
      height: 120px;
      font-size: 28px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4 {
        font-size: 18px;
        margin-top: 5px;
      }
    }
    .block {
      padding-bottom: 20px;
      .block-item {
        background: #fff;
        padding-left: 20px;
        text-align: left;
        font-size: 15px;
        color: #666;
        position: relative;
        &.active {
          color: #333;
          font-weight: bold;
        }
        a {
          display: block;
          height: 44px;
          line-height: 44px;
          border-bottom: 1px solid #eee;
          color: #666;
          position: relative;
          box-sizing: border-box;
          span.text {
            display: inline-block;
            font-size: 15px;
            height: 44px;
            line-height: 44px;
          }
          i {
            display: inline-block;
            color: #fff;
            height: 20px;
            padding: 0 5px;
            line-height: 20px;
            background-color: #999;
            border-radius: 5px;
            font-size: 12px;
            margin-left: 5px;
          }
          span.tip {
            font-size: 15px;
            position: absolute;
            right: 30px;
            height: 44px;
            line-height: 44px;
          }
        }

        a::after {
          content: "";
          height: 10px;
          width: 10px;
          border-width: 1px 1px 0 0;
          border-color: #b2b2b2;
          border-style: solid;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          position: absolute;
          top: 50%;
          margin-top: -5px;
          right: 15px;
        }

        // 代码
        pre {
          width: 100%;
          overflow-x: scroll;
          border-radius: 3px;
          padding-right: 15px;
          box-sizing: border-box;
          i {
            display: inline-block;
            color: #fff;
            height: 20px;
            line-height: 20px;
            padding: 0 5px;
            background-color: #999;
            border-radius: 5px;
            font-size: 12px;
            margin-left: 5px;
            position: absolute;
            right: 15px;
            top: 6px;
          }
        }
      }
    }
  }

  .global-btn {
    width: 40px;
    height: 40px;
    background-color: #ddd;
    border-radius: 50%;
    box-shadow: 0px 0 5px #bbb;
    &.global-btn-home {
      position: fixed;
      right: 10px;
      bottom: 60px;
    }
    &.global-btn-refresh {
      position: fixed;
      right: 10px;
      bottom: 10px;
    }
  }
  .code-btn {
    display: inline-block;
    color: #fff;
    height: 20px;
    padding: 0 5px;
    line-height: 20px;
    background-color: #999;
    border-radius: 5px;
    font-size: 12px;
  }
}
</style>
