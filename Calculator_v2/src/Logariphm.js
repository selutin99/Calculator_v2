const React = require('react');
const {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
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

onPressDoNothing=()=>{
}

export default class AboutPage extends Component {
    constructor(props){
        super(props)
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
                title="Посчитать логарифм"
                color="#f5901d"
              />
              <Text style={{padding: 10, fontSize: 11}}>
                    Результаты:
                </Text>
                <Text style={{padding: 10, fontSize: 23}}>
                </Text>
          </View>
        );
    }
};
