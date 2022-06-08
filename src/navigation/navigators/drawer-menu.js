import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";
import { Home } from "../../screens/index";
const UserImage = require('../../../assets/user.png');

const MENUS = [
    {
        id: 1,
        name: "Home",
        label: "Home",
    },
    {
        id: 2,
        name: "Categories",
        label: "Categories",
    },
    {
        id: 3,
        name: "Products",
        label: "Products",
    },
    {
        id: 4,
        name: "Profile",
        label: "Profile",
    },
    {
        id: 5,
        name: "Settings",
        label: "Settings",
    },
    {
        id: 6,
        name: "Cart",
        label: "Cart",
    },
    {
        id: 7,
        name: "Help",
        label: "Help",
    },
    {
        id: 8,
        name: "Logout",
        label: "Logout",
    }
]

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View style={styles.customDrawerContent}>
            <View style={styles.headerDrawer}>
                <View style={styles.headerContentContainer}>
                    <View style={styles.headerImageContainer}>
                        <Image source={UserImage} style={styles.headerImage} />
                    </View>
                    <View style={styles.headerUserInfo}>
                        <Text style={styles.headerName}>Daniel Soto</Text>
                        <Text style={styles.headerLocation}>Lima, Peru</Text>
                    </View>
                </View>
            </View>
            <DrawerContentScrollView
                scrollEnabled={false}
                contentContainerStyle={styles.drawerContentContainerStyle}
                style={styles.drawerContentItemMenu}
            >
                {MENUS?.map((menu, idx) => (
                    <DrawerItem
                        activeTintColor="#DABFFF"
                        inactiveTintColor="#fff"
                        focused={activeIndex === idx}
                        key={idx}
                        label={({ focused }) => {
                            return (
                                <View style={styles.drawerMenuContainerItemText}>
                                    <View style={styles.drawerMenuLineIndicator(focused)}/>
                                    <Text style={styles.drawerMenuItemText(focused)}>{menu.label}</Text>
                                </View>
                            )
                        }}
                        >

                        </DrawerItem>
                ))}
            </DrawerContentScrollView>
        </View>
    )
}

const DrawerMenu = () => {
    return (
        <View style={styles.container}>
            <Drawer.Navigator
                drawerHideStatusBarOnOpen={true}
                screenOptions={{
                    headerShown: false,
                    drawerType:"slide",
                    overlayColor: "transparent",
                    drawerStyle: styles.drawer,
                    sceneContainerStyle: styles.sceneContainerStyle,
                  }}
                initialRouteName="Home"
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
            <Drawer.Screen name="Home">
                {props => <Home {...props} />}
            </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    drawer: {
        flex: 1,
        width: '60%',
        backgroundColor: '#fffded',
    },
    sceneContainerStyle : {
        backgroundColor: 'transparent' 
    },
    customDrawerContent: {
        flex: 1,
    },
    headerDrawer: {
        width: 200,
        height: 105,
        borderBottomEndRadius: 105 / 2,
        backgroundColor: '#DABFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage: {
        width: 35,
        height: 35,
    },
    headerContentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerUserInfo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerName: {
        fontSize: 14,
        fontFamily: 'latoRegular'

    },
    headerLocation: {
        fontSize: 12,
        fontFamily: 'latoBold'
    },
    drawerContentItemMenu: {
        marginLeft: -15,
    },
    drawerContentContainerStyle: {},
    drawerMenuContainerItemText: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    drawerMenuLineIndicator: (focused) => ({
        width: 4,
        height: 30,
        marginRight: 25,
        backgroundColor: focused ? '#907AD6' : 'transparent',
    }),
    drawerMenuItemText: (focused) => ({
        fontSize: 14,
        fontFamily: focused ? 'latoBold' : 'latoRegular',
        color: '#212121'
    }),
});