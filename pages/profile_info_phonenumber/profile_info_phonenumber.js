// pages/profile_info_phonenumber/profile_info_phonenumber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputValue: '',
      phonenumber: ''
  
  },

  setPhonenumber: function (e) {
      var pn = e.detail.value;
      var count=pn.length
      if(count==11&&parseInt(pn).toString.length){
      getApp().globalData.phonenumber = pn
      wx.navigateBack({
        delta: 1
      })}
      else{
        wx.showToast({
          title: '请输入11位号码',
          icon: 'succes',
          duration: 2000,
          mask: true,

        })
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this
    wx.getStorage({
      key: 'phonenumber',
      success: function (res) {
        that.setData({ phonenumber: res.data });
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