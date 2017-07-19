Page({
  data: {
    content: '微信小程序数据绑定内容',
    hidecontent: '隐藏的内容',
    flag: false,
    num1: 1,
    num2: 2,
    condition: true,
    length: 6,
    user: {
      name: "spark",
      age: 18
    },

    user2: [{
      name: "name1",
      age: 18
    }, {
      name: "name2",
      age: 19
    }
    ],

    chenfa: [1, 2, 3, 4, 5],

    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  tapName: function (event) {
    console.log(event)
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})