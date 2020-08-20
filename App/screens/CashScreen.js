import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
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

const CashScreen = () => {
    return (
        <ScrollView
            style={styles.container}>
            <View style={styles.picture}>
                <TopPicture
                    items={Items} />
            </View>
            {
                cashes.map((cash, index) => 
                <Cash 
                    cash={cash}
                    key={index}
                />)
            }
        </ScrollView>
    );
}

export default CashScreen;

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