import { Alert, Platform, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        {/* <ProfileCard
          name="Mike"
          message={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus at sunt.'
          }
        /> */}
        {Platform.OS === 'android' ? (
          <Text>Hi on Android</Text>
        ) : (
          <Text>Hi on iOS</Text>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
