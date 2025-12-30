import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { ROUTES } from "../../constants/routes";
import { colors } from "../../constants/colors";

const formatTCode = (text) => {
    const filtered = text
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 16);

    const chunks = filtered.match(/.{1,4}/g) || [];
    return chunks.join("-");
};

export default function TeaSignup2({ navigation }) {
    const [name, setName] = useState("");
    const [tCode, setTCode] = useState("");

    const isValidTCode = /^[A-Z0-9]{4}(-[A-Z0-9]{4}){3}$/.test(tCode);
    const isDisabled = !(name && isValidTCode);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="chevron-back" size={28} color="#1F1F1F" />
                </TouchableOpacity>

                <View style={styles.indicator}>
                    <View style={styles.dot} />
                    <View style={styles.dotActive} />
                </View>

                <View style={{ width: 28 }} />
            </View>

            <Text style={styles.title}>
                로그인을 위해 선생님 정보를 입력해주세요
            </Text>

            <View style={styles.form}>
                <View style={styles.inputBox}>
                    <Icon name="person" size={20} color="#ADADAD" />
                    <TextInput
                        style={styles.input}
                        placeholder="성함을 입력해주세요"
                        placeholderTextColor="#C5C5C7"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputBox}>
                    <Icon name="lock-closed" size={20} color="#ADADAD" />
                    <TextInput
                        style={styles.input}
                        placeholder="T 코드를 입력해주세요"
                        placeholderTextColor="#C5C5C7"
                        value={tCode}
                        onChangeText={(text) => setTCode(formatTCode(text))}
                        autoCapitalize="characters"
                        autoCorrect={false}
                        autoComplete="off"
                    />
                </View>
            </View>

            <TouchableOpacity
                style={[
                    styles.button,
                    isDisabled ? styles.buttonDisabled : styles.buttonEnabled,
                ]}
                disabled={isDisabled}
                onPress={() => navigation.navigate(ROUTES.TeaHome)}
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
        marginTop: 40,
        marginLeft: 24,
        width: 260,
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 29,
        letterSpacing: -0.04,
        color: colors.textBlack,
    },

    form: {
        marginTop: 60,
        marginHorizontal: 24,
        gap: 8,
    },

    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        height: 51,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: colors.gray100,
        borderRadius: 8,
    },

    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.textBlack,
    },

    button: {
        position: "absolute",
        bottom: 48,
        left: 24,
        right: 24,
        height: 48,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonDisabled: {
        backgroundColor: colors.buttonBlackDisabled,
    },

    buttonEnabled: {
        backgroundColor: colors.buttonBlackEnabled,
    },

    buttonText: {
        fontWeight: "700",
        fontSize: 16,
        color: "#FFFFFF",
    },
});