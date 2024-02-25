import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

const ResponsesButton = () => {


	let [fontsLoaded] = useFonts({
		LeckerliOne_400Regular,
		Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}

  return (
	<Pressable onPress={{}}>
		<View style={styles.responesButton}>
			<Text style={styles.buttonTitle}>Copy 📄</Text>
		</View>
	</Pressable>
  )
}

export default ResponsesButton

const styles = StyleSheet.create({
	buttonTitle: {
		color: "black",
		fontFamily: "Fredoka",
		fontSize: 24,
		textAlign: "center",
	},
	responesButton: {
		height: 43,
		backgroundColor: "#eef5db",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 15,
	},

})