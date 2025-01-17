import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window')
const ChangePassword = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={require('../../../assets/vector_1.png')} style={styles.vector}>
                <View style={styles.header}>
                    <View style={styles.headerChild}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <MaterialIcons name='arrow-back-ios' color={'#0D0D26'} size={25} />
                        </Pressable>
                        <Text style={styles.headerText}>Change Password</Text>
                    </View>
                </View>
                <View style={{ padding: '5%' }}>
                    <Text style={styles.label}>Current Password</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='johndoe@gmail.com'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <Text style={styles.label}>New Password</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='Enter old password'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={styles.label}>Confirm New Password</Text>
                    <View style={{ backgroundColor: '#fff', width: '100%', height: hp(7.5), alignSelf: 'center', borderRadius: 8, marginVertical: '2%', paddingHorizontal: '5%', justifyContent: 'center', borderWidth: 0.4, borderColor: '#524B6B' }}>
                        <TextInput
                            placeholder='Enter new password'
                            style={{ fontFamily: 'Nunito-Regular', color: '#000', fontSize: hp(2.2) }}
                            placeholderTextColor={'gray'}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('HomeNavigataor')}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Change Password</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        width: wp(100),
        height: hp(7),
        marginTop: '10%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerChild: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(61),
        justifyContent: 'space-between'
    },
    headerText: {
        fontFamily: 'Nunito-Bold',
        fontSize: hp(3),
        textAlign: 'left',
        color: '#0D0140'
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
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#C0C0C0', // Gray color for the lines
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        fontFamily: 'Nunito-SemiBold',
        color: '#A9A9A9', // Light gray color for the text
    },

})