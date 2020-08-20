import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

const CommentWrite = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Message</Text>
            </View>
            <TouchableHighlight
                underlayColor='#007bff'
                onPress={() => alert('Pressed!')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>send</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};

export default CommentWrite;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        height: 300
    },

    button: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },

    buttonText: {
        color: '#fff'
    }

});
