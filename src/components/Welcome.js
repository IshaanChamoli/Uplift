import { Text, View, StyleSheet } from 'react-native';
import NextPage from './NextPage';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function Welcome() {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Text style={styles.WelcomeText}>Welcome to</Text>
            <Text style={styles.AppNameText}>Uplift</Text>
            <Text>{'\n\n\n\n\n\n\n'}</Text>
            <NextPage pageName="intermediate" />
        </View>
    );
}

const styles = StyleSheet.create({
    WelcomeText: {
        fontFamily: "Fredoka",
        fontSize: 30,
        alignSelf: 'center',
        color: '#1b3c42',
    },
    AppNameText: {
        fontFamily: "LeckerliOne_400Regular",
        fontSize: 80,
        alignSelf: 'center',
        color: '#fe5f55',
        fontWeight: 'bold'
    }
});
