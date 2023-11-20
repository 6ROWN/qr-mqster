import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QRCodeGenerator from "../components/QRCodeGenerator";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: "#fff",
				},
				tabBarActiveTintColor: "#ffad57",
				tabBarInactiveTintColor: "#6c6c6c",
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="line-scan"
							size={24}
							color={color}
						/>
					),
					title: "SCAN",
				}}
			/>
			<Tab.Screen
				name="generate"
				component={QRCodeGenerator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="qrcode-scan"
							size={24}
							color={color}
						/>
					),
					title: "GENERATE",
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
