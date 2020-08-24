import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

const GoToTopButton = () => {
    const goToTop = () => {
        this.flatlist.scrollToIndex({ index: 0, viewPosition: -1 })
    }
    
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={goToTop}
            style={styles.TouchableOpacityStyle}>
            <Image
                source={{ uri:'https://uxwing.com/wp-content/themes/uxwing/download/02-arrow/angle-circle-arrow-up.png' }}
                style={styles.FloatingButtonStyle}
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
        resizeMode: 'contain',
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius:30,
      },
})
