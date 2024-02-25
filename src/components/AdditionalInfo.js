import { Text, View, StyleSheet, Pressable, TextInput, Keyboard, TouchableWithoutFeedback, Platform , Alert} from 'react-native';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import React, { useState } from 'react';
import NextPage from './NextPage';0
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'


export default function Welcome() {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });


    if (!fontsLoaded) {
        return null;
    }
    const [textInputValue, setTextInputValue] = useState('');
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };
    
    
    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
            <Text>{''}</Text>
            <Text style={styles.WelcomeText}>Additional Information</Text>
            <Text style={styles.DescribeText}>Give us some extra details so we can personalize your answer {'\n'}(especially if you selected 'other' on the previous page)</Text>
            <Text>{'\n'}</Text>
    
            <TextInput
                style={styles.TextInputStyle}
                multiline={true}
                numberOfLines={10}
                value={textInputValue}
                onChangeText={setTextInputValue}
                placeholder="Enter additional information..."
            />
            <Text>{'\n'}</Text>
            <Pressable style={styles.NextPageBtnStyle} onPress={() => { nextPage(props.pageName); }}>
                <Text style={styles.NextPageTextStyle}>
                    Next
                </Text>
            </Pressable>
            
            {/* <NextPage pageName="intermediate"/> */}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    WelcomeText: {
        fontFamily: "Fredoka",
        fontSize: 35,
        alignSelf: 'center',
        color:'#1b3c42',
        marginTop: -199,
        paddingTop: 180,
    },
    AppNameText: {
        fontFamily: "LeckerLi",
        fontSize: 80,
        alignSelf: 'center',
        color:'#fe5f55',
        fontWeight:'bold'
    },
    DescribeText: {
        fontFamily: "Fredoka",
        fontSize: 15,
        alignSelf: 'center',
        color:'#1b3c42',
        textAlign: 'center'
    },
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
    },
    UploadBtnStyle: {
        backgroundColor: '#eef5db',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    UploadTextStyle: {
        fontFamily: "Fredoka",
        fontSize: 20,
        alignSelf: 'center',
        color:'#1b3c42',
    },
    TextInputStyle: {
        backgroundColor: '#f0f0f0',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        height: 200, // Adjust as needed
    },
    container: {
        flex: 1,
    }
  });
  