import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

import Comment from './Comment';

const CommentList = ({ comments }) => {
    return (
        <View style={styles.headerStyle}>
            <View style={styles.commentHeader}>
                <View style={styles.head}>
                    <Text style = {styles.headerTitle} >댓글</Text>
                    <Text style = {styles.headerDisplayName} >{comments.length}</Text>
                </View>
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
        borderTopColor: '#e2e5e9',
        borderTopWidth: 1,
        borderBottomColor: '#e2e5e9',
        borderBottomWidth: 1,
    },

    commentHeader: {
        marginTop: 3,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },

    head: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#9199a4',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },

    headerTitle: {
        fontSize: 15
    },

    headerDisplayName: {
        paddingLeft: 3,
        color: 'red'
    }
});
