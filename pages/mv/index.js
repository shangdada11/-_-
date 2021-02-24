// pages/mv/index.js
const myaudio = wx.getBackgroundAudioManager();
const app = getApp();
const myhost = app.globalData.myhost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvUrl: '', // mv地址
    mvDetails: '', // mv详情
    comments: '', // mv评论
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    myaudio.pause()
    // 播放mv
    wx.request({
      url: myhost + '/mv/url',
      data: {
        id: options.mv_id
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data)
        this.setData({
          mvUrl: res.data.data.url
        })
      },
    });
    // mv信息
    wx.request({
      url: myhost + '/mv/detail',
      data: {
        mvid: options.mv_id
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data)
        this.setData({
          mvDetails: res.data.data
        })
      },
    });
    // mv评论
    wx.request({
      url: myhost + '/comment/mv',
      data: {
        id: options.mv_id,
        limit: 30
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.comments)
        this.setData({
          comments: res.data.comments
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
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    myaudio.play()
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