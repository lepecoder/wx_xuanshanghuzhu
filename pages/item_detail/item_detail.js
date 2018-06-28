// pages/item_detail/item_detail.js
const app = getApp()
Page({

    data: {
        height: 20,
        focus: false,
        content: '',
        list: [{}],
        releaseFocus: false,
        userInfo: {},
        hasUserInfo: false,
        post_id:'',
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        // detail: [],
        post_info: {},   //文章信息    
        comments: [] ,     //评论
          
    },
    bindTextAreaBlur: function (e) {
      this.setData({
        content: e.detail.value,
      })
           
    },
    RequestData: function (e) {
        console.log(this.data.post_info.comments);
    },
    /**
     * 页面的初始数据
     */
    add_after: function (e) {
      var that = this
      var parentid=0
     /**判断是不是本人评论 */
      if (that.data.post_info.service_id==getApp().globalData.openid)
      {
        parentid = -1
      }
      else 
      { 
        parentid = 3
        }
        /**上传 */
      wx.request({
        url: 'https://api.admination.cn/restful/index.php/comment/' +that.data.post_id,
        method: "POST",
        data: {
          service_id: getApp().globalData.openid,
          parent_service_id: that.data.post_info.service_id,
          parent_id:parentid,
          content:that.data.content
        },

        header: {
          "Content-Type": "application/json"
        },
        success: function (res) {
         // that.onLoad()
          console.log(res);
        },
        fail: function () {
          console.log('detail request fail')
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;//在success回调函数中this已经改变为当前对象，所以要拷贝一份到that里
        wx.request({
          url: 'https://api.admination.cn/restful/index.php/posts/' + options["post_id"],
            success: function (res) {
                that.setData({
                    post_id: options["post_id"],
                    post_info: res.data[0],
                    comments: res.data[0]["comments"]
                })
                console.log(res);
            },
            fail: function () {
                console.log('detail request fail')
            }
        })
    },
    /**
    * 点击回复 通过releaseFocus来判断是回复帖子还是回复人
    */
    bindReply: function (e) {
        this.setData({
            releaseFocus: true,  
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
