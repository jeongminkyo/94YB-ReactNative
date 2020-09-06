import React, { useContext, useEffect } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';

import { UserContext } from 'context/User';

import SplashScreen from 'react-native-splash-screen';
import TopPicture from 'components/TopPicture';
import Items from 'data/pictures';
import Button from 'components/Button';

const LoginScreen = ({ navigation }) => {

    const { googleLogin } = useContext(UserContext);

    useEffect(() => {
        SplashScreen.hide();
      }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.picture}>
                <TopPicture
                    items={Items} />
            </View>
            <SafeAreaView style={styles.content}>
                <View style={styles.FormContainer}>
                <Image
                style={styles.image}
                source={require('../images/title.png')}/>
                    <Button
                    style={{ backgroundColor: '#4285F4', borderColor: '#4285F4' }}
                    label_style={{ color: "#FFFFFF" }}
                    label="Google 로그인"
                    icon={{ iosName: 'ios-logo-google', aosName:'md-logo-google', size: 15, color: 'white' }}
                    onPress={googleLogin}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
    },

    picture: {
        flex: 1,
        height: 408
    },

    content: {
        flex: 1
    },
    
    FormContainer: {
        width: '100%',
        padding: 40,
        paddingTop: 0
    },

    image: {
        height:150,
        width:'100%',
        resizeMode: 'center'
    }
  });
  
