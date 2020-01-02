const behavior = require('./test-child-behaviors.js')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [behavior],

  properties: {
    title: {
      type: String,
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
        console.log(newVal)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    x: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.triggerEvent('myevent', {id: 2}, {
        bubbles: true
      })
    }
  },

  export() {
    return {
      x: 0
    }
  }
})
