import { Text, View, StyleSheet } from 'react-native';
import NextPage from './NextPage';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function Intermediate(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <Text style={styles.textBoxStyle}>Sometimes, we need a little help to help others.</Text>
            <Text style={styles.textBoxStyle}>Let's start off with some info about the situation...</Text>
            <Text>{'\n\n\n\n\n\n\n'}</Text>
            <NextPage pageName="Context" pageVisibleList={props.pageVisibleList}  setPageVisibleList={props.setPageVisibleList}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textBoxStyle: {
        fontFamily: "Fredoka",
        alignSelf: 'center',
        color:'#1e3a3f',
        fontSize: 36,
        marginBottom: 30,
        padding: 25,
    }
});
