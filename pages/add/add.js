// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        console.log(e);
        this.setData({
            cate: [
                { name: 'kuaidi', value: '快递外卖', checked: 'true', color: ' #666' },
                { name: 'jiandan', value: '简单问答', color: '#666' },
                { name: 'tike', value: '替课', color: '#666' },
                { name: 'jishu', value: '技术服务', color: '#666' },
                { name: 'ershou', value: '二手交易', color: '#666' },
            ]
        })

        var change = "cate["+e['target']['id']+"].color";
        console.log(change);
        this.setData({
            [change]: "#43cd80"
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