import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import { noti } from "../../constants/noti";
import Noti from "../../components/TeaNotification/Noti";

export default function TeaNotification({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notiContainer}>
                <FlatList 
                    data={noti}
                    keyExtractor={(noti) => noti.id}
                    renderItem={({ item }) => <Noti noti={item}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    notiContainer : {
        width: '90%',
        height: '75%',
    },
});