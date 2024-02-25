import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import NextPage from './NextPage';

export default function Intermediate() {
    const [fontsLoaded] = useFonts({
        'Fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
        'LeckerLi': require('../../assets/fonts/LeckerliOne-Regular.ttf'),
      });
    
    return (
        <View>
            <Text style={styles.textBoxStyle}>Sometimes, we need a little help to help others.</Text>
            <Text style={styles.textBoxStyle}>Let's start off with some info about the situation...</Text>
            <Text>{'\n\n\n\n\n\n\n'}</Text>
            <NextPage pageName="context"/>
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
