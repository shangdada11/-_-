const app = getApp();
const myhost = app.globalData.myhost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recSongSheet: [],
    recSongs: [],
    recRankSongs: [],
    newMVs: [],
    playingMusic: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图
    wx.request({
      url: myhost + '/banner',
      data: {
        type: 1
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.banners);
        this.setData({
          banner: res.data.banners
        })
      },
    });
    wx.request({
      // 推荐歌单
      url: myhost + '/personalized',
      method: 'GET',
      success: (res) => {
        // console.log(res.data.result);
        this.setData({
          recSongSheet: res.data.result
        })
      },
    });
    wx.request({
      // 推荐新曲
      url: myhost + '/personalized/newsong',
      method: 'GET',
      success: (res) => {
        // console.log(res.data.result);
        this.setData({
          recSongs: res.data.result
        })
      },
    });
    // wx.request({
    //   // 排行榜
    //   url: 'http://localhost:8080/music/api/top_list',
    //   method: 'GET',
    //   success: (res) => {
    //     this.setData({
    //       recRankSongs: res.data.data
    //     })
    //   },
    // });
  },

  getRankPic: function (val) {
    wx.setStorageSync('rankPic', val.currentTarget.dataset.pic)
  },

  playMusic: function (val) {
    // console.log(val.currentTarget.dataset.song_mid);
    this.setData({
      playingMusic: val.currentTarget.dataset.song_mid
    })
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