import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';


export default function NextPage(props) {
    const [fontsLoaded] = useFonts({
        'Fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });

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
        color:'#1b3c42',
    }
});