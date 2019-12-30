Page({
  data: {
    address: '点击选择，要勾选哦~'
  },

  onLoad() {
    this.staticData = {
      type: 'buy'
    }
  },

  handleAddressTap() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({
          address: res.address
        })

        this.staticData.longitude = res.longitude
        this.staticData.latitude = res.latitude
      }
    })
  },

  radioChange(e) {
    this.staticData.type = e.detail.value
  },

  bindMessageInput(e) {
    this.staticData.message = e.detail.value
  },

  bindContactInput(e) {
    this.staticData.contact = e.detail.value
  },

  handleSubmitTap() {
    const data = {
      ...this.staticData,
      address: this.data.address
    }

    // https://ik9hkddr.qcloud.la/index.php/trade/add_item

    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/add_item', 
      data,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        if (res.data.ret) {
          wx.navigateBack({})
        }
      }
    })
  }
})