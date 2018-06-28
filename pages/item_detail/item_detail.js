// pages/item_detail/item_detail.js
const app = getApp()
Page({
  data: {
    // height: 20,
    // focus: false,
    post_data: {
      content: "", //评论内容
      service_id: -1, //评论人id
      parent_service_id: -1, //被评论人id
      parent_id: -1 //被评论的评论的id
    },
    list: [{}],
    releaseFocus: false,
    post_id: -1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // detail: [],
    post_info: {}, //文章信息    

    comments: [], //要显示的帖子的评论
    placeholder: "评论", //初始评论灰色字样
    collectionStatus: 0, //0表示没收藏，1表示收藏
    commentCount: 0 //评论数
  },

  //更改收藏状态
  changeCollectionStatus: function(event) {

    var that = this;
    if (this.data.collectionStatus == 1) {
      this.data.collectionStatus = 0;
    } else {
      this.data.collectionStatus = 1;
    }
    this.setData({
      collectionStatus: this.data.collectionStatus
    });

    var url = 'https://api.admination.cn/restful/index.php/collection/' + getApp().globalData.openid + '/' + that.data.post_id;
    console.log(url)
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("change collectionStatus success")
        console.log(res)
      },
      fail: function(res) {
        console.log("change collect fail");
      }
    })
  },


  //接单函数
  acceptOrder: function(e) {

    var url = 'https://api.admination.cn/restful/index.php/order/' + getApp().globalData.openid + '/' + e.target.dataset.postid
    console.log(url)
    var that = this
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("accept order success")
        wx: wx.switchTab({
          url: '/pages/index/index',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        wx.showToast({
          title: '接单成功',
          icon: 'succes',
          duration: 1500,
          mask: true,
        })
        console.log(res)
      },
      fail: function(res) {
        console.log("acceot order fail");
      }
    })

  },


  //失去焦点触发获取评论内容
  getContent: function(e) {
    var s = "post_data.content";
    this.setData({
      [s]: e.detail.value, //更新评论内容
      releaseFocus: false, //失去焦点
    })
    console.log("获取到新发评论内容");
    console.log(this.data);
  },
  RequestData: function(e) {
    console.log(e);
  },


  //点击发送事件
  add_after: function(e) {
    var sid = "post_data.service_id";
    this.setData({
      releaseFocus: false, //失去焦点            
      [sid]: getApp().globalData.openid
    })
    console.log(e);
    var that = this;
    /**上传 */
    console.log("要上传的数据");
    console.log(that.data.post_data);
    wx.request({
      url: 'https://api.admination.cn/restful/index.php/comment/' + that.data.post_id,
      method: "POST",
      data: that.data.post_data,
      header: {
        "Content-Type": "application/json"
      },
      success: function(res) {
        console.log(res);
        //成功后重新获取数据
        wx.request({
          url: 'https://api.admination.cn/restful/index.php/posts/' + that.data.post_id,
          success: function(res) {
            var res_content = res.data[0]["publish_time"];
            console.log(res.data[0]["publish_time"]);
            res.data[0].publish_time = res_content.substring(5, 16)
            console.log(res.data[0]);
            that.setData({
              // post_id: options["post_id"],
              post_info: res.data[0],
              comments: res.data[0]["comments"]
            })
            console.log("上传后新的comments");
            console.log(that.data.comments);

          },
          fail: function() {
            console.log('detail request fail')
          }
        })
      },
      fail: function() {
        console.log('detail request fail')
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this; //在success回调函数中this已经改变为当前对象，所以要拷贝一份到that里
    this.setData({
        post_id: options["post_id"]
      }),
    //console.log(that.data.post_id);
    wx.request({
      url: 'https://api.admination.cn/restful/index.php/posts/' + that.data.post_id,
      success: function(res) {
        var res_content = res.data[0]["publish_time"];
        console.log(res.data[0].comments.length);
        res.data[0].publish_time = res_content.substring(5, 16)
        console.log(res.data[0]);
        // that.post_data.parent_service_id = res.data[0].service_id;
        var pid = "post_data.parent_service_id";
        that.setData({
          post_id: options["post_id"],
          post_info: res.data[0],
          [pid]: res.data[0].service_id,
          comments: res.data[0]["comments"],
          commentCount: res.data[0].comments.length
        })
      },
      fail: function() {
        console.log('detail request fail')
      }
    })


    //获取收藏状态collectionStatus
    var that = this
    var url = 'https://api.admination.cn/restful/index.php/collection/' + getApp().globalData.openid + '/' + that.data.post_id;
    //console.log(url)
    wx.request({
      url: url,
      data: {},
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("accept collectionStatus success")
        console.log(res.data)
        that.setData({
          collectionStatus: res.data
        })
      },
      fail: function(res) {
        console.log("accept collect fail");
      }
    })
  },


  /**
   * 点击评论事件
   */
  bindReply: function(e) {
    console.log(e);
    //parent_service_id: -1,   //被评论人id
    //  parent_id: -1   //被评论的评论的id
    var place = e.currentTarget.dataset.unick;
    var pid = "post_data.parent_id";
    var uid = "post_data.parent_service_id";
    this.setData({
      releaseFocus: true, //得到焦点
      placeholder: "reply " + place, //评论框显示被回复人
      [pid]: e.currentTarget.id, //得到被评论的评论的id
      [uid]: e.currentTarget.dataset.uid, //得到被评论的人的id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})