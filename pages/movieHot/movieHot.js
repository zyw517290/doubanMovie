// movieHot.js
var subjectUtils = require("../../utils/movieUtils.js");
var API_URL = 'https://api.douban.com/v2/movie/in_theaters';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/001.jpg',
      '../../image/002.jpg',
      '../../image/003.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    // title:'加载中。。。',
    moviesList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loadMovie();
    var pages = this;
    wx.showToast({
      // title: "加载中...",
      icon: "loading",
      duration: 10000
    })
  },
  loadMovie: function () {
    var pages = this;
    wx.request({
      url: API_URL,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        subjectUtils.processSubjects(subjects);
        pages.setData({ moviesList: subjects });
      }
    })
  },
  detail: function (e) {
    getApp().detail(e)
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