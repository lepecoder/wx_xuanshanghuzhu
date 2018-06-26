//app.js
App({
    globalData: {
        username:'User',
        phonenumber:'17854170001',
        signature:'whats up',
        sex:'男',
        region: ['上海市', '上海市', '黄浦区'],
        avatar:'/image/avatar.png'

    } ,

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.login({

      success: function (res) {

        if (res.code) {

          wx.request({

            url: 'http://127.0.0.1/wxInt/tes.php',

            data: {

              code: res.code

            },

            success: function (res) {

              // 登录成功

              if (res.statusCode === 200) {

                console.log(res.data)// 服务器回包内容


              }

            }

          })

        } else {

          console.log('获取用户登录态失败！' + res.errMsg)

        }

      }

    });



    
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
