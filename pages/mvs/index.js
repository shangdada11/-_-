// pages/ranksSquare/index.js
const app = getApp()
const myhost = app.globalData.myhost
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MVs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // mv
      url: myhost + '/mv/all',
      data: {
        limit: 31,
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data);
        this.setData({
          MVs: res.data.data
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