import { TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './App.style';
import ProfileCard from './components/ProfileCard/ProfileCard';
import { AntDesign } from '@expo/vector-icons';

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
        >
          <View style={style.iconContainer}>
            <TouchableOpacity style={style.icon}>
              <AntDesign name="linkedin-square" size={24} color="#0A66C2" />
            </TouchableOpacity>

            <TouchableOpacity style={style.icon}>
              <AntDesign name="twitter" size={24} color="#1DA1F2" />
            </TouchableOpacity>

            <TouchableOpacity style={style.instaIcon}>
              <Image
                source={require('./assets/instagram-logo.png')}
                style={{ width: 34, height: 34 }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={style.icon}>
              <AntDesign name="github" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </ProfileCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
