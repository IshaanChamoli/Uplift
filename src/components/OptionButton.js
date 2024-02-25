import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';


export default function NextPage(props) {
    const [fontsLoaded] = useFonts({
        'Fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });

    return (
        <View>
            <Pressable style={styles.OptionBtnStyle} onPress={() => { nextPage(props.pageName); }}>
                <Text style={styles.OptionTextStyle}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    OptionBtnStyle: {
        height: 43,
        backgroundColor: '#eef5db',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    OptionTextStyle: {
        fontFamily: "Fredoka",
        fontSize: 20,
        alignSelf: 'center',
        color:'black',
    }
});