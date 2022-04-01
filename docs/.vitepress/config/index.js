import sidebar from './sidebar'
import head from './head'
import nav from './nav'
import markdown from './markdown'
import lang from './lang'
const config = {
	title: '前端最高峰⛰️',
	description: '学习开发日常记录',
	head,
	markdown,
	themeConfig: {
		search: true, //展示搜索
		algolia: {
			appKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: ['tags:guide,api'],
			},
		},
		sidebar,
		nav,
		demoblock: lang,
		logo: '/headlogo.jpeg', // 网站nav栏logo
		lastUpdated: 'Last Updated',
		author: 'licorace', //  作者
		authorAvatar: '', //  作者头像
		record: '',
	},
}

export default config
