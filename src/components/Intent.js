import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import NextPage from './NextPage';
import OptionButton from './OptionButton';


export default function Context() {
    const [fontsLoaded] = useFonts({
        'Fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
        'LeckerLi': require('../../assets/fonts/LeckerliOne-Regular.ttf'),
      });
      return (
    <View>
        <Text style={styles.FrameTitle}>
            Intent</Text> 
        <Text style={styles.Description}>
        How do you want to help your friend out?
        </Text>
        <OptionButton text="Be a Listening Ear 👂"/>
        <OptionButton text="Provide a Solution ✅"/>
        <OptionButton text="Change their Mind 🧠"/>
        <OptionButton text="Cheer them Up 🧀"/>
        <OptionButton text="Refer them to someone 🧑‍💼"/>
        <OptionButton text="Other 🔹"/>
        <NextPage pageName = "Enter Screenshot"/>

    </View>
      );
}
const styles = StyleSheet.create({
    FrameTitle: {
        fontFamily: "Fredoka",
        fontSize: 36,
        alignSelf: 'center',
        color:'#1b3c42',
        marginBottom: 45,
    },
    Description: {
        fontFamily: "Fredoka",
        fontSize: 24,
        alignSelf: 'center',
        color:'#1e3a3f',
        marginBottom: 25,
    },
    

});