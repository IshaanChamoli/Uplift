import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

selected = false;

export default function IntentButton(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            {selected = props.intentSelected[props.index]}
            {console.log(selected)}
            <Pressable style={[styles.IntentBtnStyle, {backgroundColor: selected ? '#7a9e9f' : '#eef5db'}]} onPress={() => {
                props.setIntentValue(props.text);
                newIntentSelected = [...props.intentSelected];
                for (let i = 0; i < props.intentSelected.length; i++) {
                    newIntentSelected[i] = false;
                }
                newIntentSelected[props.index] = true;
                props.setIntentSelected(newIntentSelected);
            }}>
                <Text style={styles.IntentTextStyle}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    IntentBtnStyle: {
        height: 43,
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    IntentTextStyle: {
        fontFamily: "Fredoka",
        fontSize: 20,
        alignSelf: 'center',
        color:'black',
    }
});
