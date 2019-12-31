// components/test-component.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true,
    // styleIsolation: 'shared'
  },

  externalClasses: [
    'my-class'
  ],


  properties: {
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMyEvent(e) {
      console.log(e.detail.id)
    },

    handleParentMyEvent() {
      console.log('parent view')
    }
  }
})
