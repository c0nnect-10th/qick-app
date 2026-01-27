import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function TeaProfile() {
    const [userInfo, setUserInfo] = useState(null);
    
        useEffect(() => {
            getProfile();
        }, [])
    
        const getProfile = async () => {
            try {
                const profile = await axiosInstance.get('/user/');
                setUserInfo(profile.data.data);
                console.log(profile.data.data);
            }
            catch (err) {
                console.error(err);
                console.log('error.message', err.message);
                console.log('error.code', err.code);
                console.log('error.response', err.response);
                console.log('error.request', err.request);
            }
        }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileImg}></View>
                <Text style={{fontWeight: 600, fontSize: 20, marginLeft: 15}}>{userInfo?.name}</Text>
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
    profile: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 20
    },
    profileImg: {
        height: '75%',
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