import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../constants/colors";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { formatDateTime } from "../../utils/dateFormat";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TeaGenerate3({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [isDateSelected, setIsDateSelected] = useState(false);

    const handleConfirm = (selected) => {
        setDate(selected);
        setIsDateSelected(true);
        setShowPicker(false);
    };
    
    const isFormComplete = isDateSelected && selectedDifficulty !== null;
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="chevron-back" size={45} color={colors.buttonBlackEnabled}/>
                </TouchableOpacity>
                <View style={styles.step} />
                <View style={styles.step} />
                <View style={[styles.step, styles.now]} />
            </View>

            <Text style={styles.guide}>
                심부름 생성을 위해 추가 설정을{"\n"}완료해주세요.
            </Text>

            <Pressable style={[styles.inputForm, {marginTop: '20%'}]} onPress={() => setShowPicker(true)}>
                <FontAwesome6 name="clock" size={18} color={colors.gray200}/>
                <TextInput
                    style={styles.input}
                    placeholder="심부름 시작 시간을 설정해주세요."
                    placeholderTextColor={colors.gray200}
                    editable={false}
                    value={isDateSelected ? formatDateTime(date) : ''}
                />
            </Pressable>

            <DateTimePickerModal
                mode="datetime" 
                isVisible={showPicker}
                onCancel={() => setShowPicker(false)}
                onConfirm={handleConfirm}
                date={date}
                display="spinner"
            />

            <View style={styles.smallGuide}>
                <AntDesign name='star' size={20} color={colors.orange}/>
                <Text>난이도를 선택해주세요.</Text>
                <AntDesign name='star' size={20} color={colors.orange}/>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={[
                        styles.locBtn,
                        selectedDifficulty === 'hard' && { borderColor: colors.hard }
                    ]}
                    onPress={() => setSelectedDifficulty(selectedDifficulty === 'hard' ? null : 'hard')}
                >
                    <AntDesign name='star' size={20} color={colors.hard}/>
                    <Text style={[styles.locText, {color: colors.hard}]}>어려움</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[
                        styles.locBtn,
                        selectedDifficulty === 'normal' && { borderColor: colors.normal }
                    ]}
                    onPress={() => setSelectedDifficulty(selectedDifficulty === 'normal' ? null : 'normal')}
                >
                    <AntDesign name='star' size={20} color={colors.normal}/>
                    <Text style={[styles.locText, {color: colors.normal}]}>보통</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[
                        styles.locBtn,
                        selectedDifficulty === 'easy' && { borderColor: colors.easy }
                    ]}
                    onPress={() => setSelectedDifficulty(selectedDifficulty === 'easy' ? null : 'easy')}
                >
                    <AntDesign name='star' size={20} color={colors.easy}/>
                    <Text style={[styles.locText, {color: colors.easy}]}>쉬움</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[
                    styles.nextBtn,
                    { backgroundColor: isFormComplete ? colors.buttonBlackEnabled : colors.buttonBlackDisabled }
                ]}
                onPress={() => isFormComplete && navigation.navigate("TeaGenerateDetail")}
                disabled={!isFormComplete}
            >
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
        backgroundColor: colors.gray200,
        width: 13,
        height: 13,
        borderRadius: 50,
    },
    now: {
        backgroundColor: colors.orange,
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
        position: 'relative',
    },
    input: {
        fontSize: 16,
        paddingLeft: 15,
        color: colors.inputText,
        fontWeight: 500
    },
    smallGuide: {
        flexDirection: 'row',
        gap: 30,
        alignSelf: 'center',
        marginTop: 30
    },
    btnContainer : {
        alignSelf: 'center',
        width: '85%',
        marginTop: 15,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '39%'
    },
    locBtn : {
        borderWidth: 2,
        width: '31%',
        height: 60,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        borderColor: colors.gray100
    },
    locText : {
        fontSize: 15,
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
    },
    nextBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
    },
});