// pages/detail/detail.js
import ajax from "../../utils/request.js";
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailImf:[],
  },

  addToCart(e){
      app.addToCart(this.data.detailImf);
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    ajax.get('http://rap2api.taobao.org/app/mock/115807/example/1541564530532')
      .then(resp => {
        this.setData({
          detailImf: resp.data.data
        });
      });
  },


  onLaunch: function () {
    this.setBadge()
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