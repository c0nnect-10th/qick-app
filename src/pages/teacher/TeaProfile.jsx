import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeacherHeader from "../../components/TeacherHeader";
import { colors } from "../../constants/colors";

export default function TeaProfile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TeacherHeader />
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaHome')}><Text style={styles.navButtText}>홈</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaNotification')}><Text style={styles.navButtText}>알림</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt}><Text style={[styles.navButtText, styles.now]}>프로필</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    nav : {
        flexDirection: 'row',
        backgroundColor: colors.gray100,
        width: '90%',
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 5,
        marginTop: 20
    },
    now : {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 25,
        elevation: 3
    },
    navButt : {
        width: '32%',
        borderRadius: 5,
        height: 25,
        justifyContent: 'center'
    },
    navButtText : {
        textAlign: 'center',
        fontWeight: '500',
        verticalAlign: 'middle'
    },
});