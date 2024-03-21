import { View, Text, Image, TouchableOpacity } from 'react-native';
import { style } from './ProfileCard.style';
import { AntDesign } from '@expo/vector-icons';

const Profile = ({ name, message, isOpenToWork, onPressTitle }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image
          style={style.image}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />

        <View style={style.text}>
          <TouchableOpacity onPress={() => onPressTitle(name)}>
            <Text style={style.title}>{name}</Text>
          </TouchableOpacity>

          <Text>{message}</Text>

          {isOpenToWork && (
            <View>
              <Text style={style.openToWork}>Open to Work!</Text>
            </View>
          )}
        </View>
      </View>

      <View style={style.iconContainer}>
        <TouchableOpacity style={style.icon}>
          <AntDesign name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>

        <TouchableOpacity style={style.icon}>
          <AntDesign name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>

        <TouchableOpacity style={style.instaIcon}>
          <Image
            source={require('../../assets/instagram-logo.png')}
            style={{ width: 34, height: 34 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={style.icon}>
          <AntDesign name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
