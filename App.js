import { Text } from 'react-native';
// import Profile from './components/Profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={style.title}>Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
