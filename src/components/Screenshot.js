import { Text, View, StyleSheet, Pressable, TextInput, Keyboard, TouchableWithoutFeedback, Platform , Alert} from 'react-native';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'
// import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import NextPage from './NextPage';0

export default function Screenshot(props) {
    let [fontsLoaded] = useFonts({
        LeckerliOne_400Regular,
        Fredoka: require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
    });

    const [textInputValue, setTextInputValue] = useState('');
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert('Permission to access camera roll is required!');
            return;
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
    
        // Do something with the selected image (e.g., set it to state)
        // For example, you can set it to a state variable:
        // setPickedImage(pickerResult.uri);
    };
    
    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
            <Text>{''}</Text>
            <Text style={styles.WelcomeText}>Enter Conversation</Text>
            <Text style={styles.DescribeText}>Upload a screenshot or enter the text of your conversation in script form. </Text>
            <Text>{'\n'}</Text>
            <Pressable style={styles.UploadBtnStyle} onPress={pickImage}>
                <Text style={styles.UploadTextStyle}>
                    Upload ⬆️
                </Text>
            </Pressable>
            <Text style={styles.DescribeText}>{'\n'}OR</Text>
            {/* <Text>{'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}</Text> */}
            <TextInput
                style={styles.TextInputStyle}
                multiline={true}
                numberOfLines={10}
                value={textInputValue}
                onChangeText={setTextInputValue}
                placeholder="Enter conversation text..."
            />
            <Text>{'\n'}</Text>
            <NextPage pageName="Responses" pageVisibleList={props.pageVisibleList}  setPageVisibleList={props.setPageVisibleList}/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    WelcomeText: {
        fontFamily: "Fredoka",
        fontSize: 40,
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
        fontSize: 20,
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
  