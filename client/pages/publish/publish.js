Page({
  data: {
    address: '点击选择，要勾选哦~',
    isSubmit: false,
    isSucc: false
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

  showToast(title) {
    wx.showToast({
      title,
      icon: 'loading',
      duration: 2000
    })
  },

  handleSubmitTap() {
    if (this.data.address === '点击选择，要勾选哦~') {
      this.showToast('请选择地址')
      return
    }

    if (!this.staticData.message) {
      this.showToast('请填写说明')
      return
    }

    if (!this.staticData.contact) {
      this.showToast('请填写联系方式')
      return
    }

    const data = {
      ...this.staticData,
      address: this.data.address
    }

    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/add_item', 
      data,
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        this.setData({
          isSubmit: true,
          isSucc: res.data.ret
        })
      }
    })
  },

  handleNoticeTap() {
    this.data.isSucc
    ? (
      wx.reLaunch({
        url: '/pages/index/index',
      })
    )
    : (
      this.setData({
        isSubmit: false
      })
    )
  }
})