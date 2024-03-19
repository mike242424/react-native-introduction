import { Text, View } from 'react-native';
// import Profile from './components/Profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={style.title}>Hello</Text>
        <View style={style.square}>
          <Text style={style.innerText}>Hello</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
