import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors"
import TeacherHeader from "../../components/TeacherHeader";
import Icon from 'react-native-vector-icons/Feather';
import Mission from "../../components/TeaHome/Mission";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function TeaHome({ navigation }) {
    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        getVolunteer();
    }, []); 
    
    const getVolunteer = async () => {
        try {
            const response = await axiosInstance.get('/volunteer/');
            setVolunteers(response.data.data); 
            console.log(response.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TeacherHeader />
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButt}><Text style={[styles.navButtText, styles.now]}>홈</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaNotification')}><Text style={styles.navButtText}>알림</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('TeaProfile')}><Text style={styles.navButtText}>프로필</Text></TouchableOpacity>
            </View>
            <View style={styles.searchBox}>
                <TextInput placeholder="봉사명, 호출 선생님 또는 장소로 검색" style={styles.search} placeholderTextColor={colors.gray200}/>
                <Icon name='search' size={23} color={colors.gray300}/>
            </View>
            <TouchableOpacity style={styles.create} onPress={() => navigation.navigate('TeaGenerate1')}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>심부름 생성하기</Text>
            </TouchableOpacity>
            <FlatList
                data={volunteers}
                keyExtractor={(volunteer) => volunteer.id}
                renderItem={({ item }) => <Mission volunteer={item} navigation={navigation}/>}
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
    create : {
        backgroundColor: colors.buttonOrangeEnabled,
        width: '90%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    },
    lists : {
        width: '90%',
        marginTop: 20,
        marginBottom: 30
    }
});