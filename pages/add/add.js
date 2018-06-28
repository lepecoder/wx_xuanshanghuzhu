// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   mess:'',
      //发布分类
      cate: [
          { name: 'kuaidi', value: '快递外卖', checked: 'true', color: ' #43cd80'},
          { name: 'jiandan', value: '简单问答', color: '#666'},
          { name: 'tike', value: '替课', color: '#666'},
          { name: 'jishu', value: '技术服务', color: '#666'},
          { name: 'ershou', value: '二手交易', color: '#666'},
      ]
  },

    radio_tap: function(e){
        //console.log(e.detail.value);
        this.setData({
            cate: [
              { name: 'kuaidi', value: '快递外卖', checked: 'false', color: ' #666' },
              { name: 'jiandan', value: '简单问答', checked: 'false',color: '#666' },
              { name: 'tike', value: '替课', checked: 'false',color: '#666' },
              { name: 'jishu', value: '技术服务', checked: 'false',color: '#666' },
              { name: 'ershou', value: '二手交易', checked: 'false',color: '#666' },
            ]
        })

        var change = "cate["+e['target']['id']+"]";
        //console.log(change);
        this.setData({ [change + "checked"]: "true"})
        this.setData({
            [change+"color"]: "#43cd80"
        })
    },
    //发布函数
   
    formSubmit: function (e) {
     // console.log("aaaaaa")
     // console.log(e.detail.value.content)
      //console.log(e.detail.value.radio)
      //console.log(getApp().globalData.openid)
      console.log(e.detail.value.content)
      if (e.detail.value.content!=""){
        console.log("enter")

      wx.request({
        url: 'https://api.admination.cn/restful/add.php', //仅为示例，并非真实的接口地址
        data: {
          textarea:e.detail.value.content,
          radio: e.detail.value.radio,
          serviceid:  getApp().globalData.openid
        },
        method:"POST",
        header: {
          "Content-Type": "application/x-www-form-urlencoded" // 默认值
        },
        success: function (res) {
          console.log(res.data)
          wx.showToast({
            title: '发布成功',
            icon: 'succes',
            duration: 2000,
            mask: true,
             
          })
          
        },
        fail:function(){
          console.log(e.detail)
        }
        
      })
      wx: wx.switchTab({
        url: '/pages/index/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
      }
      else
        wx.showToast({
          title: '内容不能为空',
          icon: 'succes',
          duration: 1500,
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
    this.setData({ mess: "" })
  
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