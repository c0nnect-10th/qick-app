import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import QickLogo from '../assets/Icon/QickLogo.png';

export default function StudentHeader() {
  return (
    <View style={styles.title}>
      <Image source={QickLogo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 70,
  },
  logo: {
    width: 125,
    height: 50,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textBlack,
  },
});
