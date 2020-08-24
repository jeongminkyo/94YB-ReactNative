import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

const GoToTopButton = () => {
    const goToTop = () => {
        this.flatlist.scrollToOffset({ x: 0, y: 0, animated: true })
    }
    
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={goToTop}
            style={styles.TouchableOpacityStyle}>
            <Image
                source={{ uri:'https://uxwing.com/wp-content/themes/uxwing/download/02-arrow/angle-circle-arrow-up.png' }}
                style={styles.FloatingButtonStyle}
                borderRadius={50}
            />
        </TouchableOpacity>
    )
}

export default GoToTopButton;

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
    
      FloatingButtonStyle: {
        resizeMode: 'cover',
        width: 50,
        height: 50,
        backgroundColor: 'white'
      },
})
