import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GreenCheck from '../../../assets/green_check.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PayWall = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: hp(7) }} />
            <View style={{ width: '100%', height: hp(18), alignItems: 'center' }}>
                <Image source={require('../../../assets/animated_tick.gif')} style={{ width: '50%', height: '100%' }} />
            </View>
            <View style={{ height: hp(50), marginTop: '10%', marginHorizontal: '7.5%', justifyContent: 'space-between' }}>
                <View style={{ height: '23%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', color: '#14BA9C', fontSize: wp(7), textAlign: 'center' }}>Access Your Library Today!</Text>
                </View>
                <View style={{ height: '70%', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Upload and manage your scans in the library.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Largest Bin Store Network</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}View Trending items from Bin Stores Near You</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Reseller Dashboard Access</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Historical Data Access</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Customization Options</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.gettingStarted}>
                <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.2) }}>Access Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PayWall

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gettingStarted: {
        backgroundColor: '#130160',
        width: '90%',
        height: hp(7),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '15%'
    },
})