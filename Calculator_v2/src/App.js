import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import {Platform} from 'react-native';
const {
    View, ScrollView, Image, Text, TouchableHighlight, NativeMoudules
} = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons'

import Калькулятор from './Calculator';
import Производные from './Derivative';
import Логарифмы from './Logariphm';
import Интегралы from './Integral';
import Справка from './Helper';
import Router from './Router';

const DrawerIcon=()=>{
	if(Platform.OS==='ios'){
		return null;
	}
	return (
		<Icon
			name="md-menu"
			size={28}
			color="black"
			style={{paddingLeft:20}}
			onPress={()=>navigate('DrawerOpen')}
		/>
	);
};

const menuContent = (props) => {
    return <View  style={{}}>
        <View style={{
            justifyContent: "center",
            width:350,
            alignItems:'center',
            backgroundColor:'#000',}}>
            <Image source={require('./images/calcImg.png')} style={{
                margin:10,
                width:120,
                height:120,}}/>
        </View>
        <ScrollView style={{}}>
            <DrawerItems {...props} /></ScrollView></View>};


const HomeScreen = DrawerNavigator({
    Калькулятор: {screen: Калькулятор},
    Производные: {screen: Производные},
	Логарифмы: {screen: Логарифмы},
    Интегралы: {screen: Интегралы},
	Справка: {screen: Справка}
}, {
    drawerStatusBar:false,
    animationEnabled: true,
    drawerWidth:350,
    contentComponent: props => menuContent(props),
    contentOptions: {
        activeTintColor: '#0a0a0a',
        labelStyle :{
            color:'#0a0a0a'
        },
    },
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle',
});


const ViewContent = StackNavigator({
    Router: {screen: Router},
    HomeScreen: {screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: 'black'
			},
            title: <Text style={{fontSize:16, color:'white'}}>Универсальный калькулятор</Text>,
			headerLeft: <TouchableHighlight onPress={ () => navigation.navigate('DrawerOpen') }>
						<Image
							source={require('./images/hamburgerIcon.png')}
							style={{
								marginLeft:5,
								width:40,
								height:40,}}
						/>
						</TouchableHighlight>,
            gesturesEnabled: false,
        })
		},
}, {
    animationEnabled: true,
});

export default class App extends Component {
    render() {
        return (
                <ViewContent/>
        );
    }
}
