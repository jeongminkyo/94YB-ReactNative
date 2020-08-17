import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import Post from '../components/Post';
import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';

import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const posts = [
    {
    "id": 34,
    "title": "2020년 1월 동계휴가 결산보고 ",
    "context": "https://docs.google.com/spreadsheets/d/1diAIj8hsVQh8sfdVUCjyAxgOVYM0XfILu36ZHloUM6k/edit#gid=0",
    "user_id": 1,
    "created_at": "2020-01-06 21:25:15",
    "display_name": "관리자",
    "attachments": [
                        {
                        "id": 77,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/77/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2020-01-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.24.12.png"
                        },
                        {
                        "id": 78,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/78/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2020-01-06_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.24.24.png"
                        }
    ],
    "comments": []
    },
    {
    "id": 33,
    "title": "2020년 술친게이들 동계 휴가 공지",
    "context": "일시 : 2020.01.04(토)  10시\r\n장소 : 양북 미니스톱 편의점\r\n숙소 : 경주 블루원 리조트",
    "user_id": 1,
    "created_at": "2020-01-02 12:09:41",
    "display_name": "관리자",
    "attachments": [
                        {
                        "id": 74,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/74/s0203_gallery_img01.jpg"
                        },
                        {
                        "id": 75,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/75/s0203_gallery_img02.jpg"
                        },
                        {
                        "id": 76,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/76/s0203_gallery_img03.jpg"
                        }
    ],
    "comments": []
    },
    {
    "id": 28,
    "title": "2019년 7월 하계휴가 결산보고",
    "context": "https://docs.google.com/spreadsheets/d/1mHM41SU62gIZ1AR1Y-CbCphlSmgkmlbgYSHfuE7QbA4/edit#gid=0",
    "user_id": 1,
    "created_at": "2019-08-07 05:21:42",
    "display_name": "관리자",
    "attachments": [
                        {
                        "id": 72,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/72/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2019-08-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.20.56.png"
                        },
                        {
                        "id": 73,
                        "url": "https://94yb.s3.amazonaws.com/uploads/notice_attachment/s3/73/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2019-08-07_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.17.29.png"
                        }
    ],
    "comments": []
    }
]

const NoticeScreen = () => {
    return (
        <ScrollView
            style={styles.container}>
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
    },
    
      contentContainer: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: isIphoneX() ? getBottomSpace() : 16,
    },

    picture: {
        flex: 1
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