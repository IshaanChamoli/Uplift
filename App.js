import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/components/Welcome';
import { useEffect, useState } from 'react';
import { useFonts, LeckerliOne_400Regular } from '@expo-google-fonts/leckerli-one'
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'

export default function App() {
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular,
    Fredoka: require('./assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
  });

  const [activePage, setActivePage] = useState("Welcome.js")

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={styles.container}>
      <Welcome changePage={setActivePage}/>
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
