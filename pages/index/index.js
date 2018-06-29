//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    re:[],
    current:0,
    //发布分类
    cate: [
        { name: 'all', value: '全部', checked: 'true', color: ' #43cd80' },        
        { name: 'kuaidi', value: '快递外卖', checked: 'true', color: ' #666' },
        { name: 'jiandan', value: '简单问答', color: '#666' },
        { name: 'tike', value: '替课', color: '#666' },
        { name: 'jishu', value: '技术服务', color: '#666' },
        { name: 'ershou', value: '二手交易', color: '#666' },
    ],
    tabUrl: 'https://api.admination.cn/restful/show_post_list.php',

    onPullDownRefresh: function () {

        // 用户触发了下拉刷新操作
        console.log('--------下拉刷新-------')
        // 在标题栏中显示加载
        // wx.showNavigationBarLoading()

        // 拉取数据重新渲染界面
        // var that = this
        // wx.request({

        //   url: 'https://api.admination.cn/restful/show_post_list.php',  
        //   data: {
        //   },
        //   header: {
        //     'content-type':
        //     'application/json'
        //   },
        //   success: function (res) {
        //     that.setData({
        //       re: res.data.content
        //     })
        //   },
        //   fail: function (res) {
        //     console.log("home request fail");
        //   },
        //   complete:function(){
        //     console.log('--------下拉刷新-------')
        //     wx.hideNavigationBarLoading() //完成停止加载
        //     wx.stopPullDownRefresh()  // 停止当前页面的下拉刷新
        //   }
        // })

    },
  },
  onPullDownRefresh: function () {

      // 用户触发了下拉刷新操作
      console.log('--------下拉刷新-------')
      // 在标题栏中显示加载
      // wx.showNavigationBarLoading()

      // 拉取数据重新渲染界面
      // var that = this
      // wx.request({

      //   url: 'https://api.admination.cn/restful/show_post_list.php',  
      //   data: {
      //   },
      //   header: {
      //     'content-type':
      //     'application/json'
      //   },
      //   success: function (res) {
      //     that.setData({
      //       re: res.data.content
      //     })
      //   },
      //   fail: function (res) {
      //     console.log("home request fail");
      //   },
      //   complete:function(){
      //     console.log('--------下拉刷新-------')
      //     wx.hideNavigationBarLoading() //完成停止加载
      //     wx.stopPullDownRefresh()  // 停止当前页面的下拉刷新
      //   }
      // })

  },
  //tab切换
  tab: function (event) {
      console.log(event);
      var after_cate=[
          { name: 'all', value: '全部', checked: 'true', color: ' #666' },
          { name: 'kuaidi', value: '快递外卖', checked: 'true', color: ' #666' },
          { name: 'jiandan', value: '简单问答', color: '#666' },
          { name: 'tike', value: '替课', color: '#666' },
          { name: 'jishu', value: '技术服务', color: '#666' },
          { name: 'ershou', value: '二手交易', color: '#666' },
      ];
          after_cate[event.currentTarget.dataset.index].color ="#43cd80";
    console.log(after_cate);
    console.log(event.target.dataset.current);
    this.setData({ current: event.target.dataset.current })
    if (event.target.dataset.current=="全部")
      var url = 'https://api.admination.cn/restful/show_post_list.php'
    else 
      var url = 'https://api.admination.cn/restful/show_post_list.php?class=' + event.target.dataset.current

    var that = this
    that.setData({
      tabUrl: url,
      cate:after_cate
    })
    console.log(url)
    
    wx.request({
      url: url,    //-wait
      data: {
      },
      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        var res_content = res.data.content;
        res_content.forEach((item) => {
          item.publish_time = item.publish_time.substring(5, 16)
        });
        that.setData({
          re: res_content
        })
      },
      fail: function (res) {
        console.log("home request fail");
      }
    })
  },


  
  onReachBottom: function () {

    // 当界面的下方距离页面底部距离小于100像素时触发回调

  },


  to_detail: function (e) {
    //   console.log(e["currentTarget"]["id"]);
      wx: wx.navigateTo({
          url: '/pages/item_detail/item_detail?post_id='+e["currentTarget"]["id"],
          success: function (res) {
            //console.log(res)
           },
          fail: function (res) { },
          complete: function (res) { },
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this
    
    wx.getSetting({
   
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log("shouquan")
              wx.request({
                //url: 'https://api.admination.cn/restful/show_post_list.php',    //-wait
                url:that.data.tabUrl,
                data: {
                },
                header: {
                  'content-type':
                  'application/json'
                },
                success: function (res) {
                  var res_content = res.data.content;

                  res_content.forEach((item) => {
                    item.publish_time = item.publish_time.substring(5, 16)
                  });
                  that.setData({
                    re: res_content
                  })
                },
                fail: function (res) {
                  console.log("home request fail");
                }
              })

             
             
            },
            fail: function () {
              wx.redirectTo({
                url: '/pages/authorize/authorize'
              })
            }
          })
        }
        else
          wx.redirectTo({
            url: '/pages/authorize/authorize'
          })
     


      },
      fail:function(){
        console.log("err1")
        wx.redirectTo({
          url: '/pages/authorize/authorize'
        })
      }
    })
   
   //---
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
    var that=this
    that.onLoad()
    
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