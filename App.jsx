import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';

export default function App() {
  return (
<NavigationContainer>
  <Routes/>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffsf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
