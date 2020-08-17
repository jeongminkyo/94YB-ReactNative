import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import TopPicture from '../components/TopPicture';
import Carosel from '../components/Carosel';
import Items from '../data/pictures';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
                <View style={styles.picture}>
                    <TopPicture
                        items={Items} />
                </View>
                <View style={styles.carousels}>
                    <Carosel items={Items} />
                </View>
            
        </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    picture: {
        flex: 1
    },
    carousels: {
        flex: 1
    }
  });
  
