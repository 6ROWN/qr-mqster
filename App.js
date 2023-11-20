import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboard from "./screens/Onboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import BottomTabs from "./navigators/BottomTabs";
import QRCodeGenerator from "./components/QRCodeGenerator";
import QRScanner from "./screens/QRScanner";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="onboard" component={Onboard} />
				<Stack.Screen name="home" component={BottomTabs} />
				{/* <Stack.Screen name="generateQR" component={QRCodeGenerator} /> */}
				<Stack.Screen
					name="scan"
					component={QRScanner}
					options={{
						headerShown: true,
						headerStyle: { backgroundColor: "#047857" },
						headerTintColor: "#fefefe",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
