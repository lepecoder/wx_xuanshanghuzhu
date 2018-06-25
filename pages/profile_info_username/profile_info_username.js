// pages/profile_info_username/profile_info_username.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputValue:'',
      username:''
  
  },

  setUsername:function(e){
     var name=e.detail.value;
     getApp().globalData.username=name;
    //   wx: wx.navigateTo({
    //       url: '/pages/person_info/person_info' ,
    //       success: function (res) { },
    //       fail: function (res) { },
    //       complete: function (res) { },
    //   })
    //   wx.redirectTo({
    //       url: '/pages/person_info/person_info' 
    //   })
      wx.navigateBack({
         
      })
    //   console.log(e.detail.value);


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
      this.setData({ username: getApp().globalData.username})

  
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