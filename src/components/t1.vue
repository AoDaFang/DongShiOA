<template>
	<div class="hello">

		<!-- 核心:  :model=ruleForm2  -->
		<div class="login-box">
			<h3 class="title">东时OA系统</h3>
			<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="pass">
					<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="验证码" prop="age">
					<el-input v-model.number="ruleForm2.age"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
					<el-button @click="resetForm('ruleForm2')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>



	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				ruleForm2: {
					pass: '',
					checkPass: '',
					age: ''
				},
			}
		},
		methods: {

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login-box {
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 20px;
		margin: 100px auto;
		width: 400px;
	}

	.title {
		text-align: center;
	}
</style>
