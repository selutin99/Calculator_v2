const React = require('react');
const {
    View,
    Text,
    StyleSheet,
	TextInput,
	Dimensions,
  NativeModules
} = require('react-native');
const { Component } = React;
import {Button} from './components/';
import { Platform } from 'react-native';

var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
	operation:{
		backgroundColor:'#f5901d',
		borderRadius: 2
	},
	titleOperationStyle:{
		color:'white',
		fontSize:18,
	}
});
const Evaluate = NativeModules.IntegralManager;

export default class Integral extends Component {
    constructor(props){
        super(props)
        this.state = {
          formula: "",
          text: "",
          up: "",
          down: ""
        }
    }

    justEval = () => {
		if(Platform.OS === 'android'){
			Evaluate.justEval(this.state.formula, this.state.down, this.state.up, (e) => {
			  this.setState({text: e});
			});
		}
		if(Platform.OS === 'ios'){
			this.setState({text: "Пока не работает"});
		}
  	}
    render() {
        return (
			<View style={{padding:10}}>
				<View style={{paddingLeft: 10}}>
					<TextInput
						style={{height: 40, width:40}}
						placeholder="b"
						onChangeText={(value) => this.setState({up: value})}
					>
					</TextInput>
				</View>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<Text style={{paddingLeft: 20, width: 50, height: 50, fontSize: 36}}>
						∫
					</Text>
					<TextInput
					  style={{width:width-70,  height: 50}}
					  placeholder="Введите формулу и пределы"
					  onChangeText={(value) => this.setState({formula: value})}
					/>
				</View>
				<View style={{paddingTop: 40, paddingLeft: 10}}>
					<TextInput
						style={{height: 40, width:40}}
						placeholder="a"
						onChangeText={(value) => this.setState({down: value})}
					>
					</TextInput>
				</View>
				<Button
				  onPress={this.justEval}
				  title="Вычислить интеграл"
				  style={styles.operation} 
				  titleStyle = {styles.titleOperationStyle}
				/>
				<View style={{padding: 10}}>
					<Text style={{fontSize: 11}}>
						Результаты:
					</Text>
					<Text style={{paddingTop: 10, fontSize: 14}}>
						{this.state.text}
					</Text>
				</View>
			</View>
        );
    }
};
