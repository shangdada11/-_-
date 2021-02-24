// pages/rankSheet/index.js
const app = getApp();
const myhost = app.globalData.myhost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sheet: [],
    rankPicUrl: '',
    sheetShow: 30, // 显示数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // 新曲详情
      url: myhost + '/top/song',
      data: {
        type: 0
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data);
        this.setData({
          newPicUrl: res.data.data[0].album.picUrl,
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
    this.setData({
      sheetShow: this.data.sheetShow + 10
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})