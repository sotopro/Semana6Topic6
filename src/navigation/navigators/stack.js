import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/index';


const MainNavigation = createNativeStackNavigator();

const Stack = () => {
    return (
        <MainNavigation.Navigator initialRouteName='Home'>
            <MainNavigation.Screen 
                name='Home' 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </MainNavigation.Navigator>
    )
}

export default Stack;