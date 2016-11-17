'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Axios from './node_modules/axios/dist/axios.js'

class FCAxiosHelper extends Component {

	static get(url,callback){

		Axios.get(url)
	    .then((response) => {
	      console.log(response)
	    }).catch((error) => {
	      console.log(error)
	    })
	}

	static post(url,params,callback) {
		Axios.post(url,params)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

const styles = StyleSheet.create({

});


export default FCAxiosHelper;