//app.js
App({
  
  cart: wx.getStorageSync("cart") || [], 

  addToCart(item){
    const isInCart = this.cart.some(cartItem=>cartItem.id === item.id);
    if (isInCart){
      this.cart=this.cart.map(aa=>{
        if(aa.id===item.id){
          aa.count++;
        }
        return aa;
      })
    }else{
      this.cart.push({
        ...item,
        count:1})
    }
    console.log(this.cart)
    wx.setStorageSync("cart", this.cart);
    
  },
  

  

  setBadge() {
    //计算总数
    this.allCount = this.cart.reduce((result, aa) => {
      result += aa.count
      return result
    }, 0)
    wx.setTabBarBadge({
      index: 2,
      text: `${this.allCount}`
    })
  },

  addAmount() {
    this.allCount++
  },

  onLaunch: function () {
    this.setBadge()
  },

  globalData: {
    userInfo: null
  }
})