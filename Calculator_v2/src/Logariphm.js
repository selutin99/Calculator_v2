const React = require('react');
const {
    View,
    Text,
    StyleSheet
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

export default class AboutPage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Это тестовая страница!
                </Text>
                <Text style={styles.instructions}>
                    Здесь будут логарифмы!
                </Text>
            </View>
        );
    }
};