// pages/playingMusic/index.js
const myaudio = wx.getBackgroundAudioManager();
const app = getApp();
const myhost = app.globalData.myhost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay: true, // 是否播放
    song_mid: '', // 歌曲id
    songTitle: '', // 歌名
    singer: '', // 歌手
    songImg: '', // 歌曲封面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      // 播放歌曲
      url: myhost + '/song/url',
      data: {
        id: options.song_mid
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data);
        this.setData({
          song_mid: res.data.data[0].url
        })
        // console.log(this.data);
        myaudio.src = this.data.song_mid
        myaudio.play();
      },
    });
    wx.request({
      // 获取歌曲详情（歌名、作者等）
      url: myhost + '/search',
      data: {
        keywords: options.song_mid
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.result.songs[0])
        this.setData({
          songTitle: res.data.result.songs[0].name,
          singer: res.data.result.songs[0].artists[0].name,
          songImg: 'https://www.png8.com/imgs/2021/02/03d8aad0b1cde649.png'
        })
        myaudio.title = this.data.songTitle
        myaudio.epname = this.data.songTitle
        myaudio.singer = this.data.singer
        myaudio.coverImgUrl = this.data.songImg
      },
    });
    myaudio.onPause(() => {
      this.setData({
        isplay: false
      })
    })
    myaudio.onPlay(() => {
      this.setData({
        isplay: true
      })
    })
  },
  musicStop: function () {
    myaudio.pause();
    this.setData({
      isplay: false
    })
  },
  musicPlay: function () {
    myaudio.play();
    this.setData({
      isplay: true
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
  onShow: function (options) {

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