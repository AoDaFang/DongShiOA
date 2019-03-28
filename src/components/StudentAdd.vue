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

			<!-- 表格第一个部分 -->
			<div v-if="active == 0">
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
			</div>

			<!-- 表格第二个部分 -->
			<div v-if="active == 1">

				<el-form class="form2" ref="form2" :model="form2" label-width="100px">
					<div class="form2-item">
						<div class="form2-item-left">
							<el-form-item label="学制">
								<el-select v-model="form2.length_of_schooling" placeholder="请选择学历" @change="dealSelectLengthTime">
									<el-option label="6个月" value="6"></el-option>
									<el-option label="10个月" value="10"></el-option>
									<el-option label="16个月" value="16"></el-option>
									<el-option label="30个月" value="30"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="学费缴纳方式">
								<el-radio v-model="form2.pay_method" label="1">全款</el-radio>
								<el-radio v-model="form2.pay_method" label="2">贷款</el-radio>
								<el-radio v-model="form2.pay_method" label="3">分期</el-radio>
							</el-form-item>
							<el-form-item label="优惠方式">
								<el-radio v-model="form2.sale_method" label="1">无</el-radio>
								<el-radio v-model="form2.sale_method" label="2">活动</el-radio>
								<el-radio v-model="form2.sale_method" label="3">预报名</el-radio>
								<el-radio v-model="form2.sale_method" label="4">特批</el-radio>
							</el-form-item>
						</div>
						<div class="form2-item-right">
							<el-form-item label="专业">
								<el-select v-model="form2.major" placeholder="请选择专业">
									<el-option label="Python+人工智能" value="1"></el-option>
									<el-option label="JavaEE+大数据" value="2"></el-option>
									<el-option label="UI全链路" value="3"></el-option>
									<el-option label="新媒体+电商" value="4"></el-option>
									<el-option label="云计算+运维" value="5"></el-option>
									<el-option label="Python+人工智能" value="6"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="学费： ">
								<el-input placeholder="请输入内容" v-model="form2.tuition" :disabled="true"></el-input>
							</el-form-item>
							<el-form-item label="现金优惠">
								<el-input placeholder="请输入内容" v-model="form2.cash_discount"></el-input>
							</el-form-item>


						</div>
					</div>


					<div class="form2-item">
						<div class="form2-item-left">
							<el-form-item label="住宿: ">
								<el-radio-group v-model="form2.accommodation" @change="dealAccommodationChange">
									<el-radio label="1">校内</el-radio>
									<el-radio label="2">赋腾</el-radio>
									<el-radio label="3">自理</el-radio>
								</el-radio-group>
							</el-form-item>
						</div>


						<div class="form2-item-right">
							<el-form-item label="住宿押金">
								<el-input placeholder="请输入内容" v-model="form2.accommodation_deposit"></el-input>
							</el-form-item>
							<el-form-item label="宿舍租金">
								<el-input placeholder="请输入内容" v-model="form2.accommodation_money"></el-input>
							</el-form-item>
							<el-form-item label="管理费">
								<el-input placeholder="请输入内容" v-model="form2.management"></el-input>
							</el-form-item>
							<el-form-item label="网费">
								<el-input placeholder="请输入内容" v-model="form2.net_money"></el-input>
							</el-form-item>

						</div>
					</div>


					<div class="form2-item">
						<div class="form2-item-left">
							<el-form-item label="电脑: ">
								<el-radio-group v-model="form2.computer" @change="dealComputerChange">
									<el-radio label="1">购买</el-radio>
									<el-radio label="2">租用</el-radio>
									<el-radio label="3">自理</el-radio>
								</el-radio-group>
							</el-form-item>
						</div>


						<div class="form2-item-right">
							<el-form-item label="电脑购买费">
								<el-input placeholder="请输入内容" v-model="form2.computer_buy"></el-input>
							</el-form-item>
							<el-form-item label="电脑租金">
								<el-input placeholder="请输入内容" v-model="form2.computer_rent"></el-input>
							</el-form-item>
							<el-form-item label="电脑押金">
								<el-input placeholder="请输入内容" v-model="form2.computer_deposit"></el-input>
							</el-form-item>
						</div>
					</div>

					<div class="form2-item">
						<div class="form2-item-left">
							<el-form-item label="校服: ">
								<el-radio-group v-model="form2.uniform" @change="dealUniformChange">
									<el-radio label="1">购买</el-radio>
									<el-radio label="2">不购买</el-radio>
								</el-radio-group>
							</el-form-item>
							<el-form-item label="被褥: ">
								<el-radio-group v-model="form2.quilt" @change="dealQuiltChange">
									<el-radio label="1">购买</el-radio>
									<el-radio label="2">自理</el-radio>
								</el-radio-group>
							</el-form-item>
						</div>
						<div class="form2-item-right">
							<el-form-item label="校服:">
								<el-input placeholder="请输入内容" v-model="form2.uniform_money"></el-input>
							</el-form-item>
							<el-form-item label="被褥: ">
								<el-input placeholder="请输入内容" v-model="form2.quilt_money"></el-input>
							</el-form-item>
						</div>
					</div>

					<div class="form2-item form2-item-except">
						<div class="form2-item-except-in">
							<el-form-item label="应缴学费:">
								<el-input placeholder="请输入内容" v-model="form2.tuition" :disabled="true"></el-input>
							</el-form-item>
							<el-form-item label="杂费合计:">
								<el-input placeholder="请输入内容" v-model="extras" :disabled="true"></el-input>
							</el-form-item>
						</div>
						<div class="form2-item-except-in">
							<el-form-item label="学杂费合计:">
								<el-input placeholder="请输入内容" v-model="allin" :disabled="true"></el-input>
							</el-form-item>
						</div>
					</div>


				</el-form>

			</div>
			<!-- 表格第三个部分 -->
			<div v-if="active == 2" class="from3">
				<div class="form3-item-title">学费-缴费时间(总额：{{this.allin}})</div>
				<div class="form3-table">
					
				</div>
				<div class="form3-item-title">杂费-缴费时间(总额：{{this.extras}})</div>
				<div class="form3-table">
					
				</div>
			</div>
			<!-- 表格第四个部分 -->
			<div v-if="active == 3">
				表格第四个部分
			</div>


			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>

		</div>


	</div>


