import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../constants/colors';

export default function RankCard({ item, displayRank, rankColor }) {
    const isFirst = displayRank === 1;

    return (
        <View style={[styles.topCard, isFirst ? styles.firstPlaceCard : styles.otherTopCard]}>
            <View style={styles.badgeRow}>
                <View style={[styles.badgeLine, { backgroundColor: rankColor }]} />

                <View style={styles.badgeWrapper}>
                    <View style={[styles.badgeSquare, { backgroundColor: rankColor, transform: [{ rotate: '45deg' }] }]} />
                    <View style={[styles.badgeSquare, { backgroundColor: rankColor, justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={styles.badgeText}>{displayRank}</Text>
                    </View>
                </View>

                <View style={[styles.badgeLine, { backgroundColor: rankColor }]} />
            </View>

            <View style={[styles.profileCircleBase, isFirst ? styles.profile60 : styles.profile50]}>
                {item.profileImage ? (
                    <Image source={{ uri: item.profileImage }} style={styles.fullImage} />
                ) : (
                    <View style={styles.placeholderPhoto} />
                )}
            </View>

            <Text style={styles.topName}>{item.name}</Text>
            <View style={styles.pointRow}>
                <AntDesign name="star" size={13} color={colors.inputText} style={styles.starIcon} />
                <Text style={styles.pointText}>{item.point}포인트</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingTop: 5,
        paddingBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.gray100,
        overflow: 'hidden',
    },
    otherTopCard: { width: 112, height: 150 },
    firstPlaceCard: { width: 120, height: 160 },

    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 5,
        height: 33.25,
    },
    badgeLine: { flex: 1, height: 4 },

    badgeWrapper: {
        width: 32.375,
        height: 33.25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    badgeSquare: {
        position: 'absolute',
        width: 27,
        height: 27,
        borderRadius: 4.5,
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: Platform.OS === 'ios' ? 26 : 24,
        includeFontPadding: false,
    },

    profileCircleBase: { backgroundColor: colors.gray200, overflow: 'hidden' },
    profile60: { width: 60, height: 60, borderRadius: 30, marginBottom: 5 },
    profile50: { width: 50, height: 50, borderRadius: 25, marginBottom: 5 },
    topName: { fontSize: 14, fontWeight: 'bold', color: colors.textBlack },
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
    placeholderPhoto: { flex: 1, backgroundColor: colors.gray200 },
    fullImage: { width: '100%', height: '100%' },
});