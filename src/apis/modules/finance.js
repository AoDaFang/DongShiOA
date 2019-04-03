import request from './request.js'

//支出列表获取接口
//GET
var financeListUrl = 'apis/finance/expense'
//results=20
//size=500
//token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyNzYwNjAsImV4cCI6NzIwMDAwMH0%3D.5CShRm06dXedBdfZ4fNvZJzMt3SC4DSmWu4%2FRmoTOCU%3D

function financeList(params) {
  return request.request({
    url: financeListUrl,
    method: 'get',
    params: params
  })
}

export default {
    financeList, 
}