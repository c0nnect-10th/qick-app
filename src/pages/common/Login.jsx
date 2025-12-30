import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import auth from '@react-native-firebase/auth';
import { ROUTES } from "../../constants/routes";
import { colors } from "../../constants/colors";

export default function Login({ navigation }) {

    const onGoogleLogin = async () => {
        try {
            console.log('구글 로그인 시작');

            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });

            // 캐시 제거
            // await GoogleSignin.signOut();
            // await GoogleSignin.revokeAccess();

            const res = await GoogleSignin.signIn();

            console.log('FULL RESPONSE:', res);
            console.log('idToken:', res.idToken);

            navigation.navigate(ROUTES.Signup1, { userType: "student" });

        } catch (error) {
            console.log('구글 로그인 실패:', error);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/Auth/Qick.png")} />
                <Text style={styles.title}>계정 로그인</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.primary]}>
                    <View style={styles.row}>
                        <Image
                            source={require("../../assets/Auth/Bind.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.primaryText}>도담도담으로 계속하기</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={onGoogleLogin}>
                    <View style={styles.row}>
                        <Image
                            source={require("../../assets/Auth/Google.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.secondaryText}>Google로 계속하기</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.teacherButton} onPress={() => navigation.navigate(ROUTES.Signup1, { userType: "teacher" })}>
                    <Text style={styles.secondaryText}>Teacher로 계속하기</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <Text style={styles.policy}>
                    The Google
                    <Text style={styles.colored_policy}> Privacy Policy</Text>
                    {" and "}
                    <Text style={styles.colored_policy}>Terms of Service</Text>
                </Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logoContainer: {
        alignItems: "center",
        marginTop: 181,
    },

    logo: {
        width: 128,
        height: 72,
        resizeMode: "contain",
        marginBottom: 16,
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: colors.textBlack,
    },

    buttonsContainer: {
        paddingHorizontal: 24,
        marginTop: 90,
        gap: 8,
    },

    button: {
        height: 48,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.gray100,
        justifyContent: "center",
        alignItems: "center",
    },

    primary: {
        backgroundColor: "#048cfc33",
        borderColor: "transparent",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    icon: {
        width: 20,
        height: 20,
    },

    primaryText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#FFFFFF",
    },

    secondaryText: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.inputText,
    },

    bottom: {
        marginTop: "auto",
        alignItems: "center",
        paddingBottom: 24,
    },

    teacherButton: {
        width: "100%",
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.gray100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },

    divider: {
        width: "100%",
        height: 1,
        backgroundColor: colors.gray100,
        marginBottom: 12,
    },

    policy: {
        fontSize: 12,
        color: colors.gray300,
        textAlign: "center",
    },

    colored_policy: {
        fontSize: 12,
        color: colors.orange,
        textAlign: "center",
    },
});