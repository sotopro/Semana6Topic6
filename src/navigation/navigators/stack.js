import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screens/index';


const MainNavigation = createStackNavigator();

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