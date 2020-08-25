import React, { useContext, useEffect } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Text
} from 'react-native';

import { UserContext } from '../Context/User';

import SplashScreen from 'react-native-splash-screen';
import TopPicture from '../components/TopPicture';
import Items from '../data/pictures';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = () => {

    const { login } = useContext(UserContext);

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
                    <Text style={styles.textStyle}>YB94</Text>
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
                    style={{ marginBottom: 24, backgroundColor: '#FEE500', borderColor: '#FEE500' }}
                    label_style={{ color: "#000000" }}
                    label="Kakao 로그인"
                    onPress={() => {
                        login('dev.yakuza@gmail.com', 'password');
                    }}
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
        paddingTop: 20
    },

    textStyle: {
        marginBottom: 40,
        fontSize: 34,
        color: "#333333",
        fontWeight: 'bold',
        alignSelf: 'center',    
        justifyContent: 'center', 
        alignItems: 'center' 
    }
  });
  
