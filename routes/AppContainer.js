import React, { Component } from "react";
import { Router, Scene, Stack, Drawer, Actions, ActionConst,Modal } from "react-native-router-flux";
import { View, Image,AsyncStorage, BackHandler, ToastAndroid,ActivityIndicator,BackAndroid,Platform } from 'react-native';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { NetInfo, Text,Animated } from "react-native";
import ProductList from "../routes/Products/Component/products"
import  { connect } from 'react-redux';
import Cart from "../routes/Products/Component/Cart"

const RouterWithRedux = connect()(Router);


export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
		constructor() {
		super()
		{

		}
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
					navigationBarStyle={{ 
						backgroundColor: 'black',
						marginBottom:0
						}}
					titleStyle={{ color: "#fff" }}>
				
				<Scene key = "root">
						<Scene key ="products"
						initial
						title={"VetRadar Test Version"}
						component = {ProductList}/>
						<Scene key ="cart"
						title="Cart"
						component = {Cart}/>

			
			
				</Scene>
			</RouterWithRedux>
			</Provider>

		);
	}
	
}


