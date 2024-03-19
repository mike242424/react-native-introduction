import { Text, View } from 'react-native';
// import Profile from './components/Profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
