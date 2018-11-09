// pages/home/home.js
import ajax from "../../utils/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1356361335,162240177&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541485536967&di=fabba48d2dac38dbee537118eb656acc&imgtype=0&src=http%3A%2F%2Fnewsimg.5054399.com%2Fuploads%2Fuserup%2F1709%2F1014210U006.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541485603946&di=a73f68c749adc670fef530a21e1951a4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201405%2F26%2F20140526221020_xzau5.gif"            
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    suibian:[],
 
  },



  toDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax.get('http://rap2api.taobao.org/app/mock/115807/example/154097231093')
    .then(resp => {
      this.setData({
        suibian: resp.data.data
      });
    });

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