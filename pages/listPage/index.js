//index.js
//获取应用实例
const app = getApp()
var utils = require('../../utils/util.js');

Page({
  data: {
    motto: '欢迎来到猫闹的世界',
    color: '#C6E2FF',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{ picUrl: "https://pic4.zhimg.com/v2-7cc2ddf60208dbc6b26b6c7f9e190ebb_r.jpg", description: "小猫贼可爱", readCount: 22, createTime: new Date},
            { picUrl: "https://pic4.zhimg.com/v2-7cc2ddf60208dbc6b26b6c7f9e190ebb_r.jpg", description: "小猫贼可爱", readCount: 22, createTime: new Date }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  viewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '分享内容',
      path: '/page/user?id=123'
    }
  }
})
