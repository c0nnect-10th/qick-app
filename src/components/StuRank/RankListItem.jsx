import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../constants/colors';

export default function RankListItem({ item, index }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listRank}>{index + 4}</Text>
            <View style={[styles.profileCircleBase, styles.profile36, { marginRight: 15 }]}>
                {item.profileImage ? (
                    <Image source={{ uri: item.profileImage }} style={styles.fullImage} />
                ) : (
                    <View style={styles.placeholderPhoto} />
                )}
            </View>
            <Text style={styles.listName}>{item.name}</Text>
            <View style={styles.pointRow}>
                <AntDesign name="star" size={13} color={colors.inputText} style={styles.starIcon} />
                <Text style={styles.pointText}>{item.point}포인트</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileCircleBase: {
        backgroundColor: colors.gray200,
        overflow: 'hidden',
    },
    profile60: { width: 60, height: 60, borderRadius: 30, marginBottom: 5 },
    profile50: { width: 50, height: 50, borderRadius: 25, marginBottom: 5 },
    profile36: { width: 36, height: 36, borderRadius: 18 },


    listName: {
        flex: 1,
        fontSize: 16,
        color: colors.textBlack
    },
    listRank: {
        width: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.inputText,
        textAlign: 'center',
        marginRight: 5,
    },
    pointRow: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'visible',
    },
    starIcon: {
        marginRight: 4,
    },
    pointText: {
        fontSize: 12,
        color: colors.inputText,
    },


    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 360,
        height: 60,
        paddingHorizontal: 15,
    },


    placeholderPhoto: { flex: 1, backgroundColor: colors.gray200 },
    fullImage: { width: '100%', height: '100%' },
});