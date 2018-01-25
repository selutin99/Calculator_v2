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
  NativeModules,
  Platform
} from 'react-native';

const Evaluate = NativeModules.CalculatorManager;

export default class HelloPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state={
      countOfSymbol: false,
      count: 1,
      text: '',
      result: 0,
      formula: "",
      opr: ["+", "/", "-", "*", "(", "."]
	};
    this.onPressOperator = this.onPressOperator.bind(this)
	this.onPressNumber = this.onPressNumber.bind(this)
  }
  calculate = () => {
    if (Platform.OS === 'android') {
		Evaluate.calculate(this.state.formula, (e) => {
		  this.setState({text: e});
		});
	}
	if (Platform.OS === 'ios') {
		this.setState({text:"Пока не работает"})
	}
  }
  onPressOperator=(symbol)=>{
	var result="";
  //var count = 1;
    if(symbol==="X"){
      symbol="*";
    }
	else if(symbol==="X²"){
	  symbol="^2";
	}

	for(var i=0; i<this.state.opr.length; i++){
		if(this.state.formula[this.state.formula.length-1]===this.state.opr[i] || this.state.formula.length==0 && symbol!=="."){
			result="";
			break;
		}
		else if(symbol==="."){
			if(this.state.formula.length==0){
				result="0.";
        this.setState({
      		count: 0
      	})
			}
			else{
				if(this.state.formula[this.state.formula.length-1]===this.state.opr[i] || this.state.formula[this.state.formula.length-1]===")"){
					result="";
				}
				else if (this.state.count === 1){
					result=".";
          this.setState({
        		count: 0
        	})
				}
			}
		}
		else{
			result=symbol;
      this.setState({
        count: 1
      })
		}
	}

	this.setState({
		formula:this.state.formula+result
	})
  }

  onPressNumber=(symbol)=>{
	this.setState({
		formula:this.state.formula+symbol
	})
  }

  openBracket=(symbol)=>{
	if(this.state.formula[this.state.formula.length-1]!=="."){
		this.setState({
		  formula:this.state.formula+"("
		})
	}
  }
  closeBracket=(symbol)=>{
    var result = "";
	if(this.state.formula.indexOf("(")==-1 || this.state.formula.length==0 || this.state.formula[this.state.formula.length-1]==="."){
		result="";
	}
	else{
		result=symbol;
	}
    this.setState({
      formula:this.state.formula+result
    })
  }


  backspaceOperator=()=>{
    this.setState({
      formula:this.state.formula.slice(0,this.state.formula.length-1)
    })
  }
  plusMinusOperator=()=>{
	if(this.state.formula.length!=0){
		this.setState({
			formula:"-("+this.state.formula+")"
		})
	}
  }
  sqrtOperator=()=>{
	if(this.state.formula.length!=0){
		this.setState({
			formula:"sqrt("+this.state.formula+")"
		})
	}
  }
  percentOperator=()=>{
	if(this.state.formula.length!=0){
		this.setState({
			formula:"percent("+this.state.formula+")"
		})
	}
  }
  onPressACButton=()=>{
    this.setState({formula:"",text:"", count: 1})
  }
  render() {
    return (
        <View style={{flex:1}}>
          <View style={{backgroundColor:'#282828',height:50}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={[styles.resultText,{fontSize:(30-(this.state.result.toString().length))}]}>
                  {this.state.text}
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
            <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperator} title="/"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="1"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="2"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="3"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperator} title="X"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="4"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="5"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="6"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperator} title="-"/>
            </View>
            <View style={styles.row}>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="7"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="8"/>
              <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="9"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperator} title="+"/>
            </View>
            <View style={styles.row}>
			  <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressOperator} title="."/>
			  <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.onPressNumber} title="0"/>
			  <Button  style={styles.buttonNumber} titleStyle ={styles.titleButtonStyle} onPress={this.percentOperator} title="%"/>
			  <Button  style={styles.equalButton} titleStyle = {styles.titleOperationStyle} onPress={this.calculate} title="="/>
            </View>
			<View style={styles.row}>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.openBracket} title="("/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.closeBracket} title=")"/>
              <Button  style={styles.operation} titleStyle = {styles.titleOperationStyle} onPress={this.onPressOperator} title="X²"/>
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
