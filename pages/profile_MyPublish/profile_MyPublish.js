// pages/profile_MyPublish/profile_MyPublish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mypublish:[]
  },

  to_detail: function (e) {
    console.log(e);
    wx: wx.navigateTo({
      url: '/pages/item_detail/item_detail?post_id=' + e["currentTarget"]["id"],
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 删除我的发布
   */
  mypublishDelete:function(e){
    var that = this
    console.log('start-------')
    wx.request({
      url: 'https://api.admination.cn/restful/index.php/publish/' + getApp().globalData.openid + '/' + e["currentTarget"]["id"],
      method:'DELETE',
      data: {
      },
      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        console.log('delete MyPublish success')
        console.log(res)
        that.onLoad();
      },
      fail: function (res) {
        console.log("delete MyPublish fail");
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.admination.cn/restful/index.php/publish/'+getApp().globalData.openid,    
      data: {

      },

      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        console.log(res)
          if(res.statusCode==402)  //用户发布内容为空
            res.data=[]             
        
          var res_content = res.data;
          res_content.forEach((item) => {
            item.publish_time = item.publish_time.substring(5, 16)
          });
          that.setData({
            mypublish: res_content
          })
        
      },
      fail: function (res) {
        console.log("MyPublish request fail");
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