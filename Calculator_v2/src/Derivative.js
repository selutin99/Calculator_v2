const React = require('react');
const {
	AppRegistry,
    View,
    Text,
	Button,
	TextInput,
    StyleSheet
} = require('react-native');
const { Component } = React;

onPressDoNothing=()=>{
}

export default class Derivative extends Component {
    constructor(props){
        super(props)
		this.state = {text: ''};
    }
    render() {
        return (
            <View style={{padding: 10}}>
				<TextInput
				  style={{height: 40}}
				  placeholder="Введите формулу"
				  onChangeText={(text) => this.setState({text})}
				/>
				<Button
				  onPress={onPressDoNothing}
				  title="Найти производную"
				  color="#f5901d"
				/>
				<Text style={{padding: 10, fontSize: 11}}>
					Результаты:
				</Text>
				<Text style={{padding: 10, fontSize: 14}}>
					
				</Text>
			</View>
        );
    }
};