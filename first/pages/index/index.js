
//题库http://oqn8ahiiw.bkt.clouddn.com/test.json
//如果没有获取题库，则检查题库并下载
//参考教程//http://blog.csdn.net/qq_34589749/article/details/53165860

//index.js
//获取应用实例
//应用的逻辑文件
var app = getApp()
//注册一个页面
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    datalist: {},
    b: "",
    //zhihu:{}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },
})
