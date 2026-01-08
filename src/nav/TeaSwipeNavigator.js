import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TeacherHeader from '../components/TeacherHeader';
import { colors } from '../constants/colors';
import TeaHome from '../pages/teacher/TeaHome';
import TeaNotification from '../pages/teacher/TeaNotification';
import TeaProfile from '../pages/teacher/TeaProfile';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, navigation }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity 
        style={styles.navButt} 
        onPress={() => navigation.navigate('TeaHome')}
      >
        <Text style={[styles.navButtText, state.index === 0 && styles.now]}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navButt}
        onPress={() => navigation.navigate('TeaNotification')}
      >
        <Text style={[styles.navButtText, state.index === 1 && styles.now]}>알림</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navButt}
        onPress={() => navigation.navigate('TeaProfile')}
      >
        <Text style={[styles.navButtText, state.index === 2 && styles.now]}>프로필</Text>
      </TouchableOpacity>
    </View>
  );
}

function TeaSwipeNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <TeacherHeader />

      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="TeaHome" component={TeaHome} />
        <Tab.Screen name="TeaNotification" component={TeaNotification} />
        <Tab.Screen name="TeaProfile" component={TeaProfile} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  nav: {
    flexDirection: 'row',
    backgroundColor: colors.gray100,
    width: '90%',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center'
  },
  now: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 25,
    elevation: 3
  },
  navButt: {
    width: '32%',
    borderRadius: 5,
    height: 25,
    justifyContent: 'center'
  },
  navButtText: {
    textAlign: 'center',
    fontWeight: '500',
    verticalAlign: 'middle'
  },
});

export default TeaSwipeNavigator;