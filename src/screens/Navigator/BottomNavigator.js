import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../MainScreens/HomeScreen';
import FavouratiesScreen from '../MainScreens/FavouratiesScreen';
import MyLibrary from '../MainScreens/MyLibrary';
import SettingsScreen from '../MainScreens/SettingsScreen';
import CustomTabBar from '../../Components/CustomTabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Image } from 'react-native-svg';
import MapScreen from '../MainScreens/MapScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeScreenMain from '../MainScreens/HomeScreenMain';
import CameraScan from '../../../assets/CameraScan.svg';
import Home from '../../../assets/Home.svg';
import HomeFocused from '../../../assets/HomeFocused.svg';
import Heart from '../../../assets/Heart.svg';
import HeartFocused from '../../../assets/HeartFocused.svg';
import Library from '../../../assets/Library.svg';
import LibraryFocused from '../../../assets/LibraryFocused.svg';
import User from '../../../assets/User.svg';
import UserFocused from '../../../assets/user_focus.svg'
import UserProfileScreen from '../MainScreens/UserProfileScreen';


const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    function getWidth() {
        let width = Dimensions.get('window').width;
        width = width - 100
        return width / 5
    }
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        position: 'absolute',
                        height: hp(8),
                        borderRadius: 10,
                        shadowColor: '#000',
                        shadowOpacity: 0.06,
                        shadowOffset: {
                            width: 10,
                            height: 10
                        },
                    },
                }}
            >
                <Tab.Screen
                    name='HomeScreen'
                    component={HomeScreenMain}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                {
                                    focused ? <HomeFocused height={hp(3.5)} /> :
                                        <Home size={hp(3.5)} />
                                }
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start();
                        }
                    })}
                />
                <Tab.Screen
                    name='FavouritesScreen'
                    component={FavouratiesScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                {
                                    focused ? <HeartFocused height={hp(3.5)} /> :
                                        <Heart size={hp(3.5)} />
                                }
                            </View>
                        ),
                        tabBarStyle: { display: 'none' }
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth(),
                                useNativeDriver: true
                            }).start();
                        }
                    })} />
                <Tab.Screen
                    name='MapScreen'
                    component={MapScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <TouchableOpacity>
                                <View style={{ width: 65, height: 65, backgroundColor: '#14BA9C', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
                                    <CameraScan size={hp(4.2)} color={'white'} />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <Tab.Screen
                    name='MyLibrary'
                    component={MyLibrary}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                {
                                    focused ? <LibraryFocused height={hp(3.5)} /> :
                                        <Library size={hp(3.5)} />
                                }
                            </View>
                        )
                    }}
                    listeners={({ navigation, route }) => ({
                        // Onpress Update....
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 3,
                                useNativeDriver: true
                            }).start();
                        }
                    })} />
                <Tab.Screen
                    name='UserProfileScreen'
                    component={UserProfileScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => (
                            <View style={{ position: 'absolute' }}>
                                {
                                    focused ? <UserFocused height={hp(3.5)} /> :
                                        <User size={hp(3.5)} />
                                }
                            </View>
                        ),
                        tabBarStyle: { display: 'none' }
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 4,
                                useNativeDriver: true
                            }).start();
                        }
                    })} />


            </Tab.Navigator>
        </>


    )
}

export default BottomNavigator

const styles = StyleSheet.create({})







