import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
const {
    View, ScrollView, Image
} = require('react-native');

import Калькулятор from './HelloPage1';
import AboutPage from './AboutPage';
import Router from './Router';

const menuContent = (props) => {
    return <View  style={{}}>
        <View style={{
            justifyContent: "center",
            width:350,
            alignItems:'center',
            backgroundColor:'#000',}}>
            <Image source={{uri:'http://download.seaicons.com/icons/tristan-edwards/sevenesque/128/Calculator-icon.png'}} style={{
                margin:20,
                width:120,
                height:120,}}/>
        </View>
        <ScrollView style={{}}>
            <DrawerItems {...props} /></ScrollView></View>};


const HomeScreen = DrawerNavigator({
    Калькулятор: {screen: Калькулятор},
    AboutPage: {screen: AboutPage},
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
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},

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