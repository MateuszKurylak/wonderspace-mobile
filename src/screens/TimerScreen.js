import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PomodoroTimer } from '../components/Timer/PomodoroTimer';

export const TimerScreen = () => {
  return (
    <View style={styles.container}>
      <PomodoroTimer />
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
});