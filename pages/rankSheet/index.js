// pages/rankSheet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sheet: [],
    rankPicUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      rankPicUrl: wx.getStorageSync('rankPic')
    })
    wx.request({
      // 排行榜详情
      url: 'http://localhost:8080/music/api/top_detail',
      data: {
        top_id: options.top_id
      },
      method: 'GET',
      success: (res) => {
        this.setData({
          sheet: res.data.data
        })
      },
    });
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