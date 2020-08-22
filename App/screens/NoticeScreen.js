import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';

import Post from '../components/Post';
import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';

import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const NoticeScreen = () => {

    const [refreshing, setRefreshing] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        getPostInfo(1).then(res => setRefreshing(false));
    }, []);

    const getPostInfo = async (page) => {
        try {
            const res = await fetch(`https://yb94.name/api/v1/notices?${page}`);
            const json = await res.json();
            setPosts(json.notices);
        }
        catch (error) {
            showError('알 수 없는 에러가 발생했습니다.');
        }
    }

    const showError = (message) => {
        setTimeout(() => {
            Alert.alert(message)
        }, 500)
    }

    useEffect(() => {
        getPostInfo(1);
    }, []);

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
            <View style={styles.picture}>
                <TopPicture
                    items={Items} />
            </View>
            {
                posts.map((post, index) => 
                <Post 
                    post={post}
                    key={index}
                />)
            }
        </ScrollView>
    );
}

export default NoticeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    
      contentContainer: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: isIphoneX() ? getBottomSpace() : 16,
    },

    picture: {
        flex: 1,
        height: 408
    },
    carousels: {
        flex: 1,
        width: '80%',
        alignContent: 'center'
    },
    contentContainer: {
        paddingBottom: isIphoneX() ? getBottomSpace() : 16,
      },
  });