import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import t1 from '@/components/t1'
import t2 from '@/components/t2'
import t3 from '@/components/t3'
import t4 from '@/components/t4'

import t5 from '@/components/t5'
import t6 from '@/components/t6'
import t7 from '@/components/t7'
import t8 from '@/components/t8'

import t9 from '@/components/t9'
import t10 from '@/components/t10'
import t11 from '@/components/t11'
import t12 from '@/components/t12'

import t13 from '@/components/t13'
import t14 from '@/components/t14'
import t15 from '@/components/t15'
import t16 from '@/components/t16'

import t17 from '@/components/t17'
import t18 from '@/components/t18'

import StudentAdd from '@/components/StudentAdd'
import Login from '@/components/Login'
import Main from '@/components/Main'
import StudentList from '@/components/StudentList'
import StudentDown from '@/components/StudentDown'
import StudentExport from '@/components/StudentExport'
import StudentScore from '@/components/StudentScore'
import Welcome from '@/components/Welcome'

Vue.use(Router)
var r = new Router({
	routes: [

		//在刚打开页面的时候，这个重定向是不起作用的，因为在app.vue中已经进行了相关跳转。

		{
			path: '/',
			name: 'HelloWorld',
			redirect: '/main'
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}, {
			path: '/main',
			name: 'main',
			component: Main,
			redirect: "/main/welcome",
			children: [{
					path: '/main/student_add',
					name: 'StudentAdd',
					component: StudentAdd
				}, {
					path: '/main/student_list',
					name: 'StudentList',
					component: StudentList
				}, {
					path: '/main/welcome',
					name: 'Welcome',
					component: Welcome
				}, {
					path: '/main/student_export',
					name: 'StudentExport',
					component: StudentExport
				}, {
					path: '/main/student_score',
					name: 'StudentScore',
					component: StudentScore
				}, {
					path: '/main/student_down',
					name: 'StudentDown',
					component: StudentDown
				}



			]
		}, {
			path: '/t1',
			name: 't1',
			component: t1
		}, {
			path: '/t2',
			name: 't2',
			component: t2
		}, {
			path: '/t3',
			name: 't3',
			component: t3
		}, {
			path: '/t4',
			name: 't4',
			component: t4
		}, {
			path: '/t5',
			name: 't5',
			component: t5
		}, {
			path: '/t6',
			name: 't6',
			component: t6
		}, {
			path: '/t7',
			name: 't7',
			component: t7
		}, {
			path: '/t8',
			name: 't8',
			component: t8
		}, {
			path: '/t9',
			name: 't9',
			component: t9
		}, {
			path: '/t10',
			name: 't10',
			component: t10
		}, {
			path: '/t11',
			name: 't11',
			component: t11
		}, {
			path: '/t12',
			name: 't12',
			component: t12
		}, {
			path: '/t13',
			name: 't13',
			component: t13
		}, {
			path: '/t14',
			name: 't14',
			component: t14
		}, {
			path: '/t15',
			name: 't15',
			component: t15
		}, {
			path: '/t16',
			name: 't16',
			component: t16
		}, {
			path: '/t17',
			name: 't17',
			component: t17
		}, {
			path: '/t18',
			name: 't18',
			component: t18
		},
	]
})


//router定义的下面, 每个路由跳转之前, 执行回调函数
r.beforeEach((to, from, next) => {
	// console.log("beforeEach");
	// console.log("\tfrom.path=" + from.path);
	// console.log("\tto.path=" + to.path);

	console.log("beforeEach")

	//是否要进入login的布尔flag值
	var isShowLogin = false
	if (to.path != "/login") {
		//检测是否已经登录
		if (localStorage.islogin == undefined || localStorage.islogin != 1) {
			
			isShowLogin = true
		}
	}

	if (isShowLogin == true) { //如果需要跳入登录界面，则跳入登录界面
		r.push("/login")
	} else {//若不需要跳转登录，则继续跳转
		//继续跳转
		next();
	}

});

export default r;
