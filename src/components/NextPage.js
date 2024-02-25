import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedbackComponent } from 'react-native';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function NextPage(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    function nextPage(pageName) {
        console.log(props.pageVisibleList);
        pageNamesList = Object.keys(props.pageVisibleList);
        newVisibleList = {...props.setPageVisibleList};
        console.log("Keys: " + pageNamesList);
        console.log(pageName);
        for (let i = 0; i < pageNamesList.length; i++) {
            newVisibleList[pageNamesList[i]] = false;
            console.log(pageNamesList[i]);
        }
        newVisibleList[pageName] = true;
        props.setPageVisibleList(newVisibleList);
        console.log(newVisibleList);
    }


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