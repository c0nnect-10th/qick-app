import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../constants/colors";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Participant from "../../components/TeaCheckApplication/Participant";

export default function TeaCheckApplication({ route, navigation }) {
    const {workId} = route.params;
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        getParticipants();
    }, [])

    const getParticipants = async () => {
        try {
            const students = await axiosInstance.get(`/volunteer/${workId}/applications`);
            console.log(students.data.data);
            setParticipants(students.data.data);
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="chevron-back" size={45} color={colors.buttonBlackEnabled}/>
                </TouchableOpacity>
                <Text style={styles.topText}>신청 인원 관리</Text>
            </View>

            <View style={styles.participantsList}>
                <FlatList
                    data={participants}
                    keyExtractor={(item) => item?.studentId.toString()}
                    renderItem={({item}) => <Participant item={item}/>}
                />
            </View>

            <TouchableOpacity style={styles.finBtn}><Text style={styles.finBtnText}>심부름 완료</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    back: {
        position: 'absolute',
        left: 20,
        top: 60,
    },
    top: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 100,
        marginBottom: '15%'
    },
    topText: {
        fontSize: 20,
        fontWeight: 500
    },
    participantsList: {
        height: '75%'
    },
    finBtn: {
        height: 50,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '17%',
        backgroundColor: colors.buttonOrangeEnabled
    },
    finBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
    },
});