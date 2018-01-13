const React = require('react');
const {
    View,
    Text,
    StyleSheet,
	TextInput,
	Dimensions,
	Button
} = require('react-native');
const { Component } = React;

var width = Dimensions.get('window').width;
onPressDoNothing=()=>{
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default class Integral extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
			<View style={{padding:10}}>
				<View style={{paddingLeft: 10}}>
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
				<Button
				  onPress={onPressDoNothing}
				  title="Вычислить интеграл"
				  color="#f5901d"
				/>
				<View style={{padding: 10}}>
					<Text style={{fontSize: 11}}>
						Результаты:
					</Text>
					<Text style={{fontSize: 14}}>
						
					</Text>
				</View>
			</View>
        );
    }
};