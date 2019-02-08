import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
const styles=StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
export default class Sellscreen extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text>Sell Screen</Text>
			</View>
		)
	}
}