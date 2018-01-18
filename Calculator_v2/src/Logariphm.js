const React = require('react');
const {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
	  NativeModules
} = require('react-native');
const { Component } = React;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});

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
                title="Вычислить логарифм"
                color="#f5901d"
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
