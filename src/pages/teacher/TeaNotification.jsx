import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeacherHeader from "../../components/TeacherHeader";
import { colors } from "../../constants/colors";
import { noti } from "../../constants/noti";
import Noti from "../../components/TeaNotification/Noti";

export default function TeaNotification({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TeacherHeader />
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaHome')}><Text style={styles.navButtText}>홈</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt}><Text style={[styles.navButtText, styles.now]}>알림</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaProfile')}><Text style={styles.navButtText}>프로필</Text></TouchableOpacity>
            </View>

            <View style={styles.notiContainer}>
                <FlatList 
                    data={noti}
                    keyExtractor={(noti) => noti.id}
                    renderItem={({ item }) => <Noti noti={item}/>}
                />
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
    notiContainer : {
        width: '90%',
        height: '75%',
        marginTop: 20,
    },
});
