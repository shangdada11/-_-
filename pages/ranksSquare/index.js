// pages/ranksSquare/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recRankSongs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // 排行榜
      url: 'http://localhost:8080/music/api/top_list',
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data);
        this.setData({
          recRankSongs: res.data.data
        })
      },
    });
  },
  getRankPic: function (val) {
    wx.setStorageSync('rankPic', val.currentTarget.dataset.pic)
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