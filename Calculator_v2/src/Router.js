import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 12,
        textAlign: 'center',
        margin: 10,
    }
});

export default class Router extends Component {
    static navigationOptions = {
        tabBarLabel: 'Router',
        tabBarVisible: false,
        headerTitle: null,
        header: null,
    };

    constructor(props) {
        super(props);
    }

    _loadInitialState = async () => {
        try {
            // здесь можно получить данные с сервера или локального хранилища, а затем перейти на другой экран
            // имитация интернета
            setTimeout(()=>{this.props.navigation.navigate('HomeScreen')},2000);
        } catch (error) {
            console.log(error);
        }
    };
    //выполняеться после рендеренга страницы
    componentDidMount() {
        this._loadInitialState().done();
    }
    //выполняеться до рендеренга страницы
    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Загружаем универсальный калькулятор...
                </Text>
            </View>
        )
    }
}