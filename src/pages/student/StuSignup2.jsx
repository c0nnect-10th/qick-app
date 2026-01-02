import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ROUTES } from "../../constants/routes";
import { colors } from "../../constants/colors";

export default function StuSignup2({ navigation, fcmToken }) {
    const [name, setName] = useState("");
    const [studentId, setStudentId] = useState("");

    const isValid = name.length > 0 && studentId.length === 4;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="chevron-back" size={28} color={colors.textBlack} />
                </TouchableOpacity>

                <View style={styles.indicator}>
                    <View style={styles.dot} />
                    <View style={styles.dotActive} />
                </View>

                <View style={{ width: 28 }} />
            </View>

            <Text style={styles.title}>
                회원가입을 위해{"\n"}학생 정보를 입력해주세요
            </Text>

            <View style={styles.form}>
                <View style={styles.inputBox}>
                    <Icon name="person" size={20} color={colors.gray300} />
                    <TextInput
                        placeholder="이름을 입력해주세요"
                        placeholderTextColor={colors.gray300}
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputBox}>
                    <Icon name="person" size={20} color={colors.gray300} />
                    <TextInput
                        placeholder="학번을 입력해주세요 (4자리)"
                        placeholderTextColor={colors.gray300}
                        keyboardType="number-pad"
                        maxLength={4}
                        style={styles.input}
                        value={studentId}
                        onChangeText={setStudentId}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={[
                    styles.button,
                    isValid ? styles.buttonEnabled : styles.buttonDisabled,
                ]}
                disabled={!isValid}
                onPress={() => navigation.navigate(ROUTES.StuHome)}
            >
                <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 68,
        paddingHorizontal: 16,
    },

    backButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    indicator: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
    },

    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.gray200,
    },

    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.orange,
    },

    title: {
        marginTop: 60,
        marginLeft: 24,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 29,
        letterSpacing: -0.96,
        color: colors.textBlack,
    },

    form: {
        marginTop: 40,
        paddingHorizontal: 24,
        gap: 8,
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        height: 51,
        borderWidth: 2,
        borderColor: colors.gray100,
        borderRadius: 8,
        paddingHorizontal: 16,
    },

    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.textBlack,
    },

    button: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        width: 354,
        height: 48,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonDisabled: {
        backgroundColor: colors.buttonBlackDisabled,
    },

    buttonEnabled: {
        backgroundColor: colors.buttonBlackEnabled,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFFFFF",
    },
});
