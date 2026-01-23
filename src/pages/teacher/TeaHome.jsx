import { FlatList, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colors"
import Icon from 'react-native-vector-icons/Feather';
import Mission from "../../components/TeaHome/Mission";
import { useEffect, useState, useMemo } from "react";
import axiosInstance from "../../utils/axiosInstance";

export default function TeaHome({ navigation }) {
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getVolunteer();
    }, []); 
    
    const getVolunteer = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get('/volunteer/');
            setVolunteers(response.data.data); 
            console.log(response.data.data);
        } catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            const response = await axiosInstance.get('/volunteer/');
            setVolunteers(response.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setRefreshing(false);
        }
    };

    // useMemo로 필터링된 volunteers를 메모이제이션
    const filteredVolunteers = useMemo(() => {
        if (!searchQuery.trim()) return volunteers;
        
        const query = searchQuery.toLowerCase();
        
        return volunteers.filter((volunteer) => {
            const workName = volunteer.workName?.toLowerCase() || '';
            const teacherName = volunteer.teacherName?.toLowerCase() || '';
            const location = volunteer.location?.toLowerCase() || '';
            
            return workName.includes(query) || 
                   teacherName.includes(query) || 
                   location.includes(query);
        });
    }, [volunteers, searchQuery]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput 
                    placeholder="봉사명, 호출 선생님 또는 장소로 검색" 
                    style={styles.search} 
                    placeholderTextColor={colors.gray200}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <Icon name='search' size={23} color={colors.gray300}/>
            </View>
            <TouchableOpacity style={styles.create} onPress={() => navigation.navigate('TeaGenerate1')}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>심부름 생성하기</Text>
            </TouchableOpacity>
            {loading && !refreshing && 
                <Text style={{marginTop: 20, color: colors.gray300}}>로딩 중...</Text>
            }
            <FlatList
                data={filteredVolunteers}
                keyExtractor={(volunteer) => volunteer.id.toString()}
                renderItem={({ item }) => <Mission volunteer={item} navigation={navigation}/>}
                style={styles.lists}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.buttonOrangeEnabled]}
                        tintColor={colors.buttonOrangeEnabled} 
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: 'white'
    },
    searchBox : {
        borderWidth: 1,
        width : '90%',
        borderRadius: 10,
        borderColor: colors.gray200,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search : {
        color: colors.inputText,
        paddingLeft: 20,
        height : 50,
        width: '90%'
    },
    create : {
        backgroundColor: colors.buttonOrangeEnabled,
        width: '90%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    },
    lists : {
        width: '90%',
        marginTop: 20,
        marginBottom: 30
    }
});