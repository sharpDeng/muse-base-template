import http from '@/utils/http';
import config from './config';

export function demoApi(data){
	return new http({
		url: config.project + 'salememberquerysvc/api/esearch/relativeNetwork',
		method: 'POST',
		data: data
	})
}

export function demoApi1(data){
	return new http({
		url: config.project + 'api/menu/service/list/1/10',
		method: 'GET'
	})
}