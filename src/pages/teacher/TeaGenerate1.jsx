import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../constants/colors";
import Feather from 'react-native-vector-icons/Feather';
import { useState } from "react";

export default function TeaHome({ navigation }) {
    const [people, setPeople] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="chevron-back" size={45} color={colors.buttonBlackEnabled}/>
                </TouchableOpacity>
                <View style={[styles.step, styles.now]}></View>
                <View style={styles.step}></View>
                <View style={styles.step}></View>
            </View>

            <Text style={styles.guide}>심부름 생성을 위해 아래 내용을{"\n"}입력해주세요.</Text>

            <View style={[styles.inputForm, { marginTop: '15%' }]}>
                <Feather name="type" color={colors.gray200} size={20}/>
                <TextInput
                    style={styles.input}
                    placeholder="봉사명을 입력해주세요."
                    placeholderTextColor={colors.gray200}
                />
            </View>

            <View style={[styles.inputForm, { marginTop: 10 }]}>
                <Ionicons name="person" size={20} color={colors.gray200}/>
                <TextInput
                    style={[styles.input, { flex: 1, paddingRight: 40 }]} 
                    placeholder="모집 인원을 설정해주세요. ( 최대 10명 )"
                    placeholderTextColor={colors.gray200}
                    keyboardType="numeric"
                    value={people}
                    onChangeText={(text) => setPeople(text.replace(/[^0-9]/g, ""))}
                />
                {people !== "" && <Text style={styles.unitText}>명</Text>}
            </View>

            <View style={{ marginTop: 10, maxHeight: '40%' }}>
                <TextInput
                    style={styles.textarea}
                    multiline={true}
                    numberOfLines={16}
                    placeholder="내용을 입력하세요"
                    placeholderTextColor={colors.gray200}
                    textAlignVertical="top"
                />
            </View>

            <TouchableOpacity style={styles.nextBtn}>
                <Text style={styles.nextBtnText}>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative' 
    },
    back : {
        position: 'absolute',
        left: 20,
        top: 60,
    },
    top : {
        flexDirection: 'row', 
        gap: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 80
    },
    step : {
        backgroundColor: colors.gray200,
        width: 13,
        height: 13,
        borderRadius: 100
    },
    now : {
        backgroundColor: colors.orange
    },
    guide : {
        fontWeight: '600',
        fontSize: 22,
        marginLeft: 35,
        marginTop: 45
    },
    inputForm : {
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: colors.gray100,
        borderWidth: 2,
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        paddingLeft: 20,
        position: 'relative'
    },
    input : {
        fontSize: 16,
        paddingLeft: 15,
        color: colors.inputText
    },
    unitText: {
        position: 'absolute',
        right: 16,
        color: colors.inputText,
        fontSize: 16,
        pointerEvents: 'none'
    },
    textarea: {
        borderWidth: 2,
        borderColor: colors.gray100,
        borderRadius: 10,
        padding: 15,
        height: '100%',
        textAlignVertical: 'top',
        width: '85%',
        alignSelf: 'center',
        color: colors.inputText
    },
    nextBtn : {
        backgroundColor: colors.buttonBlackEnabled,
        height: 50,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -30,
    },
    nextBtnText : {
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
    }
});
