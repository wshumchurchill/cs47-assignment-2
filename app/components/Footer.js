import { View, Text, StyleSheet, Image } from 'react-native';
import {Icons} from "../../assets/Themes"

const Footer = () => {

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Image
            source={Icons.discover.light}
            style={styles.icon}
        />
        <Text style={{fontFamily: 'Sydney', fontsize: 15, color: 'white'}}>{'Discover'}</Text>
      </View>
      <View style={styles.bottom}>
        <Image
            source={Icons.heart.light}
            style={styles.icon}
        />
        <Text style={{fontFamily: 'Sydney', fontsize: 15, color: 'white'}}>{'Matches'}</Text>
      </View>
      <View style={styles.bottom}>
        <Image
            source={Icons.messages.light}
            style={styles.icon}
        />
        <Text style={{fontFamily: 'Sydney', fontsize: 15, color: 'white'}}>{'DMs'}</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    
  },
  icon: {
    height: 40,
    width: 40,
  },
  bottom: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,

  }

  
});
