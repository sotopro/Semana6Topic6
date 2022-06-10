import { useRef, useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Home = ({ navigation, route }) => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true })
    ]).start()

    Animated.sequence([
      Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
      Animated.spring(progress, { toValue: 0.5, useNativeDriver: true })
    ]).start()

    
  }, [])

const SIZE = 100;

const handleSize = () => {
  console.log('handleSize');
  Animated.sequence([
    Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
    Animated.spring(progress, { toValue: 0.5, useNativeDriver: true })
  ]).start()
}

  return (
    <View 
      style={styles.container}>
      <Animated.View style={[
        styles.square, 
        { 
          borderRadius: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [(0 * SIZE)/ 2, (1 * SIZE) / 2],
          }),
          opacity: progress,
          transform: [
            { scale },
            { rotate: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: ['0deg', '360deg']
            })}
          ] 
        }
      ]}
      >
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'transparent' }} onPress={() => handleSize()}/>
      </Animated.View>
      
    </View>
  );
}



export default Home;