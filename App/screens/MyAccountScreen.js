import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import Account from '../components/Account';
import MyCash from '../components/MyCash';
import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';

const MyAccountScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.picture}>
                <TopPicture
                    items={Items} />
            </View>
            <View style={styles.content}>
                <Account />
                <View style={styles.cashContainer}>
                    <View style={styles.inner}>
                        <Text style={styles.title}>회비 납부 내역</Text>
                        <View style={styles.body}>
                            <MyCash />
                        </View>
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
})