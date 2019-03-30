// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/store.js'

import api from '../static/interface/interface.js'

Vue.use(ElementUI);
Vue.prototype.api = api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>',
	mounted(){
		// 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
// 		window.onbeforeunload = function (e) {
// 			var storage = window.localStorage;
// 			storage.clear()
// 		}
	}
})
