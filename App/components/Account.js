import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    ToastAndroid,
    Platform,
    Alert
} from 'react-native';
import Clipboard from "@react-native-community/clipboard";

const Account = ({ bank, accountNum }) => {
    
    const copyClipBoard = () => {
        Clipboard.setString(accountNum);
        let msg = '계좌번호가 복사되었습니다.'

        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert(null, msg);
        }
    }

    return (
        <TouchableHighlight
        underlayColor='#F6F6F6'
        onPress={copyClipBoard}
        style={styles.container}
        >
            <>
                <View style={styles.colorLabel} />
                <View style={styles.inner}>
                    <Text style={styles.title}>회비 계좌</Text>
                    <View style={styles.metaWrapper}>
                        <View style={styles.metaItem}>
                            <Text style={styles.metaLabel}>{bank}</Text>
                            <Text style={styles.metaValue}>{accountNum}</Text>
                        </View>
                    </View>
                </View>
            </>
        </TouchableHighlight>
        
    );
}

export default Account;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1
    },

    colorLabel: {
        width: 4,
        backgroundColor: 'rgb(0, 24, 168)'
    },

    inner: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    metaWrapper: {
        marginTop: 7,
    },

    metaItem: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },

    metaLabel: {
        width: 64,
        fontSize: 14,
        color: '#666666',
    },

    metaValue: {
        fontSize: 14,
        color: 'black',
    },
})