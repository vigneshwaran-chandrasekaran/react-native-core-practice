import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import {SampleForm} from './src/components';
import {HomeScreen} from './src/screens';

const Container = styled.View`
	display: flex;
	justify-content: center;
	flex: 1;
	padding: 20px;
`;

// function NotificationsScreen({navigation}) {
// 	return (
// 		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// 			<Button
// 				onPress={() => navigation.navigate('Home')}
// 				title="Go to Home"
// 			/>
// 			<Button onPress={() => navigation.goBack()} title="Go back home" />
// 		</View>
// 	);
// }

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Container style={{marginTop: StatusBar.currentHeight || 0}}>
				<Tab.Navigator
					screenOptions={({route}) => ({
						tabBarIcon: ({focused, color, size}) => {
							let iconName;

							if (route.name === 'Home') {
								iconName = focused
									? 'ios-information-circle'
									: 'ios-information-circle-outline';
							} else if (route.name === 'Form') {
								iconName = focused
									? 'ios-information-circle-outline'
									: 'ios-list';
							}

							// You can return any component that you like here!
							return (
								<Ionicons
									name={iconName}
									size={size}
									color={color}
								/>
							);
						},
					})}
					tabBarOptions={{
						activeTintColor: 'tomato',
						inactiveTintColor: 'gray',
					}}
					initialRouteName="Home"
					tabBarOptions={{
						activeTintColor: '#e91e63',
					}}>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Form" component={SampleForm} />
				</Tab.Navigator>
				{/* <Drawer.Navigator initialRouteName="Notifications">
					<Drawer.Screen
						name="Notifications"
						component={NotificationsScreen}
					/>

					<Drawer.Screen name="Home" component={HomeScreen} />
					<Drawer.Screen name="Form" component={SampleForm} />
				</Drawer.Navigator> */}
			</Container>
		</NavigationContainer>
	);
}
