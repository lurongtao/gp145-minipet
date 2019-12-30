Page({
  data: {
    longitude: 0,
    latitude: 0
  },


  onLoad() {
    this.map = wx.createMapContext('map')
  },

  onReady() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },

  handleCoverTap() {
    this.map.moveToLocation()
  },

  handlePubTap() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  }
})