// detail.js
var subjectUtils = require("../../utils/movieUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{},
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  loadMovie: function () {
    var pages = this;
    var movieId = wx.setStorageSync('movieId');
    console.log(movieId);
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/'+movieId,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        var subject = res.data;
        console.log(subject)
        subjectUtils.processSubject(subject);
        pages.setData({ movie: subject });
      }
    })
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