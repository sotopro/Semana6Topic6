import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";
import { Home } from "../../screens/index";

const Drawer = createDrawerNavigator();

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
                    sceneContainerStyle: styles.screneContainer,
                  }}
                initialRouteName="Home"
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
        backgroundColor: '#DABFFF'
    },
    drawer: {
        flex: 1,
        width: '60%',
        backgroundColor: 'transparent',
    }
});