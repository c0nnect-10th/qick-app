import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TeaGenerate2() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>선생님 심부름 생성 스텝 2</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
});