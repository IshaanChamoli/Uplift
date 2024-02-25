import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/components/Welcome';
import Intermediate from './src/components/Intermediate';
import Context from './src/components/Context';
import AdditionalInfo from './src/components/AdditionalInfo';
import Intent from './src/components/Intent';
import Screenshot from './src/components/Screenshot';
import Responses from './src/components/Responses';
import AnswerSettings from './src/components/AnswerSettings';
import { useEffect, useState } from 'react';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function App() {
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
    Fredoka: require('./assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
  });

  const [pageVisibleList, setPageVisibleList] = useState({"Welcome": true, "Intermediate": false, "Context": false, "AdditionalInfo": false, "Intent": false, "Screenshot": false, "Responses": false, "AnswerSettings": false});
  const [additionalInfoInput, setAdditionalInfoInput] = useState('');
  const [screenshotValue, setScreenshotValue] = useState('');
  const [contextValue, setContextValue] = useState('');
  const [intentValue, setIntentValue] = useState('');


// ["Welcome", "Intermediate", "Context", "AdditionalInfo", "Intent", "Screenshot", "Responses", "AnswerSettings"]
  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      { console.log("Rerendering: " + screenshotValue)}
      {pageVisibleList["Welcome"] && <Welcome pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["Intermediate"] && <Intermediate pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["Context"] && <Context contextValue = {contextValue} setContextValue = {setContextValue} pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["AdditionalInfo"] && <AdditionalInfo additionalInfoInput={additionalInfoInput} setAdditionalInfoInput={setAdditionalInfoInput} pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["Intent"] && <Intent intentValue = {intentValue} setIntentValue = {setIntentValue} pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["Screenshot"] && <Screenshot screenshotValue = {screenshotValue} setScreenshotValue = {setScreenshotValue} pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["Responses"] && <Responses pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}
      {pageVisibleList["AnswerSettings"] && <AnswerSettings pageVisibleList={pageVisibleList} setPageVisibleList={setPageVisibleList}/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8d8d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
