import { StyleSheet, Text, View, Pressable } from 'react-native'
import ResponsesButton from './ResponsesButton'
import React from 'react'
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

const Responses = (props) => {

	let [fontsLoaded] = useFonts({
		LeckerliOne_400Regular,
		Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
	<View style={styles.responsesContainer}>
	  <Text style={styles.myTitle}>Here's Your Answers!</Text>
	  <Text style={styles.myDescription}>Choose an answer, and copy and paste into your messaging app.</Text>
	  <View style={styles.chatBubble}></View>
	  <ResponsesButton />
	  <View style={styles.chatBubble}></View>
	  <ResponsesButton />
	  <View style={styles.chatBubble}></View>
	  <ResponsesButton />

	<Pressable onPress={{}}>
		<View style={styles.newUploadButton}>
			<Text style={styles.newUploadText}>
				New Upload
			</Text>
		</View>
	</Pressable>
	<Pressable onPress={{}}>
		<View style={styles.homeButton}>
			<Text style={styles.homeButtonText}>
				Home 🏠
			</Text>
		</View>
		{/* <View style={styles.homeButton}>New Upload</View> */}
	</Pressable>
	</View>
	
  )
}

export default Responses

const styles = StyleSheet.create ({
	myTitle: {
		color: "#eef5db",
		fontFamily: "Fredoka",
		fontSize: 36,
		marginBottom: 15,
		textAlign: "center",
		marginTop: 20,
	},
	myDescription: {
		color: "#eef5db",
		fontFamily: "Fredoka",
		fontSize: 24,
		textAlign: "center",
		marginBottom: 15,
	},
	chatBubble: {
		height: 90,
		borderTopLeftRadius: 4,
		backgroundColor: "#e9fcfc",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		borderBottomLeftRadius: 50,
		marginBottom: 15,
	},
	newUploadButton: {
		backgroundColor: "#eef5db",
		fontFamily: "Fredoka",
		height: 45,
		marginHorizontal: 10,
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		marginHorizontal: 70,
		marginBottom: 15,

	},
	newUploadText: {
		fontFamily: "Fredoka",
		fontSize: 30,
	},
	homeButton: {
		backgroundColor: "#eef5db",
		fontFamily: "Fredoka",
		height: 45,
		marginHorizontal: 10,
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		marginHorizontal: 70,

	},
	homeButtonText: {
		fontSize: 30,
		fontFamily: "Fredoka",
	},
	responsesContainer: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 50,
		justifyContent: "center",
		backgroundColor: "#4f6367"
	}
})