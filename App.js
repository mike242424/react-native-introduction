import { Text, View } from 'react-native';
// import Profile from './components/Profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View style={style.viewOne} />
        <View style={style.viewTwo} />
        <View style={style.viewThree} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
