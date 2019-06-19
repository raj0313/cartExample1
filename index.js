/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import Root from './routes/main';
import {name as appName} from './app.json';
import {View} from 'react-native'
export default class Index extends React.Component{
render(){
    return(
        <View style ={{flex:1}}>
            <Root {...this.props}></Root>
        </View>
    )
}
}

AppRegistry.registerComponent(appName, () => Index);
