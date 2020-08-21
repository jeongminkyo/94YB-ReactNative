import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const TopPitcure = ({ items }) => {
    const randNum = Math.floor(Math.random() * items.length)

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={items[randNum].source}>
                <View style={styles.overlay}>
                    <Text style = {[styles.textStyle, {paddingTop: 10}]} >YB94</Text>
                    <Text style = {[styles.subtextStyle, {paddingTop: 10}]} >간은 40대 얼굴은 30대 나이는 20대</Text>
                    <Text style = {[styles.subtextStyle, {paddingTop: 10}]} >마음만은 10대</Text>
                </View>
        </ImageBackground>
    )
};

export default TopPitcure;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover', // or 'stretch'
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },

  overlay: {
    backgroundColor:'rgba(0,0,0,0.4)',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', 
    alignContent: 'center' 
  },
  
  textStyle: {
    marginTop: 10,
    fontSize: 34,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',    
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  
  subtextStyle: {
    marginTop: 10,
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: 'center',
    alignItems: 'center'
  },
});
