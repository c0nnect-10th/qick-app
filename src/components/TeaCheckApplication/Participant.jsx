import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { colors } from "../../constants/colors";

export default function Participant({ item }) {
    const [status, setStatus] = useState('notJoin'); 

    return (
        <View style={styles.participant}>
            <Text style={styles.participantsName}>
                {item?.grade}{item?.classNumber}{item?.number} {item?.studentName}
            </Text>

            <View style={styles.buttons}>
                <Pressable
                    onPress={() => setStatus('join')}
                    style={[
                        styles.button,
                        status === 'join' && styles.activeButton
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            status === 'join' && styles.activeButtonText
                        ]}
                    >
                        참여
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => setStatus('notJoin')}
                    style={[
                        styles.button,
                        status === 'notJoin' && styles.activeButton
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            status === 'notJoin' && styles.activeButtonText
                        ]}
                    >
                        미참여
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    participant: {
        borderBottomWidth: 2,
        borderColor: colors.gray200,
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    participantsName: {
        fontSize: 22,
        fontWeight: "600",
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        backgroundColor: colors.gray100,
        width: 75,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: colors.buttonOrangeEnabled,
    },
    buttonText: {
        fontWeight: "600",
    },
    activeButtonText: {
        color: 'white',
    },
});
