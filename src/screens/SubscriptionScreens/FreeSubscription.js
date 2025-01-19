import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import GreenCheck from '../../../assets/green_check.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const FreeSubscription = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ height: hp(7) }} />
            <View style={{ width: '85%', alignSelf: 'center', height: hp(10), borderRadius: 14, backgroundColor: '#334155', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontFamily: 'DMSans-Regular', fontSize: wp(3.4) }}>Subscrition</Text>
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontFamily: 'DMSans-Regular', fontSize: wp(6) }}>Premium</Text>
                </View>
            </View>
            <View style={{ height: hp(40), marginTop: '10%', marginHorizontal: '7.5%', justifyContent: 'space-between' }}>
                <View style={{ height: '23%' }}>
                    <Text style={{ fontFamily: 'Nunito-Bold', color: '#14BA9C', fontSize: wp(7) }}>Go to Premium: Verify Your Store Today!</Text>
                </View>
                <View style={{ height: '65%', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Verify Store Badge</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Exclusive Visiblity</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Access to Premium Suppliers</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Enhanced Store Profile</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Exclusive Training Access</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <GreenCheck size={30} />
                        <Text style={{ fontFamily: 'DMSans-SemiBold', color: '#64748B', fontSize: wp(4.7) }}>{'  '}Increased Sales Potential</Text>
                    </View>
                </View>
            </View>
            <View style={{ position: 'absolute', height: hp(33), bottom: 0, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#F1F5F9' }}>
                <View style={{ width: '100%' }}>
                    <Text style={{ color: '#121826', fontWeight: 'bold', fontSize: hp(3), alignSelf: 'center' }}>Pick your plan</Text>
                </View>
                <View style={{ width: '90%', height: '35%', flexDirection: 'row', alignSelf: 'center', marginVertical: '2%' }}>
                    {/* <View style={{ width: '33.5%', height: '100%', padding: '1%' }}>
                        <View style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: '#14BA9C', borderRadius: 8, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(2.5) }}>Tier 1</Text>
                            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#130160', fontSize: hp(2.2) }}>$29.97/{'\n'}month</Text>
                        </View>
                    </View> */}
                    <View style={{ width: '100%', height: '100%', padding: '1%' }}>
                        <View style={{ width: '100%', height: '100%', borderWidth: 2, borderColor: '#14BA9C', borderRadius: 8, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '5%' }}>
                            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(2.5) }}>Annually</Text>
                            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#130160', fontSize: hp(2.2) }}>$195/ annually</Text>
                        </View>
                    </View>
                    {/* <View style={{ width: '33.5%', height: '100%', padding: '1%' }}>
                        <View style={{ width: '100%', height: '100%', borderWidth: 1, borderColor: '#14BA9C', borderRadius: 8, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Nunito-Bold', color: '#000', fontSize: hp(2.5) }}>Tier 3</Text>
                            <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#130160', fontSize: hp(2.2) }}>$99.97/{'\n'}month</Text>
                        </View>
                    </View> */}
                </View>
                <TouchableOpacity style={styles.gettingStarted} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ fontFamily: 'Nunito-SemiBold', color: '#fff', fontSize: hp(2.5) }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FreeSubscription

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
        marginVertical: '4%'
    },
})