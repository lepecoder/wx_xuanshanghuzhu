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
      ],
      imgs:[ ],
      post_id:''
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
      var that=this
     // console.log(that.data.imgs)
     // console.log("aaaaaa")
     // console.log(e.detail.value.content)
      //console.log(e.detail.value.radio)
      //console.log(getApp().globalData.openid)
   
      wx.getStorage({
        key: 'avatar',
        success: function (res) {
          if(res.data=="")
            wx.showToast({
              title: '请先授权',
              icon: 'succes',
              duration: 2000,
              mask: true,

            })
            else{
            //console.log(that.data.imgs)

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
          console.log("111")
          //console.log(that.data.imgs)
          var id=res.data
         
          for (var index in that.data.imgs){
            //console.log(that.data.imgs[0])
            wx.uploadFile({
              url: 'https://api.admination.cn/restful/uploadimg.php', //仅为示例，非真实的接口地址
              filePath: that.data.imgs[0],
              name: 'file',
              formData: {
                'post_id': id
              },
              success: function (res) {
               console.log(id)
                console.log(res.data)
                //do something
              },
              fail:function(){
console.log("err")
              }
            })
          }
         

          //console.log(res.data)
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
        }

      })
     that.setData({mess:""});
     //that.setData({ imgs: [] });

    },
    chooseImg: function (e) {
      var that = this;
      var imgs = that.data.imgs;
      //console.log(imgs.length)
      if (imgs.length >= 6) {
        this.setData({
          lenMore: 1
        });
        setTimeout(function () {
          that.setData({
            lenMore: 0
          });
        }, 2500);
        wx.showToast({
          title: '已达上线',
          icon: 'succes',
          duration: 2000,
          mask: true,

        })
        return false;
      }
      wx.chooseImage({
        // count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var imgs = that.data.imgs;
          // console.log(tempFilePaths + '----');
          for (var i = 0; i < tempFilePaths.length; i++) {
            if (imgs.length >= 6) {
              that.setData({
                imgs: imgs
              });
              return false;
            } else {
              imgs.push(tempFilePaths[i]);
            }
          }
          // console.log(imgs);
          
        }
      });
      that.setData({
        imgs: imgs
      });
      console.log(that.data.imgs)
    },

    // 删除图片
    deleteImg: function (e) {
      var imgs = this.data.imgs;
      var index = e.currentTarget.dataset.index;
      imgs.splice(index, 1);
      this.setData({
        imgs: imgs
      });
    },
    addd: function (e) {

    },

    // 预览图片
    previewImg: function (e) {
      //获取当前图片的下标
      var index = e.currentTarget.dataset.index;
      //所有图片
      var imgs = this.data.imgs;

      wx.previewImage({
        //当前显示图片
        current: imgs[index],
        //所有图片
        urls: imgs
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