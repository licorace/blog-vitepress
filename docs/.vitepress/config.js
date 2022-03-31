// module.exports = {
//     // 网站标题
//     title: 'Interview',
//     // 网站描述
//     description: 'Interview with vitePress',
//     // 打包目录
//     dest: './dist',
//     base:'/interview/',
//     // 头部head
//     head: [
//         // 添加图标
//         ['link', { rel: 'icon', href: '/favicon.ico' }]
//     ],
//     // 使用插件
//     plugins: [
//         '@vuepress/active-header-links',
//         '@vuepress/back-to-top',
//         '@vuepress/medium-zoom',
//         '@vuepress/nprogress',
//       [
//         '@vuepress/plugin-search',
//         {
//           locales: {
//             '/': {
//               placeholder: 'Search',
//             },
//             '/zh/': {
//               placeholder: '搜索',
//             },
//           },
//         },
//       ],
//     ],
//     // 主题配置
//     themeConfig: {
//         // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
//         lastUpdated: 'Last Updated', // string | boolean
//         // 启动页面丝滑滚动
//         smoothScroll: true,
//         // 导航栏配置
//         nav:[
//             {text: '我的个人网站', link: 'https://www.cooldream.fun/home' },
//             {text: '掘金', link: 'https://juejin.cn/user/1855631359481847/posts'},
//             {text: 'Github', link: 'https://github.com/Jack-Star-T'}
//         ],
//         sidebar:{
//             '/':getSidebar()
//         }
//     }
// }

// function getSidebar() {
//     return [
//         {
//             text:'HTML',
//             children: [
//                 { text: '基础', link: '/article/HTML/' },
//                 { text: '进阶', link: '/article/HTML/advanced' },
//             ],
//             sidebarDepth:3
//         },
//         {
//             text:'CSS',
//             children:[
//                 { text: '基础', link: '/article/CSS/' },
//                 { text: '进阶', link: '/article/CSS/advanced' },
//             ]
//         },
//         {
//           text:'Javascript',
//           children:[
//             { text: '基础', link: '/article/Javascript/' },
//             { text: '进阶', link: '/article/Javascript/advanced' },
//             { text: '进阶', link: '/article/Javascript/nightmare' },
//           ]
//         },
//         {
//           text:'Vue',
//           children:[
//             { text: '基础', link: '/article/Vue/' },
//             // { text: '进阶', link: '/article/Vue/advanced' },
//           ]
//         },
//         {
//           text:'浏览器',
//           children:[
//             { text: '基础', link: '/article/Webpack/' },
//             // { text: '进阶', link: '/article/Vue/advanced' },
//           ]
//         },
//         // {
//         //   text:'网络',
//         //   children:[
//         //     { text: '基础', link: '/article/Network/' },
//         //     { text: '进阶', link: '/article/Network/advanced' },
//         //   ]
//         // },
//         // {
//         //   text:'安全',
//         //   children:[
//         //     { text: '基础', link: '/article/Security/' },
//         //     { text: '进阶', link: '/article/Security/advanced' },
//         //   ]
//         // },
//         // {
//         //   text:'面经',
//         //   children:[
//         //     { text: '基础', link: '/article/Experience/' },
//         //     { text: '进阶', link: '/article/Experience/advanced' },
//         //   ]
//         // },
//     ]
// }


const config = require("./config/index.js");
module.exports = config.default;
