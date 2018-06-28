// pages/profile_MyCollect/profile_MyCollect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mycollect:[]
  },

  to_detail: function (e) {
    wx: wx.navigateTo({
      url: '/pages/item_detail/item_detail?post_id=' + e["currentTarget"]["id"],
      success: function (res) {
        //   console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  cancleCollect:function(event){
    console.log(event);
    var url = 'https://api.admination.cn/restful/index.php/collection/' + event.currentTarget.dataset.serviceid + '/' + event.target.dataset.postid 
  console.log(url)
    var that=this
    wx.request({
      url: url,
      data: {
      },
      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        console.log("cancle mycollect success")
        console.log(res)
        that.onLoad();
      },
      fail: function (res) {
        console.log("cancle mycollect fail");
      }
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.admination.cn/restful/index.php/collection/' + getApp().globalData.openid,
      data: {

      },

      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        console.log(res)
        if(res.statusCode==404)    //用户没有收藏内容
          res.data=[]
        var res_content = res.data;
        res_content.forEach((item) => {
          item.publish_time = item.publish_time.substring(5, 16)
        });
        that.setData({
          mycollect: res_content
        })
      },
      fail: function (res) {
        console.log("MyCollect request fail");
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