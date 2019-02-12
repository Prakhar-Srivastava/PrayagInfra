import React,{Component} from 'react'
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native'
const styles=StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	input: {
		backgroundColor: '#eee',
		width: '100%',
		padding: 10,
		height: 40,
		borderRadius: 7,
		fontSize: 15,
		
	},
	label: {
		textAlign: 'left',
		fontWeight: 'bold',
		fontSize: 20,
		color: '#000',
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
		marginBottom: 10,
	},
	multilineInput: {
		backgroundColor: '#eee',
		width: '100%',
		padding: 10,
		height: 65,
		borderRadius: 7,
		fontSize: 15,
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
/*const InputField=({label="label"})=>(
	<View style={styles.container}>
		<Text style={styles.label} ref={'label'} >{label}</Text>
		<TextInput style={styles.input} onPress={
			event=>{
				console.log('It\'s all cool')
			}
		}></TextInput>
	</View>
)*/
class InputField extends Component{
	constructor(props){
		super(props)
		this.label=props.label||'Label'
		this.placeholder=props.placeholder||'Enter here'
		this.keyboardType=this.keyboardType||'default'
		this.multiline=props.multiline||false
	}
	/*handleTap=event=>{
		this._label.setNativeProps({style: {
			color: 'red',
		}})
	}*/
	render(){
		return(
		<View style={[styles.container,{padding: 20,borderBottomColor: '#979797',borderBottomWidth: 0.7}]}>
			<Text
			ref={component=>this._label=component}
			style={styles.label} ref={'label'}>
				{this.label}
			</Text>
			<TextInput
			style={this.multiline?styles.multilineInput:styles.input}
			selectionColor={'red'}
			placeholder={this.placeholder}
			keyboardType={this.keyboardType}
			multiline={this.multiline}
			onFocus={
				event=>{
					//this.handleTap()
					console.log('Hello')
			}}></TextInput>
		</View>
		)
	}

}
export default class Enquiry extends Component{
	render(){
		return(
			<ScrollView style={{backgroundColor: '#fff'}}>
				<InputField label={'Full Name'} placeholder={'John Smith'}/>
				<InputField label={'Contact Number'} placeholder={'1234567890'} keyboardType={'number-pad'} />
				<InputField label={'Email'} placeholder={'someone@example.com'} keyboardType={'email'} />
				<InputField label={'Query'} multiline={true}/>
				<InputField label={'Are you considering to buy this?'} placeholder={'Your answer'} />
				<View style={[styles.container,{margin: 10}]}>
					<TouchableOpacity 
					style={[styles.button]}
					onPress={event=>alert('Submitted')}
					>
						<Text style={{color: '#fff',textAlign: 'center', padding: 5}}>Submit</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}
