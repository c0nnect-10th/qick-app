import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Signup1() {
    const [all, setAll] = useState(false);
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [push, setPush] = useState(false);
    const [marketing, setMarketing] = useState(false);

    const requiredChecked = terms && privacy && push;

    const toggleAll = () => {
        const value = !all;
        setAll(value);
        setTerms(value);
        setPrivacy(value);
        setPush(value);
        setMarketing(value);
    };

    const CheckBox = ({ checked, onPress }) => (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.checkbox,
                checked && styles.checkboxChecked,
            ]}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* 헤더 */}
            <View style={styles.header}>
                <Text style={styles.logo}>Qick</Text>
                <Text style={styles.headerTitle}>약관 동의</Text>
            </View>

            {/* 전체 동의 */}
            <View style={styles.allAgreeBox}>
                <View style={styles.row}>
                    <CheckBox checked={all} onPress={toggleAll} />
                    <Text style={styles.allAgreeText}>전체 동의</Text>
                </View>
            </View>

            {/* 약관 리스트 */}
            <View style={styles.list}>
                <View style={styles.item}>
                    <View style={styles.row}>
                        <CheckBox checked={terms} onPress={() => setTerms(!terms)} />
                        <Text style={styles.required}>이용 약관 동의 (필수)</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.row}>
                        <CheckBox checked={privacy} onPress={() => setPrivacy(!privacy)} />
                        <Text style={styles.required}>개인정보 처리 약관 동의 (필수)</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.row}>
                        <CheckBox checked={push} onPress={() => setPush(!push)} />
                        <Text style={styles.normal}>푸시 알림 수신 동의 (필수)</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.row}>
                        <CheckBox checked={marketing} onPress={() => setMarketing(!marketing)} />
                        <Text style={styles.normal}>서비스/이벤트 알림 수신 동의 (선택)</Text>
                    </View>
                </View>
            </View>

            {/* 버튼 */}
            <TouchableOpacity
                disabled={!requiredChecked}
                style={[
                    styles.button,
                    requiredChecked && styles.buttonActive,
                ]}
            >
                <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>

            {/* 페이지 인디케이터 */}
            <View style={styles.indicator}>
                <View style={styles.dotActive} />
                <View style={styles.dot} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        gap: 8,
    },
    logo: {
        fontSize: 36,
        fontWeight: "700",
        color: "#FF6000",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#1F1F1F",
    },

    allAgreeBox: {
        backgroundColor: "#F5F5F5",
        borderRadius: 14,
        padding: 16,
        marginTop: 40,
    },
    allAgreeText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#474747",
    },

    list: {
        marginTop: 20,
        gap: 12,
    },
    item: {
        height: 51,
        borderRadius: 14,
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "#B5B5B5",
        borderRadius: 2,
    },
    checkboxChecked: {
        backgroundColor: "#FF6000",
        borderColor: "#FF6000",
    },

    required: {
        fontSize: 14,
        fontWeight: "500",
        color: "#FF6000",
        textDecorationLine: "underline",
    },
    normal: {
        fontSize: 14,
        color: "#474747",
    },

    button: {
        height: 48,
        borderRadius: 50,
        backgroundColor: "#CECECE",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 40,
    },
    buttonActive: {
        backgroundColor: "#FF6000",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

    indicator: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        marginBottom: 20,
    },
    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#FF6000",
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#CECECE",
    },
});