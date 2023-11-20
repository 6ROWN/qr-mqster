import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Modal,
	Pressable,
	Linking,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Clipboard from "expo-clipboard";

const QRScanner = () => {
	const [hasPermission, setHasPermission] = useState(false);
	const [scanData, setScanData] = useState(null);
	const [isModalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanData(data);
		setModalVisible(true);
		console.log(`Data: ${data}`);
		console.log(`Type: ${type}`);
	};

	const handleModalButtonPress = () => {
		setScanData(null);
		setModalVisible(false);
	};

	const handleTextLongPress = async () => {
		if (scanData) {
			await Clipboard.setStringAsync(scanData);
			alert("Text copied to clipboard!");
		}
	};

	const handlePress = async () => {
		if (scanData && scanData.startsWith("http")) {
			// If the scanned data is a URL, open it in the default browser
			await Linking.openURL(scanData);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>QRScanner</Text>
			<BarCodeScanner
				style={StyleSheet.absoluteFillObject}
				onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
				barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
			/>
			{scanData && (
				<Modal
					animationType="slide"
					visible={isModalVisible}
					onRequestClose={() => setModalVisible(false)}
				>
					<View style={styles.modalContainer}>
						<Pressable
							onPress={handlePress}
							onLongPress={handleTextLongPress}
						>
							<Text style={styles.modalText}>{scanData}</Text>
						</Pressable>

						<Button
							title="Close"
							onPress={handleModalButtonPress}
							color="#"
						/>
					</View>
				</Modal>
			)}
			{!scanData && (
				<Text style={styles.scanText}>
					Move the camera to a QR code
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#047857",
	},
	modalText: {
		fontSize: 18,
		marginBottom: 20,
		textAlign: "center",
		color: "#d9d9d9",
	},
	permissionText: {
		fontSize: 16,
		textAlign: "center",
	},
	scanText: {
		fontSize: 24,
		fontWeight: "600",
		color: "white",
	},
});

export default QRScanner;
