import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeacherHeader from "../../components/TeacherHeader";
import { colors } from "../../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TeaProfile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TeacherHeader />
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaHome')}><Text style={styles.navButtText}>홈</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaNotification')}><Text style={styles.navButtText}>알림</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt}><Text style={[styles.navButtText, styles.now]}>프로필</Text></TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <View style={styles.profileImg}></View>
                <Text style={{fontWeight: 600, fontSize: 20, marginLeft: 15}}>성함</Text>
                <Text style={{color: colors.gray300, fontSize: 15}}>선생님</Text>
            </View>
            <TouchableOpacity style={styles.butt}>
                <Text style={styles.buttText}>내 정보 수정</Text>
                <AntDesign name="right" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butt}>
                <Text style={styles.buttText}>이용약관</Text>
                <AntDesign name="right" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butt}>
                <Text style={styles.buttText}>개인정보 처리약관</Text>
                <AntDesign name="right" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.butt, {justifyContent: 'center'}]}>
                <Text style={styles.buttText}>로그아웃</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.butt, {justifyContent: 'center'}]}>
                <Text style={[styles.buttText, {color: colors.red100}]}>회원 탈퇴</Text>
            </TouchableOpacity>
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
    profile: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    profileImg: {
        height: '60%',
        borderWidth: 1,
        aspectRatio: 1,
        borderRadius: 80,
        marginLeft: 40
    },
    butt: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        padding: 15,
        borderRadius: 8,
        borderColor: colors.gray200,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    buttText: {
        fontWeight: 600
    },
});