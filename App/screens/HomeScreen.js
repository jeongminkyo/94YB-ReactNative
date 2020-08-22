import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import TopPicture from '../components/TopPicture';
import Carosel from '../components/Carosel';
import Items from '../data/pictures';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.picture}>
                <TopPicture
                    items={Items} />
            </View>
            <View style={styles.carousels}>
                <Carosel items={Items} />
            </View>
        </ScrollView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    picture: {
        flex: 1,
        height: 408
    },
    carousels: {
        flex: 1,
        width: '80%',
        alignContent: 'center'
    }
  });
  
