// movieGrood.js
var API_URL = 'https://api.douban.com/v2/movie/top250';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesList: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
    var pages = this;
    wx.showToast({
      // title: "加载中...",
      icon: "loading",
      duration: 10000
    })
  },
  processSubject(subject) {
    var title = subject.title;
    // 导演
    var directors = subject.directors;
    var directorStr = "";
    for (var index in directors) {
      directorStr = directorStr + directors[index].name + " / ";
    }
    if (directorStr != "") {
      directorStr = directorStr.substring(0, directorStr.length - 2);
    }
    // 类型
    var casts = subject.casts;
    var castsStr = "";
    for (var index in casts) {
      castsStr = castsStr + casts[index].name + " / ";
    }
    if (castsStr != "") {
      castsStr = castsStr.substring(0, castsStr.length - 2);
    }
    // 上映年份
    var genres = subject.genres;
    var genresStr = "";
    for (var index in genres) {
      genresStr = genresStr + genres[index] + " / ";
    }
    if (genresStr != "") {
      genresStr = genresStr.substring(0, genresStr.length - 2);
    }
    var year = subject.year;
    var text = "名称：" + title + "\n导演：" + directorStr + "\n主演：" + castsStr + "\n类型：" + genresStr + "\n 上映年份：" + year + "(中国大陆)";
    subject.text = text;
  },
  processSubjects(subjects) {
    for (var i = 0; i < subjects.length; i++) {
      var subject = subjects[i];
      this.processSubject(subject)
    }
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
        pages.processSubjects(subjects);
        pages.setData({ moviesList: subjects });
      }
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