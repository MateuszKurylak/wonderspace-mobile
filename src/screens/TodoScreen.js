import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});