const React = require('react');
const {
    View,
    Text,
    StyleSheet,
    TextInput,
	  NativeModules
} = require('react-native');
const { Component } = React;
import {Button} from './components/';
import { Platform } from 'react-native';
const Evaluate = NativeModules.LogariphmManager;

export default class Logariphm extends Component {
    constructor(props){
        super(props)
		this.state = {
			formula: "",
			text: ''
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
                title="Вычислить логарифм"
                style={styles.operation} 
			    titleStyle = {styles.titleOperationStyle}
              />
              <Text style={{padding: 10, fontSize: 11}}>
                    Результаты:
              </Text>
              <Text style={{paddingLeft:10, fontSize: 14}}>
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
