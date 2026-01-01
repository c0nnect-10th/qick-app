import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors"
import StudentHeader from "../../components/StudentHeader";
import Icon from 'react-native-vector-icons/Feather';
import { missions } from "../../constants/mission";
import Mission from "../../components/StuHome/Mission";

export default function StuHome({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StudentHeader />
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButt}><Text style={[styles.navButtText, styles.now]}>홈</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('StuRanking')}><Text style={styles.navButtText}>랭킹</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('StuProfile')}><Text style={styles.navButtText}>프로필</Text></TouchableOpacity>
            </View>
            <View style={styles.searchBox}>
                <TextInput placeholder="봉사명, 호출 선생님 또는 장소로 검색" style={styles.search} placeholderTextColor={colors.gray200}/>
                <Icon name='search' size={23} color={colors.gray300}/>
            </View>
            <FlatList
                data={missions}
                keyExtractor={(mission) => mission.id}
                renderItem={({ item }) => <Mission mission={item} navigation={navigation}/>}
                style={styles.lists}
            />
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
    searchBox : {
        borderWidth: 1,
        width : '90%',
        borderRadius: 10,
        borderColor: colors.gray200,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    search : {
        color: colors.inputText,
        paddingLeft: 20,
        height : 50,
        width: '90%'
    },
    lists : {
        width: '90%',
        marginTop: 20,
        marginBottom: 30,
    }
});