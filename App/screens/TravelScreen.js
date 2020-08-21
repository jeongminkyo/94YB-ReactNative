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
        "id": 24,
        "title": "제주 맛집 리스트",
        "context": "",
        "user_id": 1,
        "created_at": "2018-12-07 13:23:59",
        "display_name": "관리자",
        "attachments": [
        {
        "id": 149,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/149/473B7054-6A89-4CB0-9D7B-0A376050D86B.jpeg"
        },
        {
        "id": 150,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/150/554CB737-E67F-40EA-B890-7FC47DF9C53C.jpeg"
        },
        {
        "id": 151,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/151/22450592-E2B6-4BC7-9BAE-221CD5D0D35B.jpeg"
        },
        {
        "id": 152,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/152/982331D8-A55D-4176-9DE7-8732D0DA8062.jpeg"
        },
        {
        "id": 153,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/153/DF6EEFA9-31F0-4A48-8F89-90CEA671AF71.jpeg"
        },
        {
        "id": 154,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/154/36438BA0-A64E-489C-8F2B-168D51B6BEF2.jpeg"
        },
        {
        "id": 155,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/155/3F7866BD-7493-4949-AAC1-17BFE5766ABE.jpeg"
        },
        {
        "id": 156,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/156/1F3CFA5E-5CE6-400D-AD76-62B64A2FB440.jpeg"
        },
        {
        "id": 157,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/157/7C9EED4A-1B0F-40E7-B77C-5540AA4A612C.jpeg"
        }
        ],
        "comments": []
        },
        {
        "id": 17,
        "title": "삿포로",
        "context": "",
        "user_id": 1,
        "created_at": "2018-11-17 06:59:14",
        "display_name": "관리자",
        "attachments": [
        {
        "id": 135,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/135/03AFB8C9-0F58-454B-9E44-4C9E1B0823A3.jpeg"
        },
        {
        "id": 136,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/136/46E326BF-C64F-4B64-B6F6-C7CC6521CCAE.jpeg"
        },
        {
        "id": 137,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/137/EAE30031-8BD8-423A-9721-A3D780BBB6B9.jpeg"
        },
        {
        "id": 138,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/138/F2553A1A-E637-4147-B235-3B44819EF8D1.jpeg"
        },
        {
        "id": 139,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/139/76D74D6C-6AC0-413E-AB12-C66D42AD0D39.jpeg"
        },
        {
        "id": 140,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/140/CF806B54-F3DE-4DF8-A25B-C6094519C4C5.jpeg"
        },
        {
        "id": 141,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/141/02321E3B-DC8F-4F6A-8C54-47808B707C9A.jpeg"
        },
        {
        "id": 142,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/142/2C14437A-F729-4A2A-9347-EFF18358D6B1.jpeg"
        },
        {
        "id": 143,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/143/71CEB5FA-4BB7-46DE-99E9-5996B11A3762.jpeg"
        },
        {
        "id": 144,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/144/6F491808-745F-49BF-A98E-D416117B633D.jpeg"
        },
        {
        "id": 145,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/145/C5183EA4-9100-442B-A17B-9CFF55BC21BE.jpeg"
        },
        {
        "id": 146,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/146/F6E57D11-0234-49F3-ACBE-F767274B4046.jpeg"
        },
        {
        "id": 147,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/147/B160EF84-CEDB-4E3E-B452-FDA0099400D6.jpeg"
        },
        {
        "id": 148,
        "url": "https://94yb.s3.amazonaws.com/uploads/travel_post_attachment/s3/148/4EE0F984-A275-4026-A132-1F041C0A13F4.jpeg"
        }
        ],
        "comments": []
        }
    ]

const TravelScreen = () => {
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