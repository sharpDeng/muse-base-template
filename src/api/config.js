
import { isInApp } from '@/utils/util'

let base_url = '';

//生产环境
const PRODUCT = {
	base_url: base_url,
	
}

//开发环境
const DEVELOPMENT = {
	base_url: '',
	project: '/long-eureka-client/'
}

//判断是否混合app使用，以返回不同base_url
//混合app根域名需在现在加入
//作为web项目则在服务器的代理上设置
let config = isInApp() ? PRODUCT : DEVELOPMENT;

export default config;



