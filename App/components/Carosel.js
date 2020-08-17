import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';

const Carosel = ({ items }) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 1,
                paddingEnd: 1
            }}>
            {
                items.map((item, index) => <Image
                    style={styles.image}
                    source={item.source}
                    key={index}
                />)
            }
        </ScrollView>
    )
};

export default Carosel;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  image: {
    flex: 1,
    
    resizeMode: 'cover', // or 'stretch'
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10
  }
});
