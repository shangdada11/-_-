// pages/search/index.js
const app = getApp();
const myhost = app.globalData.myhost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '1', // 搜索类型
    typeSelectHeight: 0, // 搜索模式选择高度
    result: '',
    keywords: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  searchKey: function (val) {
    if (val) {
      this.setData({
        keywords: val.detail.value
      })
    }
    wx.request({
      // 获取歌曲详情（歌名、作者等）
      url: myhost + '/search',
      data: {
        keywords: this.data.keywords,
        type: this.data.type
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.result)
        this.setData({
          result: res.data.result
        })
      },
    });
  },
  openSelect: function () {
    // 打开/关闭 搜索模式选择框
    if (this.data.typeSelectHeight != 170) {
      this.setData({
        typeSelectHeight: 170
      })
    } else {
      this.setData({
        typeSelectHeight: 0
      })
    }
  },
  changeType: function (val) {
    // 改变搜索模式
    this.setData({
      type: val.currentTarget.dataset.type,
      typeSelectHeight: 0
    })
    this.data.keywords != '' && this.searchKey()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})