<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .page-wrap {
    padding-bottom: 30px;
    h2 {
      padding: 30px 0;
      font-size: 32px;
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
        }
        a::before {
          content: "";
          position: absolute;
          right: 15px;
          top: 50%;
          transform-origin: right center;
          transform: rotate(45deg);
          width: 10px;
          height: 1px;
          overflow: hidden;
          background-color: #999;
          display: block;
        }
        a::after {
          content: "";
          position: absolute;
          right: 15px;
          top: 50%;
          transform-origin: right center;
          transform: rotate(-45deg);
          width: 10px;
          height: 1px;
          overflow: hidden;
          background-color: #999;
          display: block;
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
}
</style>
