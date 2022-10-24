import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';
import Header from './app/components/Header';
import Body from './app/components/Body';
import Footer from './app/components/Footer';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  // const header = ({left, middle, right })
  // const body = ({ top_image, bottom_string, name, distance})
  // const footer = ({left_icon, middle_icon, right_icon })

  return (
    <SafeAreaView style={styles.container}>
      <Header
        left = {Icons.menu.light}
        middle = {'ensom'}
        right = {Icons.sun}
      />
      <Body
        top_image = {Profiles.mtl.image}
        bottom_string = {'My hottest take'}
        name = {'MTL'}
        distance = {'2 miles away'}
      />
      <Footer/>
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'space-between'
    
  },
});
