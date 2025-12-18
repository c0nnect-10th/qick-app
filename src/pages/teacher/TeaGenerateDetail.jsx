import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TeaGenerateDetail({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="chevron-back" size={45} color={colors.buttonBlackEnabled}/>
                </TouchableOpacity>
                <Text style={styles.topText}>심부름 상세정보</Text>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>심부름 제목</Text>
                <View style={{flexDirection:'row', alignItems:'center',gap:5}}>
                    <AntDesign name='star' size={16} color={colors.orange}/>
                    <Text>난이도</Text>
                </View>
            </View>
            <View style={{borderBottomWidth:1, height:1, width:'90%', alignSelf: 'center', marginTop: 5, borderColor: colors.gray300}}></View>

            <View style={styles.info}>
                <Text style={styles.key}>호출 선생님</Text>
                <Text style={styles.value}>선생님 성함T</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.key}>모집 장소</Text>
                <Text style={styles.value}>장소</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.key}>시작 시간</Text>
                <Text style={styles.value}>년.월.일 시간</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.key}>모집 인원</Text>
                <Text style={styles.value}>현재 인원/모집 인원</Text>
            </View>

            <TextInput
                style={styles.textarea}
                multiline
                numberOfLines={16}
                placeholderTextColor={colors.gray200}
                textAlignVertical="top"
                readOnly
                value="심부름 내용"
            />

            <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: colors.buttonOrangeEnabled }]}>
                    <Text style={[styles.btnText, {color: 'white'}]}>알림 전송</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { backgroundColor: colors.gray100 }]} onPress={() => navigation.navigate('TeaHome')}>
                    <Text style={[styles.btnText, {color: 'black'}]}>닫기</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.delete} onPress={() => navigation.navigate('TeaDelete')}>
                <Text style={{color: colors.red100, fontWeight: 500}}>봉사활동 제거하기</Text>
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
        height: 100,
    },
    topText: {
        fontSize: 20,
        fontWeight: 500
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        marginTop: 50
    },
    titleText: {
        fontSize: 30,
        fontWeight: 600
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
    },
    key: {
        color: colors.gray300,
        fontWeight: 500
    },
    value: {
        fontWeight: 600
    },
    textarea: {
        backgroundColor: colors.gray50,
        marginTop: 15,
        width: '90%',
        alignSelf: 'center',
        height: '38%',
        borderRadius: 10,
        padding: 10
    },
    btnContainer: {
        position: 'absolute',
        bottom: '17%',
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    btn: {
        height: 50,
        width: '40%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontWeight: '700',
        fontSize: 17,
    },
    delete: {
        position: 'absolute',
        bottom: '13%',
        alignSelf: 'center',
    }
});