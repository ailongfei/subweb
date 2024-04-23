window.config = {
  // 网站标题
  siteName: 'PMI Easy',
  // API 地址
  apiUrl: 'https://51i.cc',
  // 短域名服务地址
  shortUrl: 'https://s.ops.ci',
  // 首页菜单
  menuItem: [
    {
      title: '首页',
      link: '/',
      target: '',
    },
  ],
  // 远程配置地址,可以自行按照格式添加。
  remoteConfigOptions: [
    {
      value: 'https://raw.githubusercontent.com/ailongfei/ACL4SSR/main/PMI_Online.ini',
      text: '完整版-带城市带测速',
    },
    {
      value: 'https://raw.githubusercontent.com/ailongfei/ACL4SSR/main/PMI_LEON_Online.ini',
      text: '精简版-仅新加坡',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini',
      text: 'ACL4SSR Online',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini',
      text: 'ACL4SSR Online Full',
    },
  ],
};
