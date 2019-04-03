<template>
	<div class="finance-out-list">

		finance-out-list
		<el-table size="mini" :data="show_list" border style="width: 100%">
			<el-table-column prop="_id" label="ID">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="money" label="金额">
			</el-table-column>
			<el-table-column prop="type" label="支出类型">
			</el-table-column>
			<el-table-column prop="way" label="支出方式">
			</el-table-column>
			<el-table-column prop="day" label="支出日期">
			</el-table-column>
			<el-table-column prop="ctime" label="录入时间">
			</el-table-column>
			<el-table-column prop="invoice" label="发票" width="200">
			</el-table-column>
			<el-table-column  label="编辑">
				<el-button type="primary" >修改</el-button>
				<el-button type="primary" >删除</el-button>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]"
		 :page-size='page_size' layout="total, sizes, prev, pager, next, jumper" :total="out_list_length">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				
				out_list:[],
				
				show_list:[],
				page_size:10,
				page_index:1,

				token: "",
				

			}
		},
		created: function() {
			this.token = window.localStorage.getItem("token");
			this.downloadData()
		},
		methods: {

			downloadData: async function() {
				var dict = {
					results:20,
					size:500,
					token:this.token
				}
				var res = await this.interfc.financeApi.financeList(dict);
				if(res.code == 1){
					this.out_list = res.list
					console.log(this.out_list)
					this.getShowList()
				}
			},
			
			//根据当前 当前页面的大小 和 当前是第几个页面 切分数据
			getShowList: function() {
				var page_size = this.page_size;
				var page_index = this.page_index;
				this.show_list = this.out_list.slice((page_index - 1) * page_size, page_index * page_size);
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
		},
		computed: {
			out_list_length: function() {
				return this.out_list.length
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
