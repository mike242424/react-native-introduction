import { Text, View } from 'react-native';
import Profile from './components/Profile';

const App = () => {
  return (
    <View style={{ alignItems: 'center', paddingTop: 100 }}>
      <Text>Hello</Text>
      <Profile />
    </View>
  );
};

export default App;
