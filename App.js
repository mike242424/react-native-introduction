import { Alert, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';
import ProfileCard from './components/ProfileCard/ProfileCard';
import { useState } from 'react';
import Counter from './components/Counter/Counter';

const App = () => {
  function alertHello(name) {
    Alert.alert('Hello ' + name);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <ProfileCard
          name="Mike"
          message={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus at sunt.'
          }
          isOpenToWork={true}
          onPressTitle={alertHello}
        />
        <ProfileCard
          name="Ryan"
          message={
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil eius aperiam, natus dolore cum pariatur.'
          }
          isOpenToWork={false}
          onPressTitle={alertHello}
        />
        {/* <Counter /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
