import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const Onboard = ({ navigation }) => {
	return (
		<LinearGradient
			colors={["#4cd080", "#105d38"]}
			style={[styles.container]}
		>
			<View style={[styles.mainContent]}>
				<MaterialIcons name="qr-code-scanner" style={styles.icon} />

				<Text style={styles.title}>QR MASTER</Text>
				<Text style={styles.description}>
					Scan and Decode QR Codes Instantly
				</Text>
			</View>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Pressable
					onPress={() => navigation.navigate("home")}
					style={[styles.continueButton]}
				>
					<Text style={[styles.continueButtonText]}>Continue</Text>
				</Pressable>
			</View>
		</LinearGradient>
	);
};

export default Onboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	mainContent: {
		flex: 0.9,
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		fontSize: 70,
		color: "white",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		marginVertical: 30,
		color: "white",
	},
	description: {
		color: "white",
		fontSize: 18,
		fontWeight: "500",
	},
	continueButton: {
		width: "90%",
		backgroundColor: "white",
		alignItems: "center",
		padding: 20,
		borderRadius: 12,
	},
	continueButtonText: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
