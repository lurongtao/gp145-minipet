// client/pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    no: 'one'
  },

  observers: {
    'no': function(no) {
      console.log(no)
    }
  },

  onReady() {
    setTimeout(() => {
      console.log(0)
      this.setData({
        no: 'two'
      })
    }, 2000)

  }
})