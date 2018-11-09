export default{
  get: (url)=>{
    wx.showLoading({
      title: '等一哈.....',
    });
    return new Promise((resolve,reject)=>{
      wx.request({
        url,
        method: 'GET',
        responseType: 'text',
        success: function(res) {
          resolve(res);
        },
        fail: function(res) {
          reject(res);
        },
        complete: function(res) {
          wx.hideLoading();
        },
      })
    })
  }
}