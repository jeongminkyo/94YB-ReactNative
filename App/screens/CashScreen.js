import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';
import Cash from '../components/Cash';

const cashes = [
    {
    "id": 332,
    "date": "2020-07-30",
    "money": 15000,
    "description": "7월 정규 회비",
    "status": 0,
    "display_name": "김용진"
    },
    {
    "id": 331,
    "date": "2020-07-30",
    "money": 15000,
    "description": "8월 정규 회비",
    "status": 0,
    "display_name": "권대훈"
    },
    {
    "id": 330,
    "date": "2020-07-30",
    "money": 15000,
    "description": "7월 정규 회비",
    "status": 0,
    "display_name": "권대훈"
    },
    {
    "id": 329,
    "date": "2020-07-30",
    "money": 15000,
    "description": "6월 정규 회비",
    "status": 0,
    "display_name": "권대훈"
    },
    {
    "id": 328,
    "date": "2020-07-27",
    "money": 20000,
    "description": "7월 정규 회비",
    "status": 0,
    "display_name": "정민교"
    },
    {
    "id": 327,
    "date": "2020-07-27",
    "money": 20000,
    "description": "7월 정규 회비",
    "status": 0,
    "display_name": "우남욱"
    },
    {
    "id": 326,
    "date": "2020-07-27",
    "money": 20000,
    "description": "7월 정규 회비",
    "status": 0,
    "display_name": "김민석"
    },
    {
    "id": 325,
    "date": "2020-07-22",
    "money": 20000,
    "description": "7월 정규 회비",
    "status": 0,
    "display_name": "박태현"
    }
]

const totalCash = {
    "total_cash": 1101679,
    "total_cash_update_at": "2020-07-30 15:09:50"
}

const CashScreen = () => {
    return (
        <ScrollView
            style={styles.container}>
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
                        <Text style={styles.money}>{totalCash.total_cash.toLocaleString()}</Text>
                    </View>
                    <View style={styles.cashDateStyle}>
                        <Text style={styles.status}>업데이트</Text>
                        <Text style={styles.date}>{totalCash.total_cash_update_at}</Text>
                    </View>
                </View>
                {
                    cashes.map((cash, index) => 
                    <Cash 
                        cash={cash}
                        key={index}
                    />)
                }
            </View>
        </ScrollView>
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