// pages/sheetSquare/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tags: [],
    sheets: [],
    tag: '10000000',
    scrollLeft: 0,
    scrollWidth: 50,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // 歌单列表
      url: 'http://localhost:8080/music/api/menu_list',
      data: {
        categoryId: '10000000',
        ein: 59,
        sortId: 5,
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data);

        this.setData({
          sheets: res.data.data
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
        scrollWidth: 80
      })
      setTimeout(() => {
        this.setData({
          scrollWidth: 50
        })
      }, 200)
      wx.request({
        // 歌单列表
        url: 'http://localhost:8080/music/api/menu_list',
        data: {
          categoryId: val.currentTarget.dataset.tag,
          ein: 59,
        },
        method: 'GET',
        success: (res) => {
          this.setData({
            sheets: res.data.data
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})