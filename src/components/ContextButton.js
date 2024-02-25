import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

selected = false;

export default function ContextButton(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            {selected = props.constSelected[props.index]}
            {console.log(selected)}
            <Pressable style={[styles.ContextBtnStyle, {backgroundColor: selected ? '#7a9e9f' : '#eef5db'}]} onPress={() => {
                props.setContextValue(props.text);
                newConstSelected = [...props.constSelected];
                for (let i = 0; i < props.constSelected.length; i++) {
                    newConstSelected[i] = false;
                }
                newConstSelected[props.index] = true;
                props.setConstSelected(newConstSelected);
            }}>
                <Text style={styles.ContextTextStyle}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ContextBtnStyle: {
        height: 43,
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    ContextTextStyle: {
        fontFamily: "Fredoka",
        fontSize: 20,
        alignSelf: 'center',
        color:'black',
    }
});
