import { Text, View, StyleSheet, Pressable } from 'react-native';
import NextPage from './NextPage';
import IntentButton from './IntentButton';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'
import { useState} from 'react';

export default function Intent(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    const [intentSelected, setIntentSelected] = useState([false,false,false,false,false,false]);

    if (!fontsLoaded) {
        return null;
    }
      return (
    <View>
        <Text style={styles.FrameTitle}>
            Intent</Text> 
        <Text style={styles.Description}>
        How do you want to help your friend out?
        </Text>
        <IntentButton text="Be a Listening Ear 👂" intentSelected ={intentSelected} index = {0} setIntentValue = {props.setIntentValue} setIntentSelected = {setIntentSelected}/>
        <IntentButton text="Provide a Solution ✅"intentSelected ={intentSelected} index = {1} setIntentValue  = {props.setIntentValue }setIntentSelected = {setIntentSelected}/>
        <IntentButton text="Change their Mind 🧠"intentSelected ={intentSelected} index = {2} setIntentValue  = {props.setIntentValue }setIntentSelected = {setIntentSelected}/>
        <IntentButton text="Cheer them Up 🧀"intentSelected ={intentSelected} index = {3} setIntentValue  = {props.setIntentValue }setIntentSelected = {setIntentSelected}/>
        <IntentButton text="Refer them to someone 🧑‍💼"intentSelected ={intentSelected} index = {4} setIntentValue  = {props.setIntentValue }setIntentSelected = {setIntentSelected}/>
        <IntentButton text="Other 🔹"intentSelected ={intentSelected} index = {5} setIntentValue  = {props.setIntentValue }setIntentSelected = {setIntentSelected}/>
        <NextPage pageName="Screenshot" pageVisibleList={props.pageVisibleList}  setPageVisibleList={props.setPageVisibleList}/>

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
