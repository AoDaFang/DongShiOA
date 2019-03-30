import axios from 'axios'

function request(params) {
	
	if(params.method == 'get'){
		return new Promise((resolve, reject) => {
			axios.get(params.url, params.params)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
	
	if(params.method == 'post'){
		return new Promise((resolve, reject) => {
			axios.post(params.url, params.params)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
}

export default{
	request
}
