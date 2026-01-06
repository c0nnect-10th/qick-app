import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Mission({ volunteer, navigation }) {
    return (
        <View style={styles.missionBox}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{volunteer.workName}</Text>
                    <View style={styles.badge}>
                        <AntDesign name='star' size={13} style={[styles.badgeText, { 
                            color: volunteer.difficulty === 'EASY' ? colors.easy 
                                : volunteer.difficulty === 'NORMAL' ? colors.normal 
                                : colors.hard 
                        }]}/>
                        <Text style={[styles.badgeText, { 
                            color: volunteer.difficulty === 'EASY' ? colors.easy 
                                : volunteer.difficulty === 'NORMAL' ? colors.normal 
                                : colors.hard 
                        }]}>
                            {volunteer.difficulty}
                        </Text>
                    </View>
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoItem}>  
                        <Entypo name="location-pin" size={18} style={styles.icon}/>
                        <Text style={styles.infoText}>{volunteer.location}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <FontAwesome5 name="chalkboard-teacher" size={15} style={styles.icon}/>
                        <Text style={styles.infoText}>{volunteer.teacherName}T</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons name="person" size={15} style={styles.icon}/>
                        <Text style={styles.infoText}>{volunteer.currentParticipants}/{volunteer.maxParticipants}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('TeaGenerateDetail', {volunteerId : volunteer.id})}>
                <Text style={styles.button}>자세히 보기</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    missionBox: {
        borderWidth: 1,
        width: '100%',
        height: 70,
        marginBottom: 10,
        borderRadius: 8,
        borderColor: colors.gray200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        gap: 6
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000'
    },
    badge: {
        borderRadius: 4,
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    },
    badgeText: {
        fontSize: 12,
    },
    infoRow: {
        flexDirection: 'row',
        gap: 12
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    icon: {
        color: colors.gray300
    },
    infoText: {
        fontSize: 11,
        color: colors.gray300,
        fontWeight: 500
    },
    buttonContainer: {
        marginLeft: 12
    },
    button: {
        backgroundColor: '#FF6B00',
        color: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 3,
        borderRadius: 6,
        fontSize: 14,
        fontWeight: '600',
        overflow: 'hidden'
    }
});