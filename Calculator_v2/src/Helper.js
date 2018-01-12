const React = require('react');
const {
    View,
    Text,
    StyleSheet,
	Button,
	Linking
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
	instructionsMarginTop: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
		marginTop: 5,
    },
});

export default class Helper extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
				<Text style={styles.welcome}>
                    Универсальный калькулятор
                </Text>
                <Text style={styles.instructions}>
                    Данное приложение представляет из себя многофункциональный калькулятор, способный выполнять действия инженерного калькулятора, находить производные произвольных функций, решать логарифмические уравнения, вычислять определённый интеграл.
                </Text>
				<Button
				  onPress={ ()=> Linking.openURL('https://docs.oracle.com/cd/E17904_01/apirefs.1111/e12048/functmath.htm') }
				  title="Перейти"
				  color="#f5901d"
				/>
            </View>
        );
    }
};