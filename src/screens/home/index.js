import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

const Home = ({ navigation, route }) => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://192.168.18.8:3333/animals", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 3500,
        });
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => null}>
      <Text style={styles.cardName}>{item.name}</Text>
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <Text style={styles.cardSpecies}>{item.species}</Text>
    </TouchableOpacity>
  );

  const emptyList = () => (
    <View style={styles.card}>
      <Text style={styles.cardName}>500</Text>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6858/6858068.png",
        }}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <Text style={styles.cardSpecies}>SERVER ERROR</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Zoo</Text>
        </View>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#9F84BD" size="large" />
            <Text style={styles.loadingText}>Loading ...</Text>
          </View>
        ) : (
          <FlatList
            data={animals}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={styles.list}
            initialNumToRender={5}
            ListEmptyComponent={emptyList}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
