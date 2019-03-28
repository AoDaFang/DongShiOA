<template>
	<div class="hello">

		<div class="aside">

			<el-menu default-active="4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
			 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

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
						<template slot="title">分组一</template>
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
		</div>
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
	.aside {
		width: 200px;
		height: 800px;
	}
</style>
