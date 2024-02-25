import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function NextPage(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });


    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Pressable style={styles.NextPageBtnStyle} onPress={() => { nextPage(props.pageName); }}>
                <Text style={styles.NextPageTextStyle}>
                    Next Page
                </Text>
            </Pressable>
        </View>
    )
}

function nextPage(pageName) {
    setActivePage(pageName);
    pageNamesList = ["Welcome", "Intermediate", "Context", "AdditionalInfo", "Intent", "Screenshot", "Responses", "AnswerSettings"]
}

const styles = StyleSheet.create({
    NextPageBtnStyle: {
        backgroundColor: '#eef5db',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    NextPageTextStyle: {
        fontFamily: "Fredoka",
        fontSize: 30,
        alignSelf: 'center',
        color: '#1b3c42',
        fontWeight: '100'
    }
});