// rem.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "提示",
    ans: "答案"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取全局变量datalist的值
    var datalist = app.globalData.datalist
    //获取本页面变量的值
    var ans = this.data.ans
    console.log('ans')
    console.log(ans)
    //从网络取得datalist
    wx.request({
      url: 'http://oqn8ahiiw.bkt.clouddn.com/test.json',
      data: {},
      success: function (res) {
        console.log('打印下载下来的值')
        console.log(res.data.chuzhongshengwu[0])
        //将打印下来的值传给datalist
        app.globalData.datalist = res.data.chuzhongshengwu
        console.log("datalist值为")
        console.log(app.globalData.datalist)
      }
    })
    //修改本页面变量的值
    this.data.ans = "ans2"
    console.log('ans修改为' + this.data.ans)
    //修改全局变量的值
    app.globalData.a = 2
    console.log('全局变量值改变为：' + app.globalData.a)
    //json的用法
    //JSON.stringify
    //读取数据，进行本地存储
    

    //读取本地数据，并显示在wxml中，如已背，则修改本地数据内容为已背

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