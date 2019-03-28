<template>
	<div class="hello">
		<el-container>
			<el-aside width="200px">

				<el-menu default-active="4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
				 background-color="#001529" text-color="#fff" active-text-color="#ffd04b">

					<el-menu-item index="1">
						<i class="el-icon-menu"></i>
						<span slot="title">首页</span>
					</el-menu-item>


					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>学员管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">学员查询</el-menu-item>
							<el-menu-item index="2-2">添加学员</el-menu-item>
							<el-menu-item index="2-3">导出学员</el-menu-item>
							<el-menu-item index="2-4">学分管理</el-menu-item>
							<el-menu-item index="2-5">末班管理</el-menu-item>
						</el-menu-item-group>

					</el-submenu>



					<el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span slot="title">财务管理</span>
					</el-menu-item>

					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">关于</span>
					</el-menu-item>



				</el-menu>

			</el-aside>

			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>

		</el-container>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {}
		},
		methods: {

			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
		height: 1000px;
		background-color: #001529;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	.hello {
		height: 100%;
	}

	.el-container {
		height: 100%;
	}
</style>
