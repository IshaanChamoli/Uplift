import { Text, View, StyleSheet, Pressable } from 'react-native';
import NextPage from './NextPage';
import OptionButton from './OptionButton';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function Intent(props) {
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
            Intent</Text> 
        <Text style={styles.Description}>
        How do you want to help your friend out?
        </Text>
        <OptionButton text="Be a Listening Ear 👂"/>
        <OptionButton text="Provide a Solution ✅"/>
        <OptionButton text="Change their Mind 🧠"/>
        <OptionButton text="Cheer them Up 🧀"/>
        <OptionButton text="Refer them to someone 🧑‍💼"/>
        <OptionButton text="Other 🔹"/>
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
