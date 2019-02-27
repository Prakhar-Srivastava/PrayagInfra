import React,{Component} from 'react'
import {Actions} from 'react-native-router-flux'
import {Platform,StyleSheet,ScrollView,View,Button,Image,StatusBar,TouchableOpacity,Text} from 'react-native'
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
		backgroundColor: 'transparent',
	},
	bg: {
		zIndex: -1,
		flex: 1,
		position: 'absolute',
	},
	logo: {
		height: 150,
		width: 150,
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 300,
		borderWidth: 10,
		borderColor: '#fff',
	},
	button: {
		borderColor: 'red',
		borderWidth: 1,
		borderRadius: 4,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		textAlign: 'center',
		width: '98%',
		backgroundColor: 'red'
	},
})
const blur_radius=Platform.select({
	ios: 2.5,
	android: 0.75,
})
export default class Rootscreen extends Component{
	render(){
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
				<Image source={require('../images/Buildings.jpg') } blurRadius={blur_radius} style={styles.bg}/>
				<Image source={require('../images/Logo.png')} style={styles.logo}  />
				<View style={styles.btnWrap}>
					<TouchableOpacity style={styles.button}onPress={
						event=>{
							return Actions.purchase()
						}}>
						<Text style={{color: '#fff',textAlign: 'center'}}>PURCHASE</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.btnWrap}>
					<TouchableOpacity style={styles.button} onPress={
						event=>{
							return Actions.sell()
						}
					}>
						<Text style={{color: '#fff',textAlign: 'center'}}>SELL</Text>
					</TouchableOpacity>
				</View>
				<Text style={{
					marginTop: 20,
					backgroundColor: '#ddddddee',
					bottom: 0,
					position: 'absolute',
					padding: 10,
					color: '#000',
				}}>
					Built for PrayagInfra City, Jhunsi, Prayagraj by Robo360 Pvt. Ltd.
				</Text>

			</ScrollView>
		)
	}
}
