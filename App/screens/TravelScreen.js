import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    RefreshControl,
    Alert,
    FlatList
} from 'react-native';

import Post from '../components/Post';
import GoToTopButton from '../components/GoToTopButton';
import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';

import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';


const TravelScreen = () => {
    
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPages] = useState(1);
    const [totalPage, setTotalPages] = useState(1);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setPages(1);
        setRefreshing(false);
    }, []);

    const getPostInfo = async (page) => {
        try {
            const res = await fetch(`https://yb94.name/api/v1/travel_posts?page=${page}`);
            const json = await res.json();
            if (page === 1) {
                setPosts([...json.travel_posts])
            } else {
                setPosts([...posts, ...json.travel_posts]);
            }
            setTotalPages(json.total_page)
        }
        catch (error) {
            showError('알 수 없는 에러가 발생했습니다.');
        }
    }

    const onEndReached = () => {
        if (!onEndReachedCalledDuringMomentum) {
            if (page < totalPage) {
                setPages(page + 1)
            }
            onEndReachedCalledDuringMomentum = true;
          }
    }

    const showError = (message) => {
        setTimeout(() => {
            Alert.alert(message)
        }, 500)
    }

    const renderItem = ({ item }) => {
        return (
            <Post post={item}/>
        );
    };

    useEffect(() => {
        getPostInfo(page);
    }, [page]);
    
    return (
        <View style={styles.container}>
            <FlatList
                ref={(c) => { this.flatlist = c }}
                ListHeaderComponent={() => (
                    <View style={styles.picture}>
                        <TopPicture
                            items={Items} />
                    </View>
                )}
                keyExtractor={post => post.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
                data={posts}
                renderItem={renderItem}
                initialNumToRender={7}
                onEndReached={onEndReached}
                onEndReachedThreshold={0}
                onMomentumScrollBegin={() => { onEndReachedCalledDuringMomentum = false; }}
                initialNumToRender={5}
                maxToRenderPerBatch={10}
                windowSize={10}
            />
            <GoToTopButton />
        </View>
    );
}

export default TravelScreen;

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