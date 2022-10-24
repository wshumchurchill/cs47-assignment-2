import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {Icons} from "../../assets/Themes"
import { Themes } from '../../assets/Themes';


const Body = ({ top_image, bottom_string, name, distance}) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={top_image} style={styles.profilePic} imageStyle={styles.photo}>
        <View style={styles.left_side}>
            <Text style={{fontFamily: 'Sydney', fontSize: 20, color: 'white'}}>{name}</Text>
            <Text style={{fontFamily: 'Sydney', fontSize: 10, color: 'white'}}>{distance}</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottom}>
        <Text style = {{fontFamily: 'Sydney', fontSize: 25, color: 'black', marginBottom: 10, marginTop: 10}}>{bottom_string}</Text>
        <View style={styles.audio}>
            <Image 
            source={Icons.player.light}
            style={styles.bottomicon}/>
            <Image
            source={Icons.audioWave.light}
            style={styles.audiowave}/>
        </View>
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: '80%',
    flexDirection: 'column',
    margin: 8,
    flex: 2
  },
  left_side: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    aspectRatio: 1/1.1,
    padding: 10

  },
  profilePic: {
    borderRadius: 5,
    aspectRatio: 1/1.1,
    width: '100%',
    marginBottom: 16,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset
  },
  photo: {
    borderRadius: 10
  },
  bottom: {
    backgroundColor: Themes.light.bgSecondary,
    flexDirection: 'column',
    padding: 10,
    borderRadius: 10,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset
  },
  audio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  bottomicon: {
    resizeMode: 'contain',
    width: '20%',
    marginRight: 5,
    aspectRatio: 1,
  },
  audiowave: {
    resizeMode: 'contain',
    width: '80%',    
    aspectRatio: 4
  }

  
});
