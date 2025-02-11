import React, { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { fetchTrendingTopics } from '../utils/openai';
import LottieView from 'lottie-react-native';

const TrendingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState([]);

  React.useEffect(() => {
    fetchTrendingTopics().then(data => {
      setTrends(data);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Trending Topics</Text>
      {loading ? (
        <LottieView source={require('../../assets/loading-animation.json')} autoPlay loop style={styles.animation} />
      ) : (
        <FlatList
          data={trends}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.topic}>{item}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  topic: { fontSize: 16, padding: 8, backgroundColor: '#F8F8F8', marginBottom: 5, borderRadius: 5 },
  animation: { width: 150, height: 150, alignSelf: 'center' }
});

export default TrendingScreen;
