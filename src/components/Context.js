import { Text, View, StyleSheet, Pressable } from 'react-native';
import NextPage from './NextPage';
import ContextButton from './ContextButton';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'
import { useState } from 'react';

export default function Context(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    const [constSelected, setConstSelected] = useState([false,false,false,false,false]);

    if (!fontsLoaded) {
        return null;
    }
      return (
    <View>
        <Text style={styles.FrameTitle}>
            Context</Text> 
        <Text style={styles.Description}>
        What are you helping your friend out with today?
        </Text>
        <ContextButton text="Feeling sad 😢" constSelected={constSelected} setConstSelected={setConstSelected} index={0} setContextValue={props.setContextValue}/>
        <ContextButton text="Friend/Family/🩷 Drama" constSelected={constSelected} setConstSelected={setConstSelected} index={1} setContextValue={props.setContextValue}/>
        <ContextButton text="Grief/Loss 😔" constSelected={constSelected} setConstSelected={setConstSelected} index={2} setContextValue={props.setContextValue}/>
        <ContextButton text="Breakup 💔" constSelected={constSelected} setConstSelected={setConstSelected} index={3} setContextValue={props.setContextValue}/>
        <ContextButton text="Other 🔹" constSelected={constSelected} setConstSelected={setConstSelected} index={4} setContextValue={props.setContextValue}/>
        <NextPage pageName="AdditionalInfo" pageVisibleList={props.pageVisibleList} setPageVisibleList={props.setPageVisibleList}/>

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
