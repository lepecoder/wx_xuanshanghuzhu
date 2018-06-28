//app.js
App({
  globalData: {
    openid: "",
    signature:"",
    phonenumber:"",
    signature:""

  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  var that=this
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        that.globalData.openid = res.data
        //console.log(getApp().globalData.openid)
        console.log("getuccess")
        wx.getStorage({
          key: 'avatar',
          success: function(res) {
            console.log("getva")
          },
          fail:function(){
            console.log("getvafail")
            wx.setStorage({
              key: "openid",
              data: res.data
            })
            wx.setStorage({
              key: "username",
              data: "user"
            })
            wx.setStorage({
              key: "avatar",
              data: "",
              success: function (res) {
               

              },
              fail: function () {
               
              }
            })
            wx.setStorage({
              key: "phonenumber",
              data: ""
            })
            wx.setStorage({
              key: "sex",
              data: "保密"
            })
            wx.setStorage({
              key: "signature",
              data: ""
            })
            wx.setStorage({
              key: "region",
              data: ['上海市', '上海市', '黄浦区']
            })
          }
        })
       
       
        //this.setData({openid:res.data})
      },
      fail: function () {
        wx.login({
          timeout:6000,

          success: function (res) {
            console.log(res.code);
            console.log("loginss")

            if (res.code) {

              wx.request({

                url: 'https://api.admination.cn/restful/getOpenid.php',

                data: {
                  code: res.code,
                },

                success: function (res) {

                  // 登录成功
                  if (res.statusCode === 200) {
                    getApp().globalData.openid = res.data

                    console.log(res.data)// 服务器回包内容
                    wx.setStorage({
                      key: "openid",
                      data: res.data
                    })
                    wx.setStorage({
                      key: "username",
                      data: "user"
                    })
                    wx.setStorage({
                      key: "avatar",
                      data: "",
                      success:function(res){
                        wx.showToast({
                          title: "setcg",
                          icon: 'succes',
                          duration: 2000,
                          mask: true,

                        })

                      },
                      fail:function(){
                        wx.showToast({
                          title: 'set失败',
                          icon: 'succes',
                          duration: 2000,
                          mask: true,

                        })
                      }
                    })
                    wx.setStorage({
                      key: "phonenumber",
                      data: ""
                    })
                    wx.setStorage({
                      key: "sex",
                      data: "保密"
                    })
                    wx.setStorage({
                      key: "signature",
                      data: ""
                    })
                    wx.setStorage({
                      key: "region",
                      data: ['上海市', '上海市', '黄浦区']
                    })


                  }
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          },
          fail:function(){
            console.log('获取用户登录态失败！' )


          }
        });
      }
    })
    



  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
