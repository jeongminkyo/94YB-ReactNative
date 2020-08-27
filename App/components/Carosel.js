import React, {useRef, useState, useEffect} from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Platform,
  } from 'react-native';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

const Carosel = ({ items }) => {

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(items);
    }, []);

    const renderItem = ({item, index}, parallaxProps) => {
        return (
          <View style={styles.item}>
            <ParallaxImage
              source={item.source}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
          </View>
        );
    };


    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
    )
};

export default Carosel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },

  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },

  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
