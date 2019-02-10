import React,{Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Platform,StyleSheet,View,Button,Image,StatusBar} from 'react-native';
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	btnWrap: {
		width: '90%',
		zIndex: 100,
		marginTop: 75,
		backgroundColor: '#CCCCCC',
	},
	bg: {
		zIndex: -1,
		flex: 1,
		position: 'absolute',
	},
  });
  const blur_radius=Platform.select({
	ios: 7,
	android: 3,
})
export default class Rootscreen extends Component{
	render(){
		return (
			<View style={styles.container}>
			<StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
 	  	<Image source={require('../images/Buildings.jpg') } blurRadius={blur_radius} style={styles.bg}/>
 		<View style={styles.btnWrap}>
 			<Button title={'Purchase'} ref={'purchase'} onPress={
 				event=>{
 					return Actions.purchase()
 				}}/>
 		</View>
 		<View style={styles.btnWrap}>
 			<Button title={'Sell'} onPress={
 				event=>{
 					return Actions.sell()
 				}
 			}/>
 		</View>
       </View>
		)
	}
}