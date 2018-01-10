import React, {Component} from 'react';
import {View, Text} from 'react-native';

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
            <View>
                <Text>Экран загрузки приложения</Text>
            </View>
        )
    }
}