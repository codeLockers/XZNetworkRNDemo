/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

import FCFetchHelper from './FCFetchHelper.js'
import FCXMLHttpRequest from './FCXMLHttpRequestHelper.js'
import FCAxiosHelper from './FCAxiosHelper.js'

let request = null

export default class XZNetworkRNDemo extends Component {

  _start(){

    console.log('start...')


    //Fetch GET 请求
    // let url = 'http://facebook.github.io/react-native/movies.json'
    // request = FCFetchHelper.get(url,((status,response) => {

    //   if (status) {
    //     //请求成功
    //     console.log(response)
    //   }else{
    //     console.log('request fail')
    //   }
    // }))
    
    
    // Fetch POST 请求
    // let url = 'http://op.juhe.cn/onebox/weather/query'
    // request = FCFetchHelper.post(url,{key:'ed9b4f04b02a265a3684e256c6ff6f22',cityname:'苏州'},(status,response) => {

    //   if (status) {
    //     //请求成功
    //     console.log(response)
    //   }else{
    //     //请求失败
    //     console.log(response)
    //   }

    // })
    
    //FCXMLHttpRequest
    let request = FCXMLHttpRequest.get(url,() => {
      console.log('callback')
    })

    let request = FCXMLHttpRequest.post(url,{key:'ed9b4f04b02a265a3684e256c6ff6f22',cityname:'苏州'},() => {
      console.log('callback')
    })
    

    //Axios GET请求
    FCAxiosHelper.get(url,() => {
      console.log(callback)
    })

    //Axios POST请求
    FCAxiosHelper.post(url,{key:'ed9b4f04b02a265a3684e256c6ff6f22',cityname:'苏州'},() => {
      console.log('callback')
    })
  }

  _stop(){
    if (request) {
      console.log('stop....')
      request.cancel()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._start}>
          <View style={{width:100,height:100,backgroundColor:'red'}}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._stop}>
          <View style={{width:100,height:100,backgroundColor:'green'}}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('XZNetworkRNDemo', () => XZNetworkRNDemo);
