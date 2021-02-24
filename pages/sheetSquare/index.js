// pages/sheetSquare/index.js
const app = getApp();
const myhost = app.globalData.myhost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tags: [],
    sheets: [],
    tag: '全部',
    scrollLeft: 0,
    scrollWidth: 50,
    sheetShow: 33,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // 歌单列表
      url: myhost + '/top/playlist/',
      data: {
        limit: 66,
        cat: '全部',
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.playlists);
        this.setData({
          sheets: res.data.playlists
        })
      },
    });
  },
  // 点击标签事件
  goTag: function (val) {
    wx.createSelectorQuery().select('.scrollBefore').boundingClientRect((rect) => {
      this.setData({
        scrollLeft: val.currentTarget.offsetLeft
      })
    }).exec()

    if (val.currentTarget.dataset.tag != this.data.tag) {
      this.setData({
        tag: val.currentTarget.dataset.tag,
        sheets: [],
        scrollWidth: 80
      })
      setTimeout(() => {
        this.setData({
          scrollWidth: 50
        })
      }, 200)
      wx.request({
        // 歌单列表
        url: myhost + '/top/playlist/',
        data: {
          cat: this.data.tag,
          limit: 51,
        },
        method: 'GET',
        success: (res) => {
          this.setData({
            sheets: res.data.playlists
          })
        },
      });
    }

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
      sheetShow: this.data.sheetShow + 9
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})