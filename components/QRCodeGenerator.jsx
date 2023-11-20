import React, { useState, useRef } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Text,
	Pressable,
	Share,
	ActivityIndicator,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

const QRCodeGenerator = () => {
	const [inputText, setInputText] = useState("");
	const [qrData, setQRData] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const svgRef = useRef();

	const generateQRCode = () => {
		setIsLoading(true);
		setTimeout(() => {
			setQRData(inputText);
			setIsLoading(false);
		}, 3000);
	};

	const copyQRCode = async () => {
		// if (qrData !== "") {
		// 	try {
		// 		// Get the SVG content
		// 		const svgContent = await svgRef.current.toDataURL();
		// 		// Copy the SVG content to the clipboard
		// 		await Clipboard.setStringAsync(svgContent);
		// 		// You can optionally show a toast or alert to indicate successful copying
		// 		alert("QR Code copied to clipboard!");
		// 	} catch (error) {
		// 		console.error("Error copying QR code:", error.message);
		// 	}
		// }
	};

	const shareQRCode = async () => {
		if (qrData !== "") {
			try {
				// Convert the QR code SVG content to a data URL
				const base64QRCode = await svgRef.current.toDataURL();

				// Share the QR code image URI
				Share.share({
					title: "QR",
					message: "Here is my QR code!",
					url: base64QRCode,
				});
			} catch (error) {
				console.error("Error sharing QR code:", error.message);
			}
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>QR Code Generator</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter text here to generate qr code"
				onChangeText={(text) => setInputText(text)}
				value={inputText}
			/>
			{!isLoading && (
				<Pressable
					disabled={!inputText || inputText === ""}
					onPress={generateQRCode}
					style={({ pressed }) => [
						styles.btn,
						{
							opacity:
								inputText.length === 0
									? 0.5
									: pressed
									? 0.8
									: 1,
						},
					]}
				>
					<Text style={styles.btnText}>Generate</Text>
				</Pressable>
			)}

			{isLoading ? (
				<ActivityIndicator size="large" color=" #cbf6e2" />
			) : (
				qrData !== "" && (
					<View>
						<QRCode
							value={qrData}
							size={200}
							color="black"
							backgroundColor="white"
							style={styles.qrCode}
							getRef={(ref) => (svgRef.current = ref)}
						/>
						<View
							style={{
								marginVertical: 30,
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Pressable
								onPress={copyQRCode}
								style={({ pressed }) => [
									{
										backgroundColor: pressed
											? "#286d4c"
											: "#cbf6e2",
										padding: 10,
										borderRadius: 10,
									},
								]}
							>
								<Ionicons
									name="md-copy"
									size={30}
									color="#286d4c"
								/>
							</Pressable>
							<Pressable
								onPress={shareQRCode}
								style={({ pressed }) => [
									{
										backgroundColor: pressed
											? "#286d4c"
											: "#cbf6e2",
										padding: 10,
										borderRadius: 10,
									},
								]}
							>
								<Entypo
									name="share"
									size={30}
									color="#286d4c"
								/>
							</Pressable>
						</View>
					</View>
				)
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#286d4c",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",

		color: "#cbf6e2",
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		marginVertical: 40,
		paddingHorizontal: 20,
		width: "90%",
		backgroundColor: "#fff",
		borderRadius: 8,
		height: 60,
	},
	qrCode: {
		marginTop: 24,
	},
	btn: {
		padding: 15,
		backgroundColor: "#4cd080",
		borderRadius: 10,
		marginBottom: 40,
		width: "50%",
		alignItems: "center",
	},
	btnText: {
		color: "#fefefe",
		fontSize: 20,
		fontWeight: "500",
	},
});

export default QRCodeGenerator;
