// app.js
App({
  onLaunch() {
    // 初始化云服务
    if (wx.cloud) {
      wx.cloud.init({
        env: 'prod-env-12345', // 替换为有效的环境ID
        traceUser: true,
      }, (err) => {
        if (err) {
          console.error('云服务初始化失败:', err);
        } else {
          console.log('云服务初始化成功');
        }
      })
    }
    
    // 全局数据初始化
    this.globalData = {
      userInfo: null,
      isLoggedIn: false
    }
  },
  
  onShow() {
    // 应用显示时的处理
  },
  
  onHide() {
    // 应用隐藏时的处理
  },
  
  globalData: {}
})