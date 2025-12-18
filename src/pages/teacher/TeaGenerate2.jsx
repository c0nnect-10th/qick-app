import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { colors } from "../../constants/colors";
import { LOCATION } from "../../constants/location";

export default function TeaGenerate2({ navigation }) {
    const [inputValue, setInputValue] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleLocationSelect = (location) => {
        if (selectedLocation === location) {
            setSelectedLocation(''); // 같은 버튼 다시 누르면 취소
        } else {
            setSelectedLocation(location);
            setInputValue(''); // 버튼 선택 시 입력값 초기화
        }
    };

    const handleInputChange = (text) => {
        setInputValue(text);
        if (text.trim()) {
            setSelectedLocation(''); // 입력 시 선택 초기화
        }
    };

    const isNextEnabled = inputValue.trim() !== '' || selectedLocation !== '';

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="chevron-back" size={45} color={colors.buttonBlackEnabled}/>
                </TouchableOpacity>
                <View style={styles.step} />
                <View style={[styles.step, styles.now]} />
                <View style={styles.step} />
            </View>

            <Text style={styles.guide}>
                심부름 생성을 위해 모집 장소를{"\n"}설정해주세요.
            </Text>

            <View style={[
                styles.inputForm,
                { 
                    marginTop: 40,
                    borderColor: isInputFocused ? colors.orange : colors.gray100,
                }
            ]}>
                <FontAwesome6 
                    name="house-chimney" 
                    color={isInputFocused ? colors.orange : colors.gray200} 
                    size={18}
                />
                <TextInput
                    style={styles.input}
                    placeholder="모집 장소 직접 입력하기"
                    placeholderTextColor={colors.gray200}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
            </View>

            <View style={styles.btnContainer}>
                <FlatList 
                    data={LOCATION}
                    keyExtractor={(_, idx) => idx.toString()}
                    numColumns={3}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            style={[
                                styles.locBtn,
                                {
                                    borderColor: selectedLocation === item ? colors.orange : colors.gray100,
                                },
                            ]}
                            onPress={() => handleLocationSelect(item)}
                        >
                            <Text style={[
                                styles.locText,
                                {
                                    color: selectedLocation === item ? colors.orange : '',
                                },
                            ]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
                />
            </View>
            <TouchableOpacity
                disabled={!isNextEnabled}
                style={[
                    styles.nextBtn,
                    {
                        backgroundColor: isNextEnabled
                            ? colors.buttonBlackEnabled
                            : colors.buttonBlackDisabled,
                    },
                ]}
                onPress={() => navigation.navigate("TeaGenerate3")}
            >
                <Text style={styles.nextBtnText}>다음</Text>
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
        borderWidth: 2,
        borderRadius: 10,
        height: 55,
        alignItems: 'center',
        paddingLeft: 20,
    },
    input: {
        fontSize: 16,
        paddingLeft: 15,
        color: colors.inputText,
        flex: 1,
    },
    btnContainer : {
        alignSelf: 'center',
        width: '85%',
        marginTop: 10,
        height: '50%',
        position: 'relative',
    },
    locBtn : {
        borderWidth: 2,
        width: '31%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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