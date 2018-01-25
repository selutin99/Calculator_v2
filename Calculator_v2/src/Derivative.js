const React = require('react');
const {
	AppRegistry,
    View,
    Text,
	TextInput,
    StyleSheet,
	NativeModules,
} = require('react-native');
const { Component } = React;
const Evaluate = NativeModules.DerivativeManager;
import {Button} from './components/';
import { Platform } from 'react-native';

export default class Derivative extends Component {
    constructor(props){
        super(props)
		this.state = {
			text: '',
			formula: ""
		}
    }
	justEval = () => {
		if(Platform.OS === 'android'){
			Evaluate.justEval(this.state.formula, (e) => {
			  this.setState({text: e});
			});
		}
		if(Platform.OS === 'ios'){
			this.setState({text: "Пока не работает"});
		}
	}
	dontWork=()=>{
	}
    render() {
        return (
            <View style={{padding: 10}}>
				<TextInput
				  style={{height: 40}}
				  placeholder="Введите формулу"
				  onChangeText={(value) => this.setState({formula: value})}
				/>
				<Button
				  onPress={this.justEval}
				  style={styles.operation} 
				  titleStyle = {styles.titleOperationStyle}
				  title="Найти производную"
				/>
				<Text style={{padding: 10, fontSize: 11}}>
					Результаты:
				</Text>
				<Text style={{paddingLeft: 10, fontSize: 14}}>
					{this.state.text}
				</Text>
			</View>
        );
    }
};
const styles =StyleSheet.create({
	operation:{
		backgroundColor:'#f5901d',
		borderRadius: 2
	},
	titleOperationStyle:{
		color:'white',
		fontSize:18,
	}
})
