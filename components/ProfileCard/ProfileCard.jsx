import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { style } from './ProfileCard.style';
import { AntDesign } from '@expo/vector-icons';

const Profile = ({ name, message }) => {
  function linkPress(url) {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log(`Don't know how to open this URL: ${url}`);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image
          style={style.image}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />

        <View style={style.text}>
          <Text style={style.title}>{name}</Text>

          <Text>{message}</Text>
        </View>
      </View>

      <View style={style.iconContainer}>
        <TouchableOpacity
          style={style.icon}
          onPress={() =>
            linkPress('https://www.linkedin.com/in/michael-e-byers/')
          }
        >
          <AntDesign name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.icon}
          onPress={() => linkPress('https://twitter.com/home')}
        >
          <AntDesign name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.instaIcon}
          onPress={() => linkPress('https://www.instagram.com/')}
        >
          <Image
            source={require('../../assets/instagram-logo.png')}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.icon}
          onPress={() => linkPress('https://github.com/mike242424')}
        >
          <AntDesign name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
