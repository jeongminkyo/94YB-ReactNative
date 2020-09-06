import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    RefreshControl,
    Text,
    Alert,
    FlatList
} from 'react-native';

import TopPicture from 'components/TopPicture';
import GoToTopButton from 'components/GoToTopButton';
import Items from 'data/pictures';
import Cash from 'components/Cash';
  
const CashScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [cashes, setCashes] = useState([]);
    const [page, setPages] = useState(1);
    const [totalPage, setTotalPages] = useState(1);
    const [totalCash, setTotalCash] = useState({
        totalCash: 0,
        TotalCashUpdateAt: ''
    });

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setPages(1)
        setRefreshing(false);
    }, []);

    const getCashInfo = async (page) => {
        try {
            const res = await fetch(`https://yb94.name/api/v1/cashes?page=${page}`);
            const json = await res.json();
            if (page === 1) {
                setCashes([...json.cashes]);   
            } else {
                setCashes([...cashes, ...json.cashes]);
            }
            setTotalCash({
                totalCash: json.total_cash,
                TotalCashUpdateAt: json.total_cash_update_at
            });
            setTotalPages(json.total_page)
        }
        catch (error) {
            showError('알 수 없는 에러가 발생했습니다.');
        }
    }

    const onEndReached = () => {
        if (page < totalPage) {
            setPages(page + 1)
        }
    }

    const showError = (message) => {
        setTimeout(() => {
            Alert.alert(message)
        }, 500)
    }

    const renderItem = ({ item }) => {
        return (
            <Cash cash={item}/>
        );
    };

    useEffect(() => {
        getCashInfo(page)
    },[page]);

    return (
        <View style={styles.container}>
            <FlatList
                ref={(c) => { flatlist = c }}
                ListHeaderComponent={() => (
                    <View>
                        <View style={styles.picture}>
                            <TopPicture
                                items={Items} />
                        </View>
                        <View style={styles.cashContainer}>
                            <View style={styles.cashText}>
                                <Text style={styles.storkeLine}>──────────</Text>
                                <Text style={styles.cashTitle}>회비 관리</Text>
                                <Text style={styles.storkeLine}>──────────</Text>
                            </View>
                            <View style={styles.cashBody}>
                                <View style={styles.cashTitleStyle}>
                                    <Text style={styles.displayName}>총 회비</Text>
                                    <Text style={styles.money}>{totalCash.totalCash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                                </View>
                                <View style={styles.cashDateStyle}>
                                    <Text style={styles.status}>업데이트</Text>
                                    <Text style={styles.date}>{totalCash.TotalCashUpdateAt}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={cash => cash.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
                data={cashes}
                renderItem={renderItem}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.3}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}
            />
            <GoToTopButton />
        </View>
    );
}

export default CashScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    
    cashContainer: {
        flex: 1,
        borderTopColor: '#e2e5e9',
        borderTopWidth: 1,
        paddingTop: 40
    },

    cashTitle: {
        alignSelf: 'center',    
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize:15,
        paddingLeft: 20,
        paddingRight: 20
    },

    cashText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },

    storkeLine: {
        color: '#BEC5D0'
    },
    

    picture: {
        flex: 1,
        height: 408
    },
    

    cashBody: {
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 17,
        paddingBottom: 20,
        borderBottomColor: '#ecf0f5',
        borderBottomWidth: 1,
    },

    cashTitleStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: 25
    },

    cashDateStyle: {
        flex: 1,
        flexDirection: 'row'
    },

    displayName: {
        fontSize: 16,
    },

    money: {
        fontSize: 16
    },

    status: {
        color: '#ec5621',
    },

    date: {
        fontSize: 12,
        color: '#9199a4',
        paddingLeft: 12
    }

});