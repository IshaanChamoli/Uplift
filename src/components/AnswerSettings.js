import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import NextPage from './NextPage';
import OptionButton from './OptionButton';


export default function AnswerSettings() {
    const [fontsLoaded] = useFonts({
        'Fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
        'LeckerLi': require('../../assets/fonts/LeckerliOne-Regular.ttf'),
      });
      return (
    <View>
        <Text style={styles.FrameTitle}>
            Answer Settings</Text> 
        <Text style={styles.Description}>
        Customize the outputted message to match your texting style.
        </Text>
        <OptionButton text="all lowercase"/>
        <OptionButton text="No Punctuation"/>
        <OptionButton text="Add :( for sad" />
        <NextPage pageName = "Welcome"/>

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