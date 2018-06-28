// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      imgUrl:''
  
  },

  to_info: function(e){ 
        console.log(e);
        wx:wx.navigateTo({
            url: '/pages/person_info/person_info',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
        })
  },

  to_publish:function(e){
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyPublish/profile_MyPublish',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

  to_message:function(e){
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyMessage/profile_MyMessage',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

  to_order: function (e) {
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyOrder/profile_MyOrder',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

  to_collect: function (e) {
      console.log(e);
      wx: wx.navigateTo({
          url: '/pages/profile_MyCollect/profile_MyCollect',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
      })

  },

phone_call:function(e){
    wx.makePhoneCall({
        phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试  
        success: function () {
            console.log("拨打电话成功！")
        },
        fail: function () {
            console.log("拨打电话失败！")
        }
    })  
},
  bindGetUserInfo: function (e) {
    wx.getStorage({
      key: 'avatar',
      success: function (res) {
        if(res.data==""){
          wx.getSetting({
            success: function (res) {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                  success: function (res) {
                    wx.setStorage({
                      key: "username",
                      data: res.userInfo.nickName
                    })
                    wx.setStorage({
                      key: "avatar",
                      data: res.userInfo.avatarUrl
                    })
                    wx: wx.navigateTo({
                      url: '/pages/person_info/person_info',
                      success: function (res) { },
                      fail: function (res) { },
                      complete: function (res) { },
                    })
                  },
                  fail: function () {
                    
                      wx.showToast({
                        title: '获取失败',
                        icon: 'succes',
                        duration: 2000,
                        mask: true,

                      })
                  }
                })
              }
            },
            fail:function(){
              wx.showToast({
                title: '未授权',
                icon: 'succes',
                duration: 2000,
                mask: true,

              })

            }

          })
          
        }
        else {
          wx: wx.navigateTo({
            url: '/pages/person_info/person_info',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })

        }
      },
      fail:function(){
        wx.showToast({
          title: '未找到',
          icon: 'succes',
          duration: 2000,
          mask: true,

        })

      }
    })   
    
    

   
   // console.log(e.detail.userInfo)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        that.setData({ imgUrl: res.data});
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