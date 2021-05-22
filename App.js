import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SampleForm} from 'components';
import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContactScreen, HomeScreen} from 'screens';
import styled from 'styled-components';

const Container = styled.View`
	display: flex;
	justify-content: center;
	flex: 1;
	background-color: orange;
`;

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

//
const DrawerContent = props => {
	return (
		<View styke={{flex: 1}}>
			<Text>Hello data</Text>
			<Text>Hello 123</Text>
			{/* <DrawerContentScrollView {...props}>
			</DrawerContentScrollView> */}
			{/* <Drawer.Section>
				<DrawerItem label="hello" />
			</Drawer.Section> */}
		</View>
	);
};

const MainTabScreen = () => (
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
				return <Ionicons name={iconName} size={size} color={color} />;
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
		<Tab.Screen name="Contact" component={ContactScreen} />
		<Tab.Screen name="Form" component={SampleForm} />
	</Tab.Navigator>
);

export default function App() {
	const [hidden, setHidden] = useState(false);
	const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
	const [statusBarTransition, setStatusBarTransition] = useState(
		TRANSITIONS[0],
	);

	return (
		<NavigationContainer
			style={{margin: 0, padding: 0, flex: 1, backgroundColor: 'pink'}}>
			<Container
				style={
					{
						// marginTop: StatusBar.currentHeight || 0,
					}
				}>
				<StatusBar
					animated={true}
					backgroundColor="#61dafb"
					barStyle={statusBarStyle}
					showHideTransition={statusBarTransition}
					hidden={hidden}
				/>

				<Drawer.Navigator
					drawerContent={props => <DrawerContent {...props} />}>
					<Drawer.Screen
						name="HomeDrawer"
						component={MainTabScreen}
					/>
					<Drawer.Screen name="Form" component={SampleForm} />
				</Drawer.Navigator>
			</Container>
		</NavigationContainer>
	);
}
