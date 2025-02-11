import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/AppStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/trends-animation.json')} autoPlay loop style={styles.animation} />
      <Text style={styles.title}>📊 TrendTracker AI</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trending')}>
        <Text style={styles.buttonText}>🔥 View Trending Topics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ideas')}>
        <Text style={styles.buttonText}>💡 Get Content Ideas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
