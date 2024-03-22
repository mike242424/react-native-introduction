import { Alert, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';
import ProfileCard from './components/ProfileCard/ProfileCard';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard
          name="Mike"
          message={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus at sunt.'
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