</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				//表格1的数据
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

				// 表格2的数据
				form2: {
					//学制
					length_of_schooling: "6",
					//学费缴费方式
					pay_method: '1',
					//优惠方式
					sale_method: '1',
					major: "1",

					//学费
					tuition: 22800,
					//现金优惠
					cash_discount: 0,

					//住宿
					accommodation: '1',
					//住宿押金
					accommodation_deposit: 600,
					//宿舍租金
					accommodation_money: 3600,
					//管理费
					management: 300,
					//网费
					net_money: 0,
					computer: '1',
					//电脑购买价格
					computer_buy: 1700,
					//电脑租用
					computer_rent: 0,
					//电脑押金
					computer_deposit: 0,
					//校服
					uniform: '1',
					//校服价格
					uniform_money: 300,
					//被褥
					quilt: '1',
					//被褥价格
					quilt_money: 200
				},

				
				//步骤条数据
				active: 2,


			}
		},
		methods: {
			onSubmit() {
				console.log("submit!");
			},

			//学习时长改变触发的方法
			dealSelectLengthTime: function(value) {
				console.log(value)

				if (value == 6) {
					//设置住宿信息
					this.form2.accommodation_money = 3600;
					this.form2.management = 300

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 720
					}
				}
				if (value == 10) {
					//设置住宿信息
					this.form2.accommodation_money = 6000;
					this.form2.management = 700

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1200
					}
				}
				if (value == 16) {
					//设置住宿信息
					this.form2.accommodation_money = 9600;
					this.form2.management = 1000

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1920
					}
				}
				if (value == 30) {
					//设置住宿信息
					this.form2.accommodation_money = 18000;
					this.form2.management = 2500

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 3600
					}
				}

			},

			//住宿方式改变
			dealAccommodationChange: function(index) {
				console.log(index)
				if (index == 3) {
					this.form2.accommodation_deposit = 0;
					this.form2.accommodation_money = 0;
					this.form2.management = 0;
					this.form2.net_money = 0;
				} else {
					this.form2.accommodation_deposit = 600;
					if (this.form2.length_of_schooling == 6) {
						this.form2.accommodation_money = 3600;
						this.form2.management = 300
					}
					if (this.form2.length_of_schooling == 10) {
						this.form2.accommodation_money = 6000;
						this.form2.management = 700
					}
					if (this.form2.length_of_schooling == 16) {
						this.form2.accommodation_money = 9600;
						this.form2.management = 1000
					}
					if (this.form2.length_of_schooling == 30) {
						this.form2.accommodation_money = 18000;
						this.form2.management = 2500
					}

				}
			},

			//电脑方式改变
			dealComputerChange: function(index) {
				if (index == 1) {
					this.form2.computer_buy = 1700
					this.form2.computer_deposit = 0;
					this.form2.computer_rent = 0
				}
				if (index == 2) {
					if (this.form2.length_of_schooling == 6) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 720
					}
					if (this.form2.length_of_schooling == 10) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1200
					}
					if (this.form2.length_of_schooling == 16) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1920
					}
					if (this.form2.length_of_schooling == 30) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 3600
					}
				}
				if (index == 3) {
					this.form2.computer_buy = 0
					this.form2.computer_deposit = 0;
					this.form2.computer_rent = 0
				}
			},

			//校服状态改变
			dealUniformChange: function(index) {
				if (index == 1) {
					this.form2.uniform_money = 300
				} else {
					this.form2.uniform_money = 0
				}
			},

			//被褥状态改变
			dealQuiltChange: function(index) {
				if (index == 1) {
					this.form2.quilt_money = 200
				} else {
					this.form2.quilt_money = 0
				}
			},

			//步骤条方法
			next() {

				if (this.form.name == "") {
					this.$message({
						type: "error",
						message: "请填入姓名"
					});
					return
				}

				if (this.form.phone == "") {
					this.$message({
						type: "error",
						message: "请填入手机号"
					});
					return
				}

				if (this.form.id_num == "") {
					this.$message({
						type: "error",
						message: "请填入身份证号"
					});
					return
				}

				if (this.form.address == "") {
					this.$message({
						type: "error",
						message: "请填入家庭住址"
					});
					return
				}

				if (this.form.gender == "") {
					this.$message({
						type: "error",
						message: "请填入性别"
					});
					return
				}

				if (this.form.mother == "") {
					this.$message({
						type: "error",
						message: "请填入母亲姓名"
					});
					return
				}

				if (this.form.mother_phone == "") {
					this.$message({
						type: "error",
						message: "请填入母亲手机号"
					});
					return
				}


				if (this.active++ > 3) this.active = 0;
			}
		},
		computed: {
			//杂费
			extras() {
				return this.form2.accommodation_deposit + this.form2.accommodation_money + this.form2.management + this.form2.net_money +
					this.form2.computer_buy + this.form2.computer_rent + this.form2.uniform_money + this.form2.quilt_money
			},
			//总费用
			allin() {
				return this.extras + this.form2.tuition - this.form2.cash_discount
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.student_add_all {
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

	.form2 {
		padding: 20px;
		box-sizing: border-box;
	}

	.form2-item:not(.form2-item-except) {
		border-bottom: 2px solid #eee;
		display: flex;
		margin-top: 15px;
	}

	.form2-item-except {
		border-bottom: 2px solid #eee;
		margin-top: 15px;
		display: block !important;
		padding-left: 50px;
		box-sizing: border-box;

	}

	.form2-item-except-in {
		width: 80% !important;
	}

	.form2-item-except>div {
		display: flex;

	}

	.form2-item-left,
	.form2-item-right {
		width: 50%;
	}


	.from3 {
		margin-top: 20px;
	}

	.form3-item-title {
		text-align: center;
	}
	
	.form3-table{
		border: 1px solid #eee;
	}
</style>
