import React, {PropTypes} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from './components/';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableHighlight,
} from 'react-native';
export default class HelloPage extends React.PureComponent {
  constructor(props) {	
    super(props);
    this.state={
      result:0,
      formula:"",
    }
    this.onPressOperatorOrNumber = this.onPressOperatorOrNumber.bind(this)
  }
  onPressOperatorOrNumber=(symbol)=>{
    if(symbol==="X"){
      symbol="*";
    }
	else if(symbol==="X²"){
	  symbol="^2";
	}
	this.setState({
		formula:this.state.formula+symbol
	})
  }
  onPressSubmitResult=()=>{
    try{
      this.setState({
        result:eval(this.state.formula)||0
      })
    }catch(e){
      Alert.alert(
		'Ошибка',
		'Ошибка ввода! Проверьте правильность введённого выражения!'
	  )
    }
  }
  backspaceOperator=()=>{
    this.setState({
      formula:this.state.formula.slice(0,this.state.formula.length-1)
    })
  }
  plusMinusOperator=()=>{
    this.setState({
		formula:"-("+this.state.formula+")"
    })
  }
  sqrtOperator=()=>{
    this.setState({
		formula:"sqrt("+this.state.formula+")"
    })
  }
  percentOperator=()=>{
    this.setState({
		formula:"percent("+this.state.formula+")"
    })
  }
  onPressACButton=()=>{
    this.setState({formula:""})
  }
  render() {
    return (
        <View style={{flex:1}}>
          <View style={{backgroundColor:'#282828',height:50}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={[styles.resultText,{fontSize:(30-(this.state.result.toString().length))}]}>
                  {this.state.result}
                </Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
            <View style={{flex:1,backgroundColor:'#494949'}}>
              <View style={{flex:1,alignItems:'center',flexDirection:'row'}}>
                  <Text style={styles.formulaText}>
                    {this.state.formula}
                  </Text>
              </View>
            </View>
            <View style={styles.row}>
            <Button  style={styles.ACbutton} titleStyle ={styles.titleOperationStyle} onPress={this.onPressACButton} title="C"/>
			<Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.plusMinusOperator} title="±"/>
			<Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.backspaceOperator} title="←"/>
            <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="/"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="1"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="2"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="3"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="X"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="4"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="5"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="6"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="-"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="7"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="8"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="9"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="+"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="0"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.percentOperator} title="%"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperatorOrNumber} title="."/>
              <Button  style={styles.equalButton} titleStyle = {styles.titleOperationStyle} onPress={this.onPressSubmitResult} title="="/>
            </View>
			<View style={styles.row}>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="("/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title=")"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperatorOrNumber} title="X²"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.sqrtOperator} title="√"/>
            </View>
          </View>
        </View>
    );
  }
}

const styles =StyleSheet.create({
  component:{
    flex:1,
    flexDirection:'column'
  },
  ACbutton:{
    flex:1,
    backgroundColor:'#DF4A26',
    height:55,
	borderRadius: 4,
	borderWidth: 1,
    borderColor: '#ffffff',
  },
  buttonNumber:{
    flex:1,
    height:55,
	borderRadius: 4,
	borderWidth: 1,
    borderColor: '#B4B4B4',
  },
  operation:{
    backgroundColor:'#FF9400',
	borderRadius: 4,
	borderWidth: 1,
    borderColor: '#ffffff',
    height:55,
    flex:1,
  },
  textButton:{
    color:'black',
  },
  formulaText:{
    flex:1,
    color:'white',
    textAlign :'right',
    fontSize:30,
    marginRight:16,
  },
  iconStyle:{
    color:'white',
    marginLeft:16,
  },

  resultText:{
    color:'white',
    textAlign :'right',
    fontSize:30,
    marginRight:16,
  },
  titleOperationStyle:{
    color:'white',
	fontSize:30,
  },
  titleButtonStyle:{
	fontSize:30,
  },
  row:{
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  equalButton:{
    backgroundColor:'#DF4A26',
    flex:1,
    height:55,
	borderRadius: 4,
	borderWidth: 1,
    borderColor: '#ffffff',
  }
})