const behavior = require('./test-behaviors.js')
Component({
  data: {
    message: {
      x: 0,
      z: 9
    },
    title: 'hello',
    _head: 'h1'
  },

  behaviors: [
    behavior
  ],
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true,
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
    // styleIsolation: 'shared'
  },

  externalClasses: [
    'my-class'
  ],

  lifetimes: {
    created() {
      console.log('created.')
    },

    attached() {
      // console.log('attached.')
      // console.log(this.data.message)
      // let view = this.selectComponent('#child-component')
      // console.log(view)

      setTimeout(() => {
        console.log(0)
        this.setData({
          'message.x': 100,
          'message.y': 200,
          title: 'world',
          _head: 'h2'
        })
      }, 2000)

      console.log(this.data._head)
    },

    detached() {
      console.log('detached.')
    }
  },

  pageLifetimes: {
    show() {
      console.log('show')
    },
    hide() {
      console.log('hide')
    }
  },

  properties: {
    title: String
  },

  observers: {
    'message.x, message.y': function (value, value2) {
      console.log(value, value2)
    }
  }
})
