<template>
	<div class="student_add_all">

		<!-- 面包屑导航 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>输入</el-breadcrumb-item>
			<el-breadcrumb-item>学员管理</el-breadcrumb-item>
			<el-breadcrumb-item>新建</el-breadcrumb-item>
		</el-breadcrumb>

		<div class="form_main">
			<div class="form_tile">学生添加</div>
			<!-- 进度条 -->
			<el-steps :active="active" finish-status="success">
				<el-step title="录入学生基本信息"></el-step>
				<el-step title="录入费用信息"></el-step>
				<el-step title="确定缴费时间"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>

			<el-form ref="form" :model="form" label-width="100px">
				<div>
					<div>
						<el-form-item label="* 姓名">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="* 手机号">
							<el-input v-model="form.phone"></el-input>
						</el-form-item>
						<el-form-item label="* 身份证">
							<el-input v-model="form.id_num"></el-input>
						</el-form-item>
						<el-form-item label="* 户籍地址">
							<el-input v-model="form.address"></el-input>
						</el-form-item>

						<el-form-item label="学历">
							<el-select v-model="form.education" placeholder="请选择学历">
								<el-option label="初中" value="shanghai"></el-option>
								<el-option label="中专" value="beijing"></el-option>
								<el-option label="高中" value="beijing"></el-option>
								<el-option label="专科" value="beijing"></el-option>
								<el-option label="本科" value="beijing"></el-option>
								<el-option label="研究生" value="beijing"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="毕业院校">
							<el-input v-model="form.graduate_school"></el-input>
						</el-form-item>

						<el-form-item label="毕业时间">
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" v-model="form.graduate_time" style="width: 100%;"></el-date-picker>
							</el-col>
						</el-form-item>

						<el-form-item label="专业">
							<el-input v-model="form.major"></el-input>
						</el-form-item>

						<el-form-item label="入学班级">
							<el-select v-model="form.enter_class" placeholder="请选择班级">
								<el-option label="1802" value="shanghai"></el-option>
								<el-option label="1804" value="beijing"></el-option>
							</el-select>
						</el-form-item>


					</div>

					<div>
						<el-form-item label="* 性别">
							<el-radio v-model="form.gender" label="1">男</el-radio>
							<el-radio v-model="form.gender" label="2">女</el-radio>
						</el-form-item>
						<el-form-item label="父亲">
							<el-input v-model="form.father" placeholder="请输入父亲姓名"></el-input>
						</el-form-item>
						<el-form-item label="* 母亲">
							<el-input v-model="form.mother" placeholder="请输入母亲姓名"></el-input>
						</el-form-item>
						<el-form-item label="父亲电话">
							<el-input v-model="form.father_phone"></el-input>
						</el-form-item>

						<el-form-item label="* 母亲电话">
							<el-input v-model="form.mother_phone"></el-input>
						</el-form-item>

						<el-form-item label="信息来源">
							<el-input v-model="form.msg_from"></el-input>
						</el-form-item>

						<el-form-item label="交通方式">
							<el-radio v-model="form.transportation" label="1">大巴</el-radio>
							<el-radio v-model="form.transportation" label="2">火车</el-radio>
							<el-radio v-model="form.transportation" label="3">私家车</el-radio>
						</el-form-item>

						<el-form-item label="推荐人">
							<el-input v-model="form.msg_person"></el-input>
						</el-form-item>

						<el-form-item label="咨询老师">
							<el-input v-model="form.msg_teacher"></el-input>
						</el-form-item>


					</div>
				</div>


				<el-form-item label="备注" class="remark">
					<el-input type="textarea" v-model="form.remark" height="100"></el-input>
				</el-form-item>
			</el-form>
			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>

		</div>


	</div>


</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				form: {
					name: "",
					phone: "",
					id_num: "",
					address: "",
					//学历
					education: "",
					graduate_school: "",
					graduate_time: "",

					//专业(专业或者职业)
					major: "",
					enter_class: "",
					//备注
					remarks: "",
					gender: "",
					father: "",
					mother: "",
					father_phone: "",
					mother_phone: "",

					//信息来源 招生老师等
					msg_from: "",

					//交通方式
					transportation: "",

					//推荐人
					msg_person: "",

					//咨询老师
					msg_teacher: ""

				},

				//步骤条数据
				active: 0,


			}
		},
		methods: {
			onSubmit() {
				console.log("submit!");
			},

			//步骤条方法
			next() {
					
				if(this.form.name == ""){
					this.$message({
						type:"error",
						message:"请填入姓名"
					});
					return
				}
				
				if(this.form.phone == ""){
					this.$message({
						type:"error",
						message:"请填入手机号"
					});
					return
				}
				
				if(this.form.id_num == ""){
					this.$message({
						type:"error",
						message:"请填入身份证号"
					});
					return
				}
				
				if(this.form.address == ""){
					this.$message({
						type:"error",
						message:"请填入家庭住址"
					});
					return
				}
				
				if(this.form.gender == ""){
					this.$message({
						type:"error",
						message:"请填入性别"
					});
					return
				}
				
				if(this.form.mother == ""){
					this.$message({
						type:"error",
						message:"请填入母亲姓名"
					});
					return
				}
				
				if(this.form.mother_phone == ""){
					this.$message({
						type:"error",
						message:"请填入母亲手机号"
					});
					return
				}
				
					
				if (this.active++ > 2) this.active = 0;
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.student_add_all{
		padding: 20px;
	}
	.form_main {
		background-color: #fff;
		margin-right: 20px;
		box-sizing: border-box;
		padding: 20px;
	}

	.el-form {
		margin-top: 6px;
	}

	.el-form>div:not(.el-form-item) {
		display: flex;
		justify-content: center;
	}

	.el-form>div>div {
		width: 40%;
	}

	.el-form-item {
		width: 100%;
		margin-bottom: 10px !important;
	}

	.remark {
		margin: 0 auto;
		width: 80%;
	}

	.remark .el-input {
		display: block;
		/* height: 100px!important; */
	}

	.el-input__inner {
		height: 100%;
	}

	.el-breadcrumb {
		height: 30px;
	}

	.form_tile {
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		height: 30px;
		box-sizing: border-box;
		padding: 0 20px;
	}

	.el-steps {
		height: auto;
		width: 75%;
		margin: 0 auto;
		margin-top: 20px;
	}

	.el-button {
		display: block;
		margin: 0 auto;
	}
</style>
