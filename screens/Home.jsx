import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={{ width: "90%", marginTop: 20 }}>
				<View style={styles.overlay}>
					<Text style={styles.leadText}>Scan QR Code</Text>
					<Text style={styles.subText}>Start scanning now!</Text>
				</View>
			</View>

			<Image
				source={require("../assets/qrCode.png")}
				resizeMode="center"
				style={styles.img}
			/>

			<Pressable
				style={styles.btn}
				onPress={() => navigation.navigate("scan")}
			>
				<Text style={styles.btnText}>Scan now</Text>
			</Pressable>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#286d4c",
	},

	overlay: {
		width: "100%",
		backgroundColor: "green",
		borderRadius: 15,
		backgroundColor: "#cbf6e2",
		padding: 20,
		alignItems: "center",
	},
	leadText: {
		fontSize: 20,
		marginBottom: 10,
		fontWeight: "bold",
		color: "#0e5232",
	},
	subText: {
		fontSize: 18,
		color: "#555",
	},
	img: {
		width: "50%",
		height: "40%",
		margin: 30,
		borderColor: "#cbf6e2",
		borderWidth: 4,
	},
	btn: {
		backgroundColor: "#4cd080",
		width: "60%",
		margin: 20,
		padding: 20,
		borderRadius: 15,
		alignItems: "center",
	},
	btnText: {
		fontSize: 18,
		fontWeight: "600",
		color: "#fff",
	},
});
