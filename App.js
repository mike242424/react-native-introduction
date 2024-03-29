import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';

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
        <ProfileCard
          name="Ryan"
          message={
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aspernatur cumque voluptatem.'
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
