<template>
	<div class="student-list">
		<div class="search-box">
			<el-form ref="form" :model="form" label-width="80px" class="search-form">
				<div>
					<el-form-item label="姓名:">
						<el-input size="mini" placeholder="请输入姓名" v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="学号:">
						<el-input size="mini" placeholder="请输入学号" v-model="form.student_id"></el-input>
					</el-form-item>
					<el-form-item label="证件:">
						<el-input size="mini" placeholder="请输入身份证号" v-model="form.id_num"></el-input>
					</el-form-item>
				</div>
				<div>
					<el-form-item label="班级">
						<el-select v-model="form.class" size="mini" placeholder="请选择班级">
							<el-option label="全部" value="all"></el-option>
							<el-option label="软工B班" value="软工B班"></el-option>
							<el-option label="软工A班" value="软工A班"></el-option>
							<el-option label="1901" value="1901"></el-option>
							<el-option label="1808" value="1808"></el-option>
							<el-option label="1807" value="1807"></el-option>
							<el-option label="1806" value="1806"></el-option>
							<el-option label="1805" value="1805"></el-option>
							<el-option label="1804" value="1804"></el-option>
							<el-option label="1803" value="1803"></el-option>
							<el-option label="1802" value="1802"></el-option>
							<el-option label="1801" value="1801"></el-option>
							<el-option label="1710" value="1710"></el-option>
							<el-option label="1709" value="1709"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="缴费状态">
						<el-radio-group v-model="form.paystate">
							<el-radio label="-1">欠费</el-radio>
							<el-radio label="1">缴清</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="状态">
						<el-select v-model="form.state" size="mini" placeholder="请选择状态">
							<el-option label="全部" value="-1"></el-option>
							<el-option label="预报名" value="0"></el-option>
							<el-option label="在读" value="1"></el-option>
							<el-option label="毕业" value="2"></el-option>
							<el-option label="休学" value="3"></el-option>
							<el-option label="退学" value="4"></el-option>
						</el-select>
					</el-form-item>
				</div>
			</el-form>
			<div class="search-btns">
				<el-button type="primary" class="el-icon-search" @click="dealSearch">搜索</el-button>
				<el-button type="primary" class="el-icon-plus" @click="$router.push('/main/student_add')">新建</el-button>
			</div>
		</div>


		<div>
			<el-table :data="show_list" border style="width: 100%">
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="classId" label="班级" width="180">
				</el-table-column>
				<el-table-column prop="phone" label="手机号">
				</el-table-column>
				<el-table-column prop="ctime" label="入学日期">
				</el-table-column>
				<el-table-column prop="term" label="学制">
				</el-table-column>
				<el-table-column prop="motherPhone" label="家长电话">
				</el-table-column>
				<el-table-column prop="enroller" label="招生老师">
				</el-table-column>
				<el-table-column prop="tuition" label="学费">
				</el-table-column>
				<el-table-column prop="tuitionPaid" label="已缴学费">
				</el-table-column>
				<el-table-column prop="fee" label="杂费">
				</el-table-column>
				<el-table-column prop="feePaid" label="已缴杂费">
				</el-table-column>
				<el-table-column prop="paystateStr" label="缴费状态">
				</el-table-column>
				<el-table-column prop="tuitionPaid" label="操作">
					<template slot-scope="scope">
						<el-button type="primary" @click="dealShowDialog(scope.$index)">查看</el-button>
					</template>
				</el-table-column>
			</el-table>

			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]"
			 :page-size='page_size' layout="total, sizes, prev, pager, next, jumper" :total="student_list_length">
			</el-pagination>
		</div>

		<!-- 弹窗 -->
		<div class="alert-box">

			<el-dialog :title="'查看学生信息'" :visible.sync="alert_box">


				<el-tabs v-model="alert_box_active" @tab-click="handleClick">
					<!-- 选项卡第一部分 -->
					<el-tab-pane label="基本信息" name="0">
						<el-form ref="form" :model="tform1" label-width="100px">
							<div>
								<div>
									<el-form-item label="* 姓名">
										<el-input v-model="tform1.name"></el-input>
									</el-form-item>
									<el-form-item label="* 手机号">
										<el-input v-model="tform1.phone"></el-input>
									</el-form-item>
									<el-form-item label="* 身份证">
										<el-input v-model="tform1.id_num"></el-input>
									</el-form-item>
									<el-form-item label="* 户籍地址">
										<el-input v-model="tform1.address"></el-input>
									</el-form-item>

									<el-form-item label="学历">
										<el-select v-model="tform1.education" placeholder="请选择学历">
											<el-option label="初中" value="shanghai"></el-option>
											<el-option label="中专" value="beijing"></el-option>
											<el-option label="高中" value="beijing"></el-option>
											<el-option label="专科" value="beijing"></el-option>
											<el-option label="本科" value="beijing"></el-option>
											<el-option label="研究生" value="beijing"></el-option>
										</el-select>
									</el-form-item>

									<el-form-item label="毕业院校">
										<el-input v-model="tform1.graduate_school"></el-input>
									</el-form-item>

									<el-form-item label="毕业时间">
										<el-col :span="11">
											<el-date-picker type="date" placeholder="选择日期" v-model="tform1.graduate_time" style="width: 100%;"></el-date-picker>
										</el-col>
									</el-form-item>

									<el-form-item label="专业">
										<el-input v-model="tform1.major"></el-input>
									</el-form-item>

									<el-form-item label="入学班级">
										<el-select v-model="tform1.enter_class" placeholder="请选择班级">
											<el-option label="1802" value="shanghai"></el-option>
											<el-option label="1804" value="beijing"></el-option>
										</el-select>
									</el-form-item>


								</div>

								<div>
									<el-form-item label="* 性别">
										<el-radio v-model="tform1.gender" label="1">男</el-radio>
										<el-radio v-model="tform1.gender" label="2">女</el-radio>
									</el-form-item>
									<el-form-item label="父亲">
										<el-input v-model="tform1.father" placeholder="请输入父亲姓名"></el-input>
									</el-form-item>
									<el-form-item label="* 母亲">
										<el-input v-model="tform1.mother" placeholder="请输入母亲姓名"></el-input>
									</el-form-item>
									<el-form-item label="父亲电话">
										<el-input v-model="tform1.father_phone"></el-input>
									</el-form-item>

									<el-form-item label="* 母亲电话">
										<el-input v-model="tform1.mother_phone"></el-input>
									</el-form-item>

									<el-form-item label="信息来源">
										<el-input v-model="tform1.msg_from"></el-input>
									</el-form-item>

									<el-form-item label="交通方式">
										<el-radio v-model="tform1.transportation" label="1">大巴</el-radio>
										<el-radio v-model="tform1.transportation" label="2">火车</el-radio>
										<el-radio v-model="tform1.transportation" label="3">私家车</el-radio>
									</el-form-item>

									<el-form-item label="推荐人">
										<el-input v-model="tform1.msg_person"></el-input>
									</el-form-item>

									<el-form-item label="咨询老师">
										<el-input v-model="tform1.msg_teacher"></el-input>
									</el-form-item>


								</div>
							</div>


							<el-form-item label="备注" class="remark">
								<el-input type="textarea" v-model="tform1.remark" height="100"></el-input>
							</el-form-item>
						</el-form>

						<el-button type="primary" @click="dealModify">修改</el-button>
					</el-tab-pane>

					<!-- 选项卡第二部分 -->
					<el-tab-pane label="费用信息" name="1">
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
					</el-tab-pane>

					<!-- 选项卡第三部分 -->
					<el-tab-pane label="缴费计划" name="2">
						
					</el-tab-pane>
				</el-tabs>


			</el-dialog>



		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				form: {
					name: '',
					student_id: '',
					id_num: "",
					class: "all",
					paystate: "-1",
					state: "-1"
				},

				// 选项卡第一部分
				tform1: {

					name: "",
					phone: "",
					id_num: 110100201101010123,
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

				//选项卡第二部分
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

				form3: {
					//四个input框的状态
					input1: false,
					input2: false,
					input3: false,
					input4: false
				},

				//总数据
				student_list: [],
				//要展示的数据
				show_list: [],

				//当前页面大小
				page_size: 10,
				//当前页码
				page_index: 1,

				token: "",

				//是否弹出信息窗口
				alert_box: false,
				//弹窗口选项卡激活
				alert_box_active: 0,

				//下载下来的关于费用的对象
				fee: {}
			}
		},
		created: function() {
			this.downloadStudentList()
			this.token = window.localStorage.getItem("token")
		},
		methods: {
			downloadStudentList: function() {
				var url = this.api.userListUrl;
				this.axios.get(url).then(res => {
					for (var item of res.data.list) {
						if (item.paystate == 0) {
							item.paystateStr = "欠费"
						} else {
							item.paystateStr = "缴清"
						}
					}

					this.student_list = res.data.list
					this.getShowList()
				})
			},

			//根据当前 当前页面的大小 和 当前是第几个页面 切分数据
			getShowList: function() {
				var page_size = this.page_size;
				var page_index = this.page_index;
				this.show_list = this.student_list.slice((page_index - 1) * page_size, page_index * page_size);
			},

			//分页器页面大小变化
			handleSizeChange: function(current_size) {
				this.page_size = current_size;
				this.getShowList()
			},
			//分页器当前页改变
			handleCurrentChange: function(current_page) {
				this.page_index = current_page;
				this.getShowList()
			},
			//搜索功能
			dealSearch: function() {
				var url = this.api.serachUrl;
				var dict = {
					"page": 1,
					"condition": {
						"name": this.form.name,
						"id": this.form.student_id,
						"classId": this.form.class,
						"paystate": this.form.paystate,
						"status": this.form.state,
						"idcard": this.form.id_num
					},
					"token": this.token
				}
				this.axios.post(url, dict).then(res => {
					console.log(res.data)
					if (res.data.code == 1) {
						this.student_list = res.data.list
						this.getShowList()
						this.$message({
							message: '搜索成功',
							type: 'success'
						});
					} else {
						this.$message({
							message: '搜索失败',
							type: 'error'
						});
					}
				}).catch(error => {
					this.$message({
						message: '搜索失败',
						type: 'error'
					});
				})
			},

			//点击查看显示对话框
			dealShowDialog: function(index) {
				this.alert_box = true
				var student_item = this.show_list[index]
				var s = {}

				var url = this.api.feeUrl + "?uid=" + student_item._id;
				console.log(url)
				this.axios.get(url).then(res => {
					console.log(res.data.fee)

					this.fee = res.data.fee

					s = res.data.fee

					for (var attr in student_item) {
						s[attr] = student_item[attr]
					}

					this.form2.length_of_schooling = s.term
					this.form2.pay_method = s.tuition_way
					this.form2.major = s.course
					this.form2.sale_method = s.cuppon_way
					this.form2.tuition = s.tuitionOrigin
					this.form2.cash_discount = s.tuitionMinus
					this.form2.tuition = s.tuition
					this.form2.accommodation = s.room_way
					this.form2.accommodation_money = s.room_rent
					this.form2.accommodation_deposit = s.room_deposit
					this.form2.management = s.room_manage
					this.form2.net_money = s.room_net
					this.form2.computer = s.pc_way
					this.form2.computer_rent = s.pc_rent
					this.form2.computer_buy = s.pc_buy
					this.form2.computer_deposit = s.pc_deposit
					this.form2.uniform_money = s.cloth
					this.form2.quilt_money = s.blanket
					this.form2.uniform = s.clothflag
					this.form2.quilt = s.blanketflag
					this.tform1.name = s.name
					this.tform1.phone = s.phone
					this.tform1.id_num = s.idcard
					this.tform1.address = s.address
					this.tform1.education = s.edu_level
					this.tform1.graduate_school = s.edu_school
					this.tform1.graduate_time = s.edu_profession
					this.tform1.enter_class = s.classId
					this.tform1.gender = s.sex
					this.tform1.father = s.father
					this.tform1.mother = s.mother
					this.tform1.father_phone = s.fatherPhone
					this.tform1.mother_phone = s.motherPhone
					this.tform1.msg_from = s.source
					this.tform1.transportation = s.traffic
					this.tform1.msg_person = s.enroller
					this.tform1.msg_teacher = s.consultant
					this.tform1.remarks = s.remark
				})



				var c = {
					// 					"term": this.form2.length_of_schooling,
					// 					"tuition_way": this.form2.pay_method,
					// 					"course": this.form2.major,
					// 					"cuppon_way": this.form2.sale_method,
					// 					"tuitionOrigin": this.form2.tuition,
					// 					"tuitionMinus": this.form2.cash_discount,
					// 					"tuition": this.form2.tuition,
					// 					"room_way": this.form2.accommodation,
					// 					"room_rent": this.form2.accommodation_money,
					// 					"room_deposit": this.form2.accommodation_deposit,
					// 					"room_manage": this.form2.management,
					// 					"room_net": this.form2.net_money,
					// 					"pc_way": this.form2.computer,
					// 					"pc_rent": this.form2.computer_rent,
					// 					"pc_buy": this.form2.computer_buy,
					// 					"pc_deposit": this.form2.computer_deposit,
					// 					"cloth": this.form2.uniform_money,
					// 					"blanket": this.form2.quilt_money,
					// 					"clothflag": this.form2.uniform,
					// 					"blanketflag": this.form2.quilt,
					// 					"fee": this.extras,
					// 					"feeTotal": this.allin,
					// 					"name": this.tform1.name,
					// 					"phone": this.tform1.phone,
					// 					"idcard": this.tform1.id_num,
					// 					"address": this.tform1.address,
					// 					"edu_level": this.tform1.education,
					// 					"edu_school": this.tform1.graduate_school,
					// 					"edu_profession": this.tform1.graduate_time,
					// 					"classId": this.tform1.enter_class,
					// 					"sex": this.tform1.gender,
					// 					"father": this.tform1.father,
					// 					"mother": this.tform1.mother,
					// 					"fatherPhone": this.tform1.father_phone,
					// 					"motherPhone": this.tform1.mother_phone,
					// 					"source": this.tform1.msg_from,
					// 					"traffic": this.tform1.transportation,
					// 					"enroller": this.tform1.msg_person,
					// 					"consultant": this.tform1.msg_teacher,
					// 					"remark": this.tform1.remarks,
					// 					"token": this.token
				}
			},

			//选项卡更改
			handleClick: function() {
				console.log('handleClick')
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

			//获取当前时间，格式YYYY-MM-DD
			getNowFormatDate: function() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate;
			},

			//弹窗修改信息
			dealModify: function() {
				alert("暂无接口")
			}
		},
		computed: {
			student_list_length: function() {
				return this.student_list.length
			},

			//杂费
			extras() {
				return this.form2.accommodation_deposit + this.form2.accommodation_money + this.form2.management + this.form2.net_money +
					this.form2.computer_buy + this.form2.computer_rent + this.form2.uniform_money + this.form2.quilt_money
			},
			//总费用
			allin() {
				return this.extras + this.form2.tuition - this.form2.cash_discount
			}

		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.student-list {
		padding: 20px;
		box-sizing: border-box;
	}

	.search-box {
		display: flex;
		background-color: #fff;
		margin-bottom: 30px;
	}

	.search-form {
		display: flex;
		flex-direction: column;
		width: 70%;
		justify-content: space-around;
		align-items: center;
	}

	.search-form>div {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 10px;
	}

	.el-form-item {
		width: 33.333%;
	}

	.search-btns {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 30%;
	}

	.search-btns button {
		width: 30%;
		margin: 0;
	}

	.el-pagination {
		text-align: right;
		margin-top: 20px;
	}

	/* 关于弹窗 */
	.alert-box {}



	/* 关于选项卡 */
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
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.form3-table {
		border: 1px solid #eee;
		border-bottom: none;
		border-right: none;

		padding-bottom: -1px;
		width: 70%;
		margin: 0 auto;
	}

	.form3-table-row {
		border-bottom: 1px solid #eee;
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}

	.form3-table-row:nth-last-child {
		border: none;
	}

	.form3-table-block {
		width: 33%;
		border-right: 1px solid #eee;
		text-align: center;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.form3-table-block:nth-last-child {
		border: none;
	}

	.form3-table-block>i {
		background-color: #36bafb;
		border-radius: 50%;
		display: block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		color: #fff;
	}

	.deal-btns {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
