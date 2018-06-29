// pages/re_authorize/re_authorize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindGetUserInfo: function (e) {
    if (e.detail.errMsg == "getUserInfo:ok") {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              var info = res.userInfo
              wx.setStorage({
                key: "username",
                data: res.userInfo.nickName
              })
              wx.setStorage({
                key: "avatar",
                data: res.userInfo.avatarUrl
              })
              wx: wx.switchTab({
                url: '/pages/index/index',
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { },
              })
              wx.request({

                url: 'https://api.admination.cn/restful/index.php/user/' + getApp().globalData.openid,
                method: "POST",
                data: {
                  nick: info.nickName,
                  sex: "保密",
                  phone: "",
                  province: "",
                  city: "",
                  district: "",
                  signature: "",
                  profile_pic: info.avatarUrl

                },
                header: {
                  'content-type': 'application/json' // 默认值
                },

                success: function (res) {
                  // console.log(res.data)
                  // 登录成功
                  if (res.statusCode === 200) {



                    console.log(res.data)


                  }
                  else console.log(res.statusCode)
                },
                fail: function () {
                  console.log("err")
                }
              })
            },
            fail: function () {
              


            }
          })
        }
      }
    })
    }
    else
      wx.showToast({
        title: "请进行授权",
        icon: 'succes',
        duration: 2000,
        mask: true,

      })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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