import { Text, View, StyleSheet, Pressable } from 'react-native';
import NextPage from './NextPage';
import OptionButton from './OptionButton';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function AnswerSettings(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
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
        <NextPage pageName="Welcome" pageVisibleList={props.pageVisibleList} setPageVisibleList={props.setPageVisibleList}/>

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
