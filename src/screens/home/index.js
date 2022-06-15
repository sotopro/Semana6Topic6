import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList, Image } from "react-native";
import { styles } from "./styles";

const Home = ({ navigation, route }) => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("http://192.168.18.8:3333/animals");
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchAnimals();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardName}>{item.name}</Text>
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <Text style={styles.cardSpecies}>{item.species}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Zoo</Text>
        </View>
        <FlatList
          data={animals}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
