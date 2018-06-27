//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    re:[]

    
  },

  to_detail: function (e) {
    //   console.log(e["currentTarget"]["id"]);

      wx: wx.navigateTo({
          url: '/pages/item_detail/item_detail?post_id='+e["currentTarget"]["id"],
          success: function (res) {
            //   console.log(res)
           },
          fail: function (res) { },
          complete: function (res) { },
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that=this
    wx.request({
      url: 'https://api.admination.cn/restful/show_post_list.php',    //-wait
      data: {
        sJson:'"post_if","title","publish_time"'
      },

      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        
        that.setData({
          re:res.data.content
        })  
      },
      fail: function (res) {
        console.log(".....fail.....");
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