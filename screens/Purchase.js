import React,{Component} from 'react'
import {Actions} from 'react-native-router-flux'
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
const styles=StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	topContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		textAlign: 'center',
		borderWidth: 0.5,
		borderColor: '#d6d7da',
		width: '100%',
	},
	topTabHighlighted: {
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		textAlign: 'center',
		width: '33.33%',
		padding: 10,
		backgroundColor: '#eee',
	},
	topTabValue: {
		fontSize: 12,
		fontWeight: 'normal',
		alignSelf: 'stretch',
		textAlign: 'center',
	},
	scrollContainer: {
		width: '100%',
	},
	resultCard: {
		flex: 1,
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'flex-start',
		padding: 10,
		marginBottom: 5,
		borderBottomColor: '#999',
		borderBottomWidth: 0.5,
	},
	resultImageContainer: {
		alignSelf: 'flex-start',
		textAlign: 'left',
		margin: 0,
		padding: 0,
	},
	resultImage: {
		height: 100,
		width: 100,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	leftInfo: {
		alignSelf: 'flex-end',
		textAlign: 'left',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'flex-end',
		paddingLeft: 10,
	},
	leftInfoTitle: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	resultPrice: {
		color: 'red',
		fontWeight: 'bold',
		fontSize: 14,
	},
	resultLocality: {
		color: '#979797',
		fontSize: 12,
	},
	resultPerks: {
		fontWeight: 'bold',
	},
	resultText: {
		fontSize: 12,
		marginTop: 5,
		marginBottom: 7,
	},
	resultButtonContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		textAlign: 'center',
		width: '100%',
		marginTop: 5,
		marginBottom: 5,
	},
	resultButton: {
		borderColor: 'red',
		borderWidth: 1,
		borderRadius: 4,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		textAlign: 'center',
		width: '48%',
	},
})
const TopTab=({name='highlighted',value=0})=>(
	<Text style={styles.topTabHighlighted}>
		{name+' ·'}
		<Text style={styles.topTabValue}>
			{' '+value}
		</Text>
	</Text>
)
const TopContainer=props=>(
	<View style={styles.topContainer}>
		<TopTab name={'SALE'} value={9083} />
		<TopTab name={'RENT'} value={3590} />
		<TopTab name={'PG'} value={44} />
	</View>
)
const default_image=require('../images/Default.png')
const ResultCard=({
	img=default_image,
	title='Title',
	price=0,
	locality='__',
	perks='__',
	text='__',
	units='Lac'})=>(
	<View style={styles.resultCard}>
		<View style={styles.resultImageContainer}>
			<Image source={img}  style={styles.resultImage}/>
		</View>
		<View style={styles.leftInfo}>
			<Text style={styles.leftInfoTitle}>
				{title}
			</Text>
			<Text style={styles.resultPrice}>
				{`₹ ${price} ${units}`}
			</Text>
			<Text style={styles.resultLocality}>
				{locality}
			</Text>
			<Text style={styles.resultPerks}>
				{perks}
			</Text>
		</View>
		<View >
			<Text style={styles.resultText}>
				{text}
			</Text>
		</View>
		<View style={styles.resultButtonContainer}>
			<TouchableOpacity 
				style={[styles.resultButton,{marginRight: 2}]}>
			
				<Text style={{color: 'red',textAlign: 'center'}}>
					Get phone
				</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={[styles.resultButton,{backgroundColor: 'red'}]
				}
				onPress={event=>Actions.enquiry()}
			>
				<Text style={{color: '#fff', textAlign: 'center'}}>
					Send enquiry
				</Text>
			</TouchableOpacity>

		</View>
	</View>
)
export default class Purchasescreen extends Component{
	render(){
		return (
			<View style={styles.container}>
				<TopContainer />
				<ScrollView style={styles.scrollContainer} >
					<ResultCard 
						title={'3 BHK flat/appartment 130sq. yards'}
						img={require('../images/Building_1.jpg')}
						price={70} locality={'Chattarpur'}
						perks={'3 Baths, Semi-Furnished, East Facing, 1 Balcony, 130sq. Yards'}
						text={'3 BHK flat for sale in Chattarpur Farms, New Delhi, build up Area is 130sq. yards, resale property, 3 bedrooms, 1 balcony, semi-furnished, 2nd floor, East facing'}
					/>
					<ResultCard 
						title={'2 BHK flat/appartment 110sq. yards'}
						img={require('../images/Building_2.jpg')}
						price={60} locality={'Chattarpur'}
						perks={'2 Baths, Semi-Furnished, East Facing, 1 Balcony, 110sq. Yards'}
						text={'2 BHK flat for sale in Chattarpur Farms, New Delhi, build up Area is 110sq. yards, resale property, 2 bedrooms, 1 balcony, semi-furnished, 3rd floor, East facing '}
					/>
					<ResultCard 
						title={'2 BHK flat/appartment 100sq. yards'}
						img={require('../images/Building_3.jpg')}
						price={60} locality={'Shiv Nagar'}
						perks={'2 Baths, Semi-Furnished, East Facing, 1 Balcony, 100sq. Yards'}
						text={'A 2 bedroom resale flat in Shiv Nagar, Janakpuri, New Delhi build up Area is 100sq. yards, resale property, 2 bedrooms, 1 balcony, semi-furnished, 3rd floor, East facing '}
					/>
					<ResultCard 
						title={'3 BHK flat/appartment 130sq. yards'}
						img={require('../images/Building_4.jpg')}
						price={70} locality={'Chattarpur'}
						perks={'3 Baths, Semi-Furnished, East Facing, 1 Balcony, 130sq. Yards'}
						text={'3 BHK flat for sale in Chattarpur Farms, New Delhi, build up Area is 130sq. yards, resale property, 3 bedrooms, 1 balcony, semi-furnished, 2nd floor, East facing'}
					/>
					<ResultCard 
						title={'3 BHK flat/appartment 130sq. yards'}
						img={require('../images/Building_1.jpg')}
						price={70} locality={'Chattarpur'}
						perks={'3 Baths, Semi-Furnished, East Facing, 1 Balcony, 130sq. Yards'}
						text={'3 BHK flat for sale in Chattarpur Farms, New Delhi, build up Area is 130sq. yards, resale property, 3 bedrooms, 1 balcony, semi-furnished, 2nd floor, East facing'}
					/>
				</ScrollView>
			</View>
		)
	}
}
