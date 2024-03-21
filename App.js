import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';
import ProfileCard from './components/ProfileCard/ProfileCard';

const App = () => {
  const names = ['Mike', 'Ryan', 'Coffee'];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard
          name="Mike"
          message={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus at sunt.'
          }
        />
        <ProfileCard
          name="Ryan"
          message=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eius aperiam, natus dolore cum pariatur."
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
