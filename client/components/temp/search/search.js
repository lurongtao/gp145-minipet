const _ = require('underscore')

Page({
  data: {
    keyword: '',
    list: []
  },

  _getData() {
    wx.request({
      url: 'https://ik9hkddr.qcloud.la/index.php/trade/get_search_list',
      data: {
        keyword: this.data.keyword
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (result) => {
        console.log(result)
        if (result.data.ret) {
          this.setData({
            list: result.data.data
          })
        }
      }
    })
  },

  _debounce: _.debounce((search, e) => {
    let keyword = e.detail.value
    search.setData({
      keyword
    })
    search._getData()
  }, 300),

  handleInput(e) {
    this._debounce(this, e)
  },

  handleSearchButtonTap() {
    this._getData()
  }
})