import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import NextPage from './NextPage';

export default function Welcome() {
    const [fontsLoaded] = useFonts({
        'Fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
        'LeckerLi': require('../../assets/fonts/LeckerliOne-Regular.ttf'),
      });
    
    return (
        <View>
            <Text style={styles.WelcomeText}>Welcome to</Text>
            <Text style={styles.AppNameText}>Uplift</Text>
            <Text>{'\n\n\n\n\n\n\n'}</Text>
            <NextPage pageName="intermediate"/>
        </View>
    );
}

const styles = StyleSheet.create({
    WelcomeText: {
        fontFamily: "Fredoka",
        fontSize: 30,
        alignSelf: 'center',
        color:'#1b3c42',
    },
    AppNameText: {
        fontFamily: "LeckerLi",
        fontSize: 80,
        alignSelf: 'center',
        color:'#fe5f55',
        fontWeight:'bold'
    }
  });
  