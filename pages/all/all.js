import ajax from "../../utils/request.js"; 
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["全部主粮", "全部零食", "全部玩具","全部用品","全部药品","限时折扣"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    allList:[],
    allLista:[],

  },

  toDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    

    ajax.get('http://rap2api.taobao.org/app/mock/115807/example/1540972310937')
      .then (resp=>{
        this.setData({
          allList: resp.data.data
        }); 
      });

    ajax.get('http://rap2api.taobao.org/app/mock/115807/example/1541562075285')
      .then(resp => {
        this.setData({
          allLista: resp.data.data
        });
      })

 

      
  },


  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});
