import { Text, View, StyleSheet, Image } from 'react-native';
import NextPage from './NextPage';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function Welcome(props) {
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
            <Image style={styles.HandHeartImage} source={require('../../assets/Hand_heart.png')} />
            <NextPage pageName="Intermediate" pageVisibleList={props.pageVisibleList}  setPageVisibleList={props.setPageVisibleList}/>
        </View>
    );
}

const styles = StyleSheet.create({
    WelcomeText: {
        fontFamily: "Fredoka",
        fontSize: 40,
        alignSelf: 'center',
        color: '#1b3c42',
    },
    HandHeartImage: {
        alignSelf: 'center',
        margin: 70,
    },
    AppNameText: {
        fontFamily: "LeckerliOne_400Regular",
        fontSize: 100,
        alignSelf: 'center',
        color: '#fe5f55',
        fontWeight: 'bold'
    }
});
