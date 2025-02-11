import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { fetchContentIdeas } from '../utils/openai';
import { styles } from '../styles/AppStyles';
import LottieView from 'lottie-react-native';

const IdeasScreen = () => {
  const [niche, setNiche] = useState('');
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateIdeas = async () => {
    if (!niche.trim()) return;
    setLoading(true);
    const generatedIdeas = await fetchContentIdeas(niche);
    setIdeas(generatedIdeas);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <LottieView source={require('../../assets/trends-animation.json')} autoPlay loop style={styles.animation} />
      <Text style={styles.title}>💡 Get Content Ideas</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Niche (e.g., Tech, Fitness, Travel)"
        value={niche}
        onChangeText={setNiche}
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerateIdeas}>
        <Text style={styles.buttonText}>Generate Ideas</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={ideas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.topic}>{item}</Text>}
        />
      )}
    </View>
  );
};

export default IdeasScreen;
