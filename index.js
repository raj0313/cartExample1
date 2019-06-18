/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './routes/main';
import {name as appName} from './app.json';

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
