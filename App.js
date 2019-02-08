/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import { Router,Scene} from 'react-native-router-flux'
import Rootscreen from './screens/Splash'
import Sellscreen from './screens/Sell'
import Purchasescreen from './screens/Purchase'
export default class App extends Component {
	render(){
		return (<Router>
			<Scene
				key={'root'}
				initial
				title={'PrayagInfra'}
			>
				<Scene
					key={'splash'}
					title={'PrayagInfra'}
					component={Rootscreen}
				></Scene>
				<Scene
					key={'sell'}
					title={'Sell'}
					component={Sellscreen}
				></Scene>
				<Scene
					key={'purchase'}
					title={'Purchase'}
					component={Purchasescreen}
				></Scene>
			</Scene>
		</Router>)
	}
}
