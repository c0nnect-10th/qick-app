import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TeaHome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>선생님 알림</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
});