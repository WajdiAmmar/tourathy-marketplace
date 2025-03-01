import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getUser } from '../services/userService';  
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUserName(user.name || 'Utilisateur inconnu');
      } catch (error) {
        console.error("Erreur de récupération de l'utilisateur", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour, {userName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
