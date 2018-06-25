// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      imgUrl:''
  
  },

  to_info: function(e){ 
        console.log(e);
        wx:wx.navigateTo({
            url: '/pages/person_info/person_info',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
  },

  to_publish:function(e){
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyPublish/profile_MyPublish',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

  to_message:function(e){
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyMessage/profile_MyMessage',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

  to_order: function (e) {
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyOrder/profile_MyOrder',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

  to_collect: function (e) {
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyCollect/profile_MyCollect',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

phone_call:function(e){
    wx.makePhoneCall({
        phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试  
        success: function () {
            console.log("拨打电话成功！")
        },
        fail: function () {
            console.log("拨打电话失败！")
        }
    })  
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var name = getApp().globalData.username;
      this.setData({ username: name});
      this.setData({ imgUrl: getApp().globalData.avatar });
  
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
      var name = getApp().globalData.username;
      this.setData({ username: name });
      this.setData({ imgUrl: getApp().globalData.avatar });
  
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