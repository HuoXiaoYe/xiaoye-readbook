// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"


// 导入格式化 样式的代码
import "./assets/css/app-reset.css"
// 导入 iconfont样式图标
import "./assets/iconfont/iconfont.css"

// 导入vant 相关的包
import 'vant/lib/index.css';
import {
	Button,
	Search,
	Tab,
	Tabs,
	Loading,
	PullRefresh,
	Tabbar, 
	TabbarItem
} from 'vant';

Vue.use(Button);
Vue.use(Search);

Vue.use(Loading);
Vue.use(PullRefresh);

Vue.use(Tabbar).use(TabbarItem);

// 全局vue添加axios
Vue.prototype.$axios = Axios;
// 设置默认请求路径
Axios.defaults.baseURL = "https://api.langpz.com";

Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
