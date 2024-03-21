import { Text, View } from 'react-native';
// import Profile from './components/Profile';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';
import Profile from './components/ProfileCard/ProfileCard';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
