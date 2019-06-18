import React, { Component } from "react";
import { Router, Scene, Stack, Drawer, Actions, ActionConst,Modal } from "react-native-router-flux";
import { View, AsyncStorage, BackHandler, ToastAndroid,ActivityIndicator,BackAndroid,Platform } from 'react-native';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { NetInfo, Text,Animated } from "react-native";
import {ProductList} from "../routes/Products/Component/products"
import connect from 'react-redux'
const RouterWithRedux = connect()(Router);

export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
	constructor() {
	}
		async componentDidMount() {
		}
		componentWillUnmount(){
			
		}
		
		//Connected to Internet
	render() {
		
	return (
			<Provider store={this.props.store}>
				<RouterWithRedux
					navigationBarStyle={{ backgroundColor: 'white', color: "#fff", flex: 1 }}
					titleStyle={{ color: "rgb(246, 168, 28)" }}
					navBarButtonColor={"rgb(246, 168, 28)"}>
				
				<Scene key = "root" >
				<Scene key ="products"
				title="Products"
				component = {ProductList}>
					

				</Scene>
				</Scene>
			</RouterWithRedux>
			</Provider>

		);
	}
	
}


