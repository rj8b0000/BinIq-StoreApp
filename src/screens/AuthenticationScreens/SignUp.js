import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={{ height: hp(7) }} />
                <View style={{ height: hp(15), width: wp(100), padding: '5%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', fontSize: hp(3.6), color: '#14BA9C' }}>Start My BinIQ Profile</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', fontSize: hp(2), color: '#524B6B', marginTop: '5%' }}>Register your account today and gain access to comprehensive tools and resources designed to optimize your reselling journey.</Text>
                </View>
                <View style={{ padding: '5%' }}>
                    <Text style={styles.label}>Full Name</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='John Doe'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>Email</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>Conform Password</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('QuizScreen')}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: '9%' }}>
                    <Text style={{ color: '#524B6B', fontSize: hp(2.3), fontFamily: 'Nunito-SemiBold', textAlign: 'center' }}>
                        have an account yet? {''}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#14BA9C', fontSize: hp(2.3), fontFamily: 'Nunito-SemiBold', textAlign: 'center', textDecorationLine: 'underline' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: wp(40),
        height: hp(10.5),
    },
    vector: {
        flex: 1,
        width: wp(100),
        height: hp(100),
    },
    logoText: {
        fontFamily: 'Nunito-SemiBold',
        color: '#000',
        fontSize: hp(2.5)
    },
    cityVector: {
        position: 'absolute',
        width: wp(100),
        bottom: 0
    },
    label: {
        color: 'black',
        fontFamily: 'Nunito-SemiBold',
        fontSize: hp(2.2),
        marginTop: '3%'
    },
    gettingStarted: {
        backgroundColor: '#130160',
        width: '90%',
        height: hp(7),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})