/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const blur_radius=Platform.select({
	ios: 7,
	android: 3,
})
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
	  	<Image source={require('./images/Buildings.jpg') } blurRadius={blur_radius} style={styles.bg}/>
		<View style={styles.btnWrap}>
			<Button title={'Buy'}/>
		</View>
		<View style={styles.btnWrap}>
			<Button title={'Sell'}/>
		</View>
      </View>
    );
  }
}

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
