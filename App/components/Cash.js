import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Cash = ({ cash }) => {
    
    const printStatus = (status) => {
        let showStatus = ""
        if (status === 0) {
            showStatus = "입금"
        }else if (status === 1) {
            showStatus = "출금"
        }

        return showStatus
    };

    const printDisplayName = (DisplayName, status) => {
        let name = DisplayName
        if (status === 1) {
            name = ""
        } else if (status === 0) {
            name = name + " "
        }
        return name
    };

    return (
        <View style={styles.cashBody}>
            <View style={styles.cashTitleStyle}>
                <Text style={styles.displayName}>{printDisplayName(cash.display_name, cash.status)}{cash.description}</Text>
                <Text style={styles.money}>{cash.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </View>
            <View style={styles.cashDateStyle}>
                <Text style={styles.status}>{printStatus(cash.status)}</Text>
                <Text style={styles.date}>{cash.date}</Text>
            </View>
        </View>
    )
};

export default Cash;

const styles = StyleSheet.create({
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
