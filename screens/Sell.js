import React,{Component} from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native'
import {InputField} from './Enquiry'
const styles=StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
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
		backgroundColor: 'red',
		height: 40,
	},
})

export default class Enquiry extends Component{
	render(){
		return(
			<ScrollView style={{backgroundColor: '#fff'}}>
				<InputField label={'Advertisement Title'} multiline={true} />
				<InputField label={'Seller Name'} placeholder={'John Smith'}/>
				<InputField label={'Contact Number'} placeholder={'1234567890'} keyboardType={'phone-pad'} />
				<InputField label={'Email'} placeholder={'someone@example.com'} keyboardType={'email'} />
				<InputField label={'Property Description'} multiline={true}/>
				<InputField label={'Locality'} />
				<InputField label={'Full Address'} multiline={true} />
				<InputField label={'Features'} />
				<InputField label={'Area in sq. Yards'} keyboardType={'numeric'} />
				<InputField label={'Price'} />
				<View style={[styles.container,{margin: 10}]}>
					<TouchableOpacity 
						style={[styles.button]}
						onPress={event=>alert('Submitted to PrayagInfra City, Prayagraj')}
					>
						<Text style={{color: '#fff',textAlign: 'center', padding: 5}}>Submit</Text>
					</TouchableOpacity>
					<Text> 
						Developed by Robo360 Pvt. Ltd.
					</Text>
				</View>
			</ScrollView>
		)
	}
}
