import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

import CommentList from './CommentList';

const Post = ({ post }) => {
    return (
        <View>
            <View style={styles.headerStyle}>
                <Text style = {[styles.headerTitle, {paddingTop: 10}]} >{post.title}</Text>
                <Text style = {[styles.headerDisplayName, {paddingTop: 10}]} >{post.display_name}</Text>
            </View>
            <View style={styles.subHeaderStyle}>
                <Text style = {[styles.subHeaderCreatedAt, {paddingTop: 10}]} >{post.created_at}</Text>
            </View>
            <View style={styles.contentStyle}>
                <Text style={styles.contentTextStyle}>{post.context}</Text>
                {
                    post.attachments.map((attachment) => <Image
                        style={styles.imageStyle}
                        source={{ uri: attachment.url }}
                        key={attachment.id}
                    />)
                }
            </View>
            <CommentList
                comments={post.comments}
            />
        </View>
    )
};

export default Post;

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
