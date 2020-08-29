import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import FitImage from 'react-native-fit-image';

import CommentList from './CommentList';
// import CommentWrite from './CommentWrite';

const Post = ({ post }) => {
    return (
        <View>
            <View style={styles.headerStyle}>
                <Text style = {[styles.headerTitle, {paddingTop: 10}]} >{post.title}</Text>
                <Text style = {[styles.headerDisplayName, {paddingTop: 10}]} >{post.display_name}</Text>
            </View>
            <View style={styles.contentBody}>
                <View style={styles.subHeaderStyle}>
                    <Text style = {[styles.subHeaderCreatedAt, {paddingTop: 10}]} >{post.created_at}</Text>
                </View>
                <View style={styles.contentStyle}>
                    <Text style={styles.contentTextStyle}>{post.context}</Text>
                    {
                        post.attachments.map((attachment) => <FitImage
                            style={styles.imageStyle}
                            source={{ uri: attachment.url }}
                            resizeMode={'contain'}
                            key={attachment.id}
                        />)
                    }
                </View>
            </View>
            <CommentList
                comments={post.comments}
            />
            {/* <CommentWrite /> */}
        </View>
    )
};

export default Post;
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 25,
        color: "#FFFFFF",
        alignSelf: 'center',    
        justifyContent: 'center', 
        alignItems: 'center'
    },

    headerTitle: {
        fontWeight: 'bold',
        fontSize: 24,
    },

    headerDisplayName: {
        fontSize: 12,
        color: "#9199A4",
        marginTop: 6
    },

    contentBody: {
        padding: 20
    },

    subHeaderStyle: {
        borderTopColor: '#9199a4',
        borderTopWidth: 1,
        borderBottomColor: '#ecf0f5',
        borderBottomWidth: 1,
        paddingBottom: 7,
    },

    subHeaderCreatedAt: {
        fontSize: 12,
        color: "#9199A4"
    },
    
    contentStyle: {
        marginTop: 34
    },

    contentTextStyle: {
        fontSize: 16,
        marginBottom: 10
    },

    imageStyle: {
        
    },
});
