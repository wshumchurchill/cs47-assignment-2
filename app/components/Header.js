import { View, Text, StyleSheet, Image } from 'react-native';


const Header = ({left, middle, right }) => {

  return (
    <View style={styles.container}>
      <Image
        source={left}
        style={styles.top}
      />
      <Text
        style={{
            fontFamily: 'SydneyBold', fontSize: 30
        }}>
        {middle}
      </Text>
      <Image
        source={right}
        style={styles.top}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    height: 40,
    width: 40,
  },

  
});
