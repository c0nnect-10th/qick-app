import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import logoIcon from "../../assets/TeaNotification/logoIcon.png";
import { formatNotiDate } from "../../utils/dateFormat";

export default function Noti({noti}) {
    return (
        <View style={styles.noti}>
            <Image source={logoIcon} style={{height: 40, width: 35}}/>
            <View style={{width: '85%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 600}}>{noti.task}</Text>
                    <Text style={{color: colors.gray300}}>{formatNotiDate(noti.timestamp)}</Text>
                </View>
                <Text style={{color: colors.gray300}}>{noti.message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    noti: {
        width: '100%',
        minHeight: 70,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.gray100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        gap: 10,
        marginBottom: 10
    }
});