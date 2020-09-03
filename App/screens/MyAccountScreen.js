import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import Account from '../components/Account';
import Icon from '../components/Icon';
import TopPicture from '../components/TopPicture';
import Cash from '../components/Cash';
import Items from '../data/pictures';

const MyAccountScreen = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [cashes, setCashes] = useState([]);
    const [page, setPages] = useState(1);
    const [totalPage, setTotalPages] = useState(1);
    const [bank, setBank] = useState('');
    const [accountNum, setAccountNum] = useState('');

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setPages(1)
        setRefreshing(false);
    }, []);

    const getCashInfo = async (page) => {
        try {
            const res = await fetch(`https://yb94.name/api/v1/14/cashes?page=${page}`);
            const json = await res.json();
            if (page === 1) {
                setCashes([...json.cashes]);   
            } else {
                setCashes([...cashes, ...json.cashes]);
            }
            setTotalPages(json.total_page)
        }
        catch (error) {
            showError('알 수 없는 에러가 발생했습니다.');
        }
    }

    const getAccountInfo = async () => {
        try {
            const res = await fetch(`https://yb94.name/api/v1/account_info`);
            const json = await res.json();
            setBank(json.bank)
            setAccountNum(json.account_num)
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

    useEffect(() => {
        getCashInfo(page)
    },[page]);

    useEffect(() => {
        getAccountInfo()
    }, []);

    return (
            <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />}
            >
                <View style={styles.picture}>
                    <TopPicture
                        items={Items} />
                </View>
                <View style={styles.content}>
                    <Account bank={bank} accountNum={accountNum} />
                    <View style={styles.cashContainer}>
                        <View style={styles.inner}>
                            <Text style={styles.title}>회비 납부 내역</Text>
                            <View style={styles.body}>
                            {
                                cashes.map((cash) => <Cash
                                    cash={cash}
                                    key={cash.id}
                                />)
                            }
                            </View>
                            <TouchableOpacity style={styles.button} onPress={onEndReached}>
                                <Icon 
                                iosName="ios-chevron-down-outline"
                                andName="md-chevron-down-outline"
                                color={'black'}
                                size={30}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
    );
}

export default MyAccountScreen;

styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },

    picture: {
        flex: 1,
        height: 408
    },
    
    content: {
        margin: 10
    },

    cashContainer: {
        marginTop: 12,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1,
    },
    
    inner: {
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    body: {
        marginTop: 12,
    },

    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})