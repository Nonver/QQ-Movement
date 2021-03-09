//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    set:'border-bottom: 1px solid #5FB878;color: #009688;!important',
    setr:'',
    is:1,
    val:'',
    valr:'',
    sum:'',
    arr:[],
    // 小米
    name:'',
    password:'',
    bushu:'',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 查询页
  query(e){
    this.setData({
      set:'border-bottom: 1px solid #5FB878;color: #009688;!important',
      setr:'',
      is:1
    })
  },
  // 说明页
  instructions(e){
    this.setData({
      set:'',
      setr:'border-bottom: 1px solid red;!important',
      is:2
    })
  },
  // 步数提交
  Ther(e){
    var than = this;
    wx.request({
      url: 'https://apio.ink/xiaomi/php/api.php', //仅为示例，并非真实的接口地址
      data: {
        phone:this.data.name,
        password:this.data.password,
        bushu:this.data.bushu
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data.code == 1){
          wx.showToast({
            title: "提交成功",
            duration:2000
          });
        }else if(res.data.code == 104){
          wx.showToast({
            title: "账号密码错误",
            icon: 'error',
            duration:2000
          });
        }else if(res.data.code == 101){
          wx.showToast({
            title: "请输入账号密码",
            icon: 'error',
            duration:2000
          });
        }else if(res.data.code == 102){
          wx.showToast({
            title: "请输入正确内容",
            icon: 'error',
            duration:2000
          });
        }
      }
    })
  },
  // 请求查询
  The(e){
    var than = this;
    wx.request({
      url: 'https://apio.ink/mfcz/php/tz.php', //仅为示例，并非真实的接口地址
      data: {
        uin:this.data.val,
        uid:this.data.valr
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data.result == 100){
          wx.showToast({
            title: "授权码不存在",
            duration:2000
          });
          return false;
        };
        if(res.data.dwz.length == 0){
          wx.showToast({
            title: "暂无数据",
            duration:2000
          });
        }else if(res.data.dwz.length>0){
          wx.showToast({
            title: "查询成功",
            duration:2000
          });
          than.setData({
            arr:res.data.dwz
          })
        }
       
        
      }
    })
  },
  // 实现数据的双向绑定
  messageChang(e){
    this.setData({
      valr:e.detail.value
    })
  },
  valChang(e){
    this.setData({
      val:e.detail.value
    })
  },
  // 小米
  name(e){
    this.setData({
      name:e.detail.value
    })
  },
  password(e){
    this.setData({
      password:e.detail.value
    })
  },
  bushu(e){
    this.setData({
      bushu:e.detail.value
    })
  }
})
