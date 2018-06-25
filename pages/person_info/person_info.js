// pages/person_info/person_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      region: ['上海市', '上海市', '黄浦区'],
      customItem: '',
      sexs:['保密','男','女'],
      sex:'保密',
      imgUrl: '',    //如果imgurl不为空，则显示我们上传的图片，如果为空，就使用用户自己的头像
      username:'',
      phonenumber:'',
      signature:''
  },
  
  bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          region: e.detail.value
      })
      getApp().globalData.region = this.data.region;

  },

  bindSexChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          sex: this.data.sexs[e.detail.value]
      })
      getApp().globalData.sex = this.data.sex;
  },

  selectImage: function (e) {
      var that = this;
      wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths
              that.setData({ imgUrl: tempFilePaths })
              getApp().globalData.avatar = tempFilePaths;
          }
      })
      
  },

setUsername:function(e){
    console.log(e);
    wx: wx.navigateTo({
        url: '/pages/profile_info_username/profile_info_username?',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
    })
},

setPhonenumber:function(e){
    console.log(e);
    wx: wx.navigateTo({
        url: '/pages/profile_info_phonenumber/profile_info_phonenumber?',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
    })
},

setSignature: function (e) {
    console.log(e);
    wx: wx.navigateTo({
        url: '/pages/profile_info_signature/profile_info_signature?',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({ username: getApp().globalData.username}) ;
      this.setData({ phonenumber: getApp().globalData.phonenumber }) ;
      this.setData({ signature: getApp().globalData.signature });
      this.setData({ sex: getApp().globalData.sex });
      this.setData({ region: getApp().globalData.region });
      this.setData({ imgUrl: getApp().globalData.avatar});
      
  
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
      this.setData({ username: getApp().globalData.username }); 
      this.setData({ phonenumber: getApp().globalData.phonenumber }) ;
      this.setData({ signature: getApp().globalData.signature });
      this.setData({ sex: getApp().globalData.sex });
      this.setData({ region: getApp().globalData.region });
      this.setData({ imgUrl: getApp().globalData.avatar });
  
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