// pages/list/list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    markers: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onMarkerTap(e){
    const{
      latitude,
      longitude
    }=this.data.markers[e.markersId];
    wx.openLocation({
      latitude: '',
      longitude: '',
      scale: '',
      name: '',
      address: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad: function (options) {
    wx.getLocation({
      success: res=> {
        console.log(res);
        const{
          latitude,
          longitude
        } = res;
        this.setData({
          markers: this.data.markers.concat({
            iconPath: "../../imgs/dw.png",
            id: 0,
            latitude,
            longitude,
            width: 50,
            height: 50
          }),
          latitude,
          longitude
        })
      },
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