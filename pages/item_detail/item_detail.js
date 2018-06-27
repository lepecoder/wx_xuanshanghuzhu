// pages/item_detail/item_detail.js
const app = getApp()
Page({

    data: {
        // height: 20,
        // focus: false,
        // ceshi: '',
        // list: [{}],
        // releaseFocus: false,

        // userInfo: {},
        // hasUserInfo: false,
        // canIUse: wx.canIUse('button.open-type.getUserInfo'),
        // detail: [],
        post_info:{},   //文章信息    
        comments:[]      //评论
    },
    bindTextAreaBlur: function (e) {
        // this.setData({
        //     ceshi: e.detail.value
        // })
    },

    /**
     * 页面的初始数据
     */

    add_after: function (e) {

        // //要增加的数组
        // var newarray = [{
        //     name: this.data.ceshi,
        // }];


        // this.setData({
        //     list: this.data.list.concat(newarray)
        // });


    },
    remove: function (e) {

        // var index = e.target.dataset.index
        // var id = e.currentTarget.dataset.id //获取下标
        // //通过`index`识别要删除第几条数据，第二个数据为要删除的项目数量，通常为1
        // this.data.list.splice(index, 1);
        // //渲染数据
        // this.setData({
        //     list: this.data.list

        // });
        // console.log("1111" + e.target.dataset);
        // console.log('44444:' + index);


    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;//在success回调函数中this已经改变为当前对象，所以要拷贝一份到that里
        wx.request({
            url: 'https://api.admination.cn/restful/index.php/posts/'+options["post_id"],
            success: function (res) {
                that.setData({
                    post_info:res.data[0],
                    comments:res.data[0]["comments"]
                })

            },
            fail: function () {
                console.log('detail request fail')
            }
        })
    },
    /**
    * 点击回复
    */
    bindReply: function (e) {
        this.setData({
            releaseFocus: true
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