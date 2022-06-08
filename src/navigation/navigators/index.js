import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    )
}

export default AppNavigator;