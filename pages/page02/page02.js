// pages/page02/page02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clock_button_flag:true,
    point:2000,
    count:'0',
    coins:5,
  },
  onBindTap:function(){
    var D=(new Date()).getDate().toString();
    if(D != wx.getStorageSync('D')){
      wx.setStorageSync('D', D);
      wx.setStorage({
        key: 'FirstTime',
        data: (parseInt(this.data.count) + 1).toString(),
      })
      var that = this;
      var count = wx.getStorage({
        key: 'FirstTime',
        success: function (res) {     
          that.setData({
            count: res.data,
            clock_button_flag:false,
          })
          var count_int = parseInt(that.data.count)
          var temp = that.data.point
          temp += count_int * that.data.coins
          that.setData({
            point:temp
          })
          wx.showToast({
            title: '签到成功！',
            icon: 'success',
            duration: 1200,
            mask: true
          })
        },
      })
    }else{
      wx.showToast({
        title: '今日打卡已完成！',
        icon:'loading',
        duration:1200,
        mask:true
      })
    }

  },
  onShow:function(options){
    var that = this;
    varcount = wx.getStorage({
      key: 'FirstTime',
      success: function (res) {
        that.setData({
         count: res.data
        })
      },
    })
    var D = (new Date()).getDate().toString();
    if (D != wx.getStorageSync('D')){
      this.setData({
        clock_button_flag:true
      })
    }else{
      this.setData({
        clock_button_flag:false
      })
    }
  },
  goToTalkPage:function(param){
    wx.navigateTo({
      url: '../../pages/score/score01'  
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

  },
  increase_count(){
    var temp_count=this.data.count
      if(temp_count<7)
      temp_count++;
      else
      temp_count=0;
    this.setData({count:temp_count})
    console.log(temp_count)
    
  }
})