import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { ROUTES } from "../../constants/routes";
import { colors } from "../../constants/colors";


export default function Signup1({ route, navigation }) {
    const { userType } = route.params;
    console.log(userType)
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
        >
            {checked && <Icon name="checkmark" size={14} color="#fff" />}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-back" size={28} color="#1F1F1F" />
                </TouchableOpacity>

                <View style={styles.indicator}>
                    <View style={styles.dotActive} />
                    <View style={styles.dot} />
                </View>

                <View style={{ width: 28 }} />
            </View>

            <View style={styles.header}>
                <Image
                    source={require("../../assets/Auth/Qick.png")}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
                <Text style={styles.headerTitle}>약관 동의</Text>
            </View>

            <View style={styles.allAgreeBox}>
                <View style={styles.row}>
                    <CheckBox checked={all} onPress={toggleAll} />
                    <Text style={styles.allAgreeText}>전체 동의</Text>
                </View>
            </View>

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

            <TouchableOpacity
                disabled={!requiredChecked}
                style={[
                    styles.button,
                    requiredChecked && styles.buttonActive,
                ]}
                onPress={() => {
                    if (userType === "teacher") {
                        navigation.navigate(ROUTES.TeaSignup2, { userType });
                    } else if (userType === "student") {
                        navigation.navigate(ROUTES.StuSignup2, { userType });
                    }
                }}
            >
                <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        gap: 8,
    },
    logoImage: {
        width: 72,
        height: 36,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.textBlack,
    },

    allAgreeBox: {
        backgroundColor: colors.gray50,
        borderRadius: 14,
        padding: 16,
        marginTop: 40,
    },
    allAgreeText: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.inputText,
    },

    list: {
        marginTop: 20,
        paddingHorizontal: 16,
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
        borderColor: colors.gray300,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxChecked: {
        backgroundColor: colors.orange,
        borderColor: colors.orange,
    },

    /* ---------- Text ---------- */
    required: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.orange,
        textDecorationLine: "underline",
    },
    normal: {
        fontSize: 14,
        color: colors.inputText,
    },

    button: {
        height: 48,
        borderRadius: 50,
        backgroundColor: colors.buttonBlackDisabled,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 40,
    },
    buttonActive: {
        backgroundColor: colors.buttonBlackEnabled,
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
    },
    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.orange,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.gray200,
    },

    /* ---------- Top Bar ---------- */
    backButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 68,
    },
});
