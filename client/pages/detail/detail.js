const app = getApp()
Component({
  data: {
    message: {}
  },

  lifetimes: {
    ready() {
      wx.request({
        url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_item',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          id: app.id
        },
        success: (result) => {
          this.setData({
            message: result.data.data
          })
        }
      })
    },
  },

  methods: {
    handleBackTap() {
      wx.navigateBack({})
    }
  }

})