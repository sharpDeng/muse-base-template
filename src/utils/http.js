import axios from 'axios';
import type from './type';
import config from '@/api/config'

const service = axios.create({
	baseURL: config.base_url
})

//请求头添加token 
service.interceptors.request.use(config => {
	// console.log(config)
	//判断是否存在token，如果存在的话，则每个http header都加上token
	let token = localStorage.getItem('TOKEN');
  if (token) {
    config.headers.Authorization = token;
  }
	return config 
},
err => {
	console.error(err);
	return Promise.reject(types.BEFORE_REQ_ERROR_CODE);
})

//处理响应数据
service.interceptors.response.use(response => {
	//暂不作处理
	return Promise.resolve(response.data);
},
err => {
	console.error(err);
	return Promise.reject(err)
})


//请求超时设定	
service.defaults.timeout = 8000;

export default service;