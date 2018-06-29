// pages/profile_info_signature/profile_info_signature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputValue: '',
      signature: ''
  
  },

  setSignature: function (e) {
      var sign = e.detail.value;
      if(sign.length<100){
      getApp().globalData.signature = sign
      
      wx.navigateBack({
          //-------
      })
      }
      else
      wx.showToast({
        title: '长度过大',
        icon: 'none',
        duration: 2000,
        mask: true,

     
      })
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'signature',
      success: function (res) {
        that.setData({ signature: res.data });
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