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
            Context</Text> 
        <Text style={styles.Description}>
        What are you helping your friend out with today?
        </Text>
        <OptionButton text="Feeling sad 😢"/>
        <OptionButton text="Friend/Family/🩷 Drama"/>
        <OptionButton text="Grief/Loss 😔"/>
        <OptionButton text="Breakup 💔"/>
        <OptionButton text="Other 🔹"/>
        <NextPage pageName = "additional info"/>

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