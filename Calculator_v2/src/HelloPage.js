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
});

export default class HelloPage extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        tabBarLabel: 'Login',
        tabBarVisible: false,
        headerTitle: null,
        header: null,
    };
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello Particles Brain!
                </Text>
            </View>
        );
    }
};