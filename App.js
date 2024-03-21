import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';
import ProfileCard from './components/ProfileCard/ProfileCard';
import { useState } from 'react';
import Counter from './components/Counter/Counter';

const App = () => {
  const [data, setData] = useState();
  const names = ['Mike', 'Ryan', 'Coffee'];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {/* <ProfileCard
          name="Mike"
          message={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus at sunt.'
          }
          isOpenToWork={true}
        />
        <ProfileCard
          name="Ryan"
          message={
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eius aperiam, natus dolore cum pariatur.'
          }
          isOpenToWork={false}
        /> */}
        <Counter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
