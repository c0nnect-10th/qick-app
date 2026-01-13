import { ActivityIndicator, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Modal } from "react-native";

export default function Loading ({isLoading, message}) {
    return (
        <Modal
            transparent={true}
            visible={isLoading}
            animationType="fade"
        >
            <View style={styles.loadingOverlay}>
                <View style={styles.loadingContent}>
                    <ActivityIndicator size="large" color="white" />
                    <Text style={styles.loadingText}>{message}...</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    loadingOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContent: {
        alignItems: 'center',
        gap: 15,
    },
    loadingText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});