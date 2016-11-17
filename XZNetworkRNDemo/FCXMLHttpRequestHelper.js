'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class FCXMLHttpRequest extends Component {

	static get(url,callback){

		let request = new XMLHttpRequest()

		request.onreadystatechange = (e) => {

			let state = request.readyState;
			console.log(state)

			if (state == 0) {
				console.log('对象已经建立，但还未初始化，这时尚未调用open方法')
			}
			if (state == 1) {
				console.log('open方法已经调用，但尚未调用send方法')
			}
			if (state == 2) {
				console.log('send方法已经调用，其他数据未知')
			}
			if (state == 3) {
				console.log('请求已经发送成功，正在接收数据')
			}
			if (state == 4) {
				console.log('数据已经接收成功')
				console.log(request.status)
				console.log(request.responseText)
				callback()
			}
		}

		
		//请求方式 请求地址 是否异步
		request.open('GET',url,true)
		request.onload = () => {
			console.log('onload')
		}
		request.onerror = () => {
			console.log('onerror')
		}
		request.send()

		return request
	}

	static post(url,params,callback){
		let request = new XMLHttpRequest()

		request.onreadystatechange = (e) => {

			let state = request.readyState;
			console.log(state)

			if (state == 0) {
				console.log('对象已经建立，但还未初始化，这时尚未调用open方法')
			}
			if (state == 1) {
				console.log('open方法已经调用，但尚未调用send方法')
			}
			if (state == 2) {
				console.log('send方法已经调用，其他数据未知')
			}
			if (state == 3) {
				console.log('请求已经发送成功，正在接收数据')
			}
			if (state == 4) {
				console.log('数据已经接收成功')
				console.log(request.status)
				console.log(request.responseText)
				callback()
			}
		}

		request.open('POST',url,true)
		request.setRequestHeader('Accept','application/json')
		request.setRequestHeader('Content-Type','application/json')
		request.send(params)

		return request
	}
}

const styles = StyleSheet.create({

});


export default FCXMLHttpRequest;