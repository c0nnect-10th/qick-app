import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function StuDetail() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>학생 심부름 상세 보기</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
});