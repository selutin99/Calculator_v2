const React = require('react');
const {
    View,
    Text,
    StyleSheet,
	TextInput,
	Dimensions
} = require('react-native');
const { Component } = React;

var width = Dimensions.get('window').width;

export default class Integral extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
			<View>
				<View style={{padding: 10}}>
					<TextInput
						style={{height: 40, width:40}}
						placeholder=""
						onChangeText={(text) => this.setState({text})}
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
					  onChangeText={(text) => this.setState({text})}
					/>
				</View>
				<View style={{paddingTop: 40, paddingLeft: 10}}>
					<TextInput
						style={{height: 40, width:40}}
						placeholder=""
						onChangeText={(text) => this.setState({text})}
					>
					</TextInput>
				</View>
				<View style={{padding: 10}}>
					<Text style={{padding: 10, fontSize: 11}}>
						Результаты:
					</Text>
					<Text style={{padding: 10, fontSize: 14}}>
					
					</Text>
				</View>
			</View>
        );
    }
};