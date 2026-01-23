import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../constants/colors";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function TeaDelete({ route, navigation }) {
    const {volunteerInfo} = route.params;
    const [inputWorkName, setInputWorkName] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const deleteVolunteer = async () => {
        if (volunteerInfo.workName === inputWorkName) {
            try {
                setIsLoading(true);
                const volunteer = await axiosInstance.delete(`/volunteer/delete/${volunteerInfo.id}`);
                navigation.navigate("TeaHome");
            }
            catch(err) {
                console.error(err);
            }
            finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="chevron-back" size={45} color={colors.buttonBlackEnabled}/>
                </TouchableOpacity>
                <View style={styles.step} />
            </View>

            <Text style={styles.guide}>
                <Text style={{color: colors.red100}}>심부름 제거</Text>를 위해 아래에{"\n"}"{volunteerInfo.workName}"을(를){"\n"}입력해주세요.
            </Text>

            <View style={styles.inputForm}>
                <FontAwesome6 name="lock" size={18} color={colors.gray200}/>
                <TextInput placeholder={volunteerInfo.workName} style={styles.input} onChangeText={setInputWorkName}/>
            </View>

            <TouchableOpacity style={styles.nextBtn} onPress={() => deleteVolunteer()}>
                <Text style={styles.nextBtnText}>완료</Text>
            </TouchableOpacity>
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
        height: 80,
    },
    step: {
        backgroundColor: colors.orange,
        width: 13,
        height: 13,
        borderRadius: 50
    },
    guide: {
        fontWeight: '600',
        fontSize: 22,
        marginLeft: 35,
        marginTop: 45,
    },
    inputForm: {
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: colors.gray100,
        borderWidth: 2,
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 25,
        position: 'relative',
        marginTop: '37%'
    },
    input: {
        fontSize: 16,
        paddingLeft: 15,
        color: colors.inputText,
    },
    nextBtn: {
        height: 50,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '17%',
        backgroundColor: colors.buttonBlackEnabled
    },
    nextBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
    },
});