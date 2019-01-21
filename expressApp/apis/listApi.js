const listApi = [{
	url: '/list/getProductList',
	callback: (req, res)=>{
	    res.send({
			success: true,
			status: 200,
			list: [{id: 001, name: 'name'},{id: 002, name: 'name'}],
			msg:'获取商品列表成功！'
		})
	}
}];
module.exports = listApi;