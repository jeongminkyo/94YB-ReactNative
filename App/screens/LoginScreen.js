import React, { useContext, useEffect } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';

import { UserContext } from '../Context/User';

import SplashScreen from 'react-native-splash-screen';
import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {

    const { login, googleLogin } = useContext(UserContext);

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
                    <Input style={{ marginBottom: 16 }} placeholder="Email" />
                    <Input
                    style={{ marginBottom: 16 }}
                    placeholder="Password"
                    secureTextEntry={true}
                    />
                    <Button
                    style={{ marginBottom: 24, backgroundColor: '#333333' }}
                    label="로그인"
                    onPress={() => {
                        login('dev.yakuza@gmail.com', 'password');
                    }}
                    />
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
  
