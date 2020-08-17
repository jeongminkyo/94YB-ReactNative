import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

import Comment from './Comment';

const CommentList = ({ comments }) => {
    return (
        <View>
            <View style={styles.headerStyle}>
                <Text style = {[styles.headerTitle, {paddingTop: 10}]} >댓글</Text>
                <Text style = {[styles.headerDisplayName, {paddingTop: 10}]} >0</Text>
            </View>
            <View style={styles.contentStyle}>
                {
                    comments.map((comment, index) => <Comment
                        comment={comment}
                        key={comment.id}
                    />)
                }
            </View>
        </View>
    )
};

export default CommentList;

const styles = StyleSheet.create({
    headerStyle: {

    },

    headerTitle: {

    },

    headerDisplayName: {

    },

    subHeaderStyle: {

    },

    subHeaderCreatedAt: {

    },
    
    contentStyle: {

    },

    contentTextStyle: {

    },

    imageStyle: {
        width: 200,
        height: 200
    },
});
