import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Comment = ({ comment }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'https://img1.daumcdn.net/thumb/C30x30/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fblog%2Fadmin%2Fprofile_default_03.png' }}
                    resizeMode={'contain'}
                />
            </View>
            <View style={styles.commentView}>
                <View style={styles.commentStyle}>
                    <Text style = {styles.DisplayName}>{comment.display_name}</Text>
                    <Text style = {styles.createdAt}>{comment.created_at}</Text>
                </View>
                <View>
                    <Text style = {styles.content}>{comment.content}</Text>
                </View>
            </View>
        </View>
    )
};

export default Comment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    imageView: {
        flex: 1,
        marginTop: 30
    },

    commentView: {
        flex: 7
    },

    imageStyle: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },

    commentStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 29,
    },

    DisplayName: {
        fontSize: 13,
        color: '#9199a4'
    },
    
    createdAt: {
        fontSize: 12,
        color: '#9199a4',
        paddingLeft: 14
    },

    content: {
        color: '#404040',
        fontSize: 14,
        marginTop: 5
    }
});
