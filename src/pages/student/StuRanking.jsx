import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../constants/colors";
import StudentHeader from "../../components/StudentHeader";
import RankCard from "../../components/StuRank/RankCard";
import RankListItem from "../../components/StuRank/RankListItem";
import { allRankers } from "../../constants/rank";



export default function StuRanking({ navigation }) {
    // 1. 데이터 가공 로직
    const rawTopThree = allRankers.slice(0, 3);
    const topThree = [
        { data: rawTopThree[1], displayRank: 2 },
        { data: rawTopThree[0], displayRank: 1 },
        { data: rawTopThree[2], displayRank: 3 }
    ];
    const restRankers = allRankers.slice(3);

    const getRankColor = (rank) => {
        if (rank === 1) return '#FCBE09';
        if (rank === 2) return '#B3B1B1';
        if (rank === 3) return '#BD7E25';
        return colors.gray100;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StudentHeader />
            <View style={styles.nav}>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('StuHome')}>
                    <Text style={styles.navButtText}>홈</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButt}>
                    <Text style={[styles.navButtText, styles.now]}>랭킹</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButt} onPress={() => navigation.navigate('StuProfile')}>
                    <Text style={styles.navButtText}>프로필</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.topThreeContainer}>
                    {topThree.map((item) => (
                        <RankCard
                            key={item.data.id}
                            item={item.data}
                            displayRank={item.displayRank}
                            rankColor={getRankColor(item.displayRank)}
                        />
                    ))}
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.listBox}>
                        {restRankers.map((item, index) => (
                            <RankListItem key={item.id} item={item} index={index} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    scrollView: {
        width: '100%'
    },

    nav: {
        flexDirection: 'row',
        backgroundColor: colors.gray100,
        width: '90%',
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 3,
        borderRadius: 5,
        marginTop: 20
    },
    navButt: { width: '32%', height: 25, justifyContent: 'center' },
    navButtText: { textAlign: 'center', fontWeight: '500', color: colors.textBlack },
    now: { backgroundColor: 'white', borderRadius: 5, height: 25, elevation: 3 },

    topThreeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 8,
        marginTop: 20,
        marginBottom: 10
    },

    listContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    listBox: {
        width: 360,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.gray100,
        overflow: 'hidden'
    },
});