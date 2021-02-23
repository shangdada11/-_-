// pages/playingMusic/index.js
const myaudio = wx.getBackgroundAudioManager()
const app = getApp();
const host = app.globalData.host;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay: true, // 是否播放
    song_mid: '', // 歌曲mid
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
      // url: host + '/v1/qq/song',    // 备用链接
      url: 'http://localhost:8080/music/api/song_play', // （这个链接随时会挂）
      data: {
        song_mid: options.song_mid
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data);
        this.setData({
          song_mid: res.data.data.recommend_url
        })

        myaudio.src = this.data.song_mid
        myaudio.play();
      },
    });
    wx.request({
      // 获取歌曲详情（歌名、作者等）
      url: 'http://localhost:8080/music/api/song_detail',
      data: {
        song_mid: options.song_mid
      },
      method: 'GET',
      success: (res) => {
        // console.log(res.data.data.song_track)
        this.setData({
          songTitle: res.data.data.song_track.track.title,
          singer: res.data.data.song_track.track.singers[0].name,
          songImg: res.data.data.song_track.track.album_pic
        })
        myaudio.title = this.data.songTitle
        myaudio.epname = this.data.songTitle
        myaudio.singer = this.data.singer
        myaudio.coverImgUrl = this.data.songImg
      },
    });
    myaudio.onEnded(function () {
      console.log(myaudio);
      this.setData({
        isplay: false
      })
      myaudio.stop()
      setTimeout(() => {
        myaudio.play()
      }, 1000)
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