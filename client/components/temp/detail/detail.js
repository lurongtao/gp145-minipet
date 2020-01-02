Page({
  data: {
    message: {}
  },

  onLoad(options) {
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_item',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: options.id
      },
      success: (result) => {
        this.setData({
          message: result.data.data
        })
      }
    })
  },

  handleBackTap() {
    wx.navigateBack({})
  }
})