Page({
  data: {
    longitude: 0,
    latitude: 0,

    markers: []
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

    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_list',
      success: (result) => {
        let markers = result.data.data.map((value, index) => {
          return {
            iconPath: `/resources/${value.type}.png`,
            id: value.id,
            latitude: value.latitude,
            longitude: value.longitude,
            width: 40,
            height: 40
          }
        })
        this.setData({
          markers
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
  },

  markertap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId,
    })
  }
})