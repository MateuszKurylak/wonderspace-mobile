import { View, StyleSheet } from 'react-native';
import { PomodoroTimer } from '../components/PomodoroTimer';

export default function Timer() {
  return (
    <View style={styles.container}>
      <PomodoroTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});