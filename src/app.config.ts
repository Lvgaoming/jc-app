export default {
  pages: [
    'pages/index/index',
    'pages/home/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f84542',
    navigationBarTitleText: '韭菜小程序',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '收益计算',
    }, {
      pagePath: 'pages/home/index',
      text: '我的',
    }],
  },
};
