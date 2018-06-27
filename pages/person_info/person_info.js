// pages/person_info/person_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    //sex: '男',
    //region: ['上海市', '上海市', '黄浦区'],
    avatar: '/image/avatar.png',


      region: ['上海市', '上海市', '黄浦区'],
      customItem: '',
      sexs:['保密','男','女'],
      sex:'保密',
      imgUrl: '',    //如果imgurl不为空，则显示我们上传的图片，如果为空，就使用用户自己的头像
      username:'',
      phonenumber:'123',
      signature:''
  },
  
  bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          region: e.detail.value
      })
     

  },

  bindSexChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
          sex: this.data.sexs[e.detail.value]
      })
     
  },
  sendmess:function(e){
    console.log("jinru")
    var that = this
    var sex_int = that.data.sex
    if (sex_int == "保密")
      sex_int = -1
    else if (sex_int == "男")
      sex_int = 0
    else
      sex_int = 1
    console.log(that.data.phonenumber)
    wx.request({

      url: 'https://api.admination.cn/restful/index.php/user/' + getApp().globalData.openid,
      method: "POST",
      data: {
        nick: that.data.username,
        sex: sex_int,
        phone: that.data.phonenumber,
        province: that.data.region[0],
        city: that.data.region[1],
        district: that.data.region[2],
        signature: that.data.signature,
        profile_pic: that.data.imgUrl

      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
       // console.log(res.data)
        // 登录成功
        if (res.statusCode === 200) {
          wx.setStorage({
            key: "signature",
            data: getApp().globalData.signature
          })
          wx.setStorage({
            key: "phonenumber",
            data: getApp().globalData.phonenumber
          })
          //console.log(that.data.sex)
          wx.setStorage({
            key: "region",
            data: that.data.region
          }) 
          wx.setStorage({
            key: "sex",
            data: that.data.sex
          }) 
          wx.navigateBack({
            delta: 1
          })

          console.log(res.data)


        }
        else console.log(res.statusCode)
      },
      fail:function(){
        console.log("err")
      }
    })
  },



  /*selectImage: function (e) {
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
      
  },*/

/*setUsername:function(e){
    console.log(e);
    wx: wx.navigateTo({
        url: '/pages/profile_info_username/profile_info_username?',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
    })
},*/

setPhonenumber:function(e){
   // console.log(e);
    wx: wx.navigateTo({
        url: '/pages/profile_info_phonenumber/profile_info_phonenumber?',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
    })
},

setSignature: function (e) {
    //console.log(e);
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
    var that=this
    wx.getStorage({
      key: 'username',
      success: function (res) {
        that.setData({ username: res.data });
      }

    })
    wx.getStorage({
      key: 'avatar',
      success: function (res) {
        that.setData({ imgUrl: res.data });
      }
    })   
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        that.setData({ sex: res.data });
      }

    })
    wx.getStorage({
      key: 'region',
      success: function (res) {
        that.setData({ region: res.data });
      }
    }) 

    wx.getStorage({
      key: 'phonenumber',
      success: function (res) {
        that.setData({ phonenumber: res.data });
      }
    
    })

    wx.getStorage({
      key: 'signature',
      success: function (res) {
        that.setData({ signature: res.data });
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
    var that = this
    wx.getStorage({
      key: 'username',
      success: function (res) {
        that.setData({ username: res.data });
      }

    })
    wx.getStorage({
      key: 'avatar',
      success: function (res) {
        that.setData({ imgUrl: res.data });
      }
    })
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        that.setData({ sex: res.data });
      }

    })
    wx.getStorage({
      key: 'regin',
      success: function (res) {
        that.setData({ regin: res.data });
      }
    })
    
        that.setData({ phonenumber: getApp().globalData.phonenumber });
     
   
        that.setData({ sex: getApp().globalData.sex});
      
    
    
    
    
   
      

    
    
  
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