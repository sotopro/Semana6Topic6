import React from 'react';
import { ActivityIndicator } from 'react-native';
import Root from './src/index';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    latoBlack: require('./assets/fonts/Lato-Black.ttf'),
    latoBold: require('./assets/fonts/Lato-Bold.ttf'),
    latoItalic: require('./assets/fonts/Lato-Italic.ttf'),
    latoLight: require('./assets/fonts/Lato-Light.ttf'),
    latoRegular: require('./assets/fonts/Lato-Regular.ttf'),
    latoThin: require('./assets/fonts/Lato-Thin.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }
  return (
    <Root />
  );
}

