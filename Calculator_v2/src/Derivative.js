const React = require('react');
const {
		AppRegistry,
    View,
    Text,
		Button,
		TextInput,
    StyleSheet,
		NativeModules
} = require('react-native');
const { Component } = React;

onPressDoNothing=()=>{
}

const Evaluate = NativeModules.DerivativeManager;

export default class Derivative extends Component {
    constructor(props){
        super(props)
		this.state = {
			text: '',
			formula: ""
			}
    }
		justEval = () => {
			Evaluate.justEval(this.state.formula, (e) => {
			  this.setState({text: e});
			});
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
				  title="Найти производную"
				  color="#f5901d"
				/>
				<Text style={{padding: 10, fontSize: 11}}>
					Результаты:
				</Text>
				<Text style={{padding: 10, fontSize: 14}}>
					{this.state.text}
				</Text>
			</View>
        );
    }
};
