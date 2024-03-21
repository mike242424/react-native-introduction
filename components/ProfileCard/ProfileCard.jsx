import { View, Text, Image } from 'react-native';
import { style } from './ProfileCard.style';

const Profile = ({ name, message, children }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Image
            style={style.image}
            source={{ uri: 'https://i.pravatar.cc/300' }}
          />
        </View>
        <View style={style.text}>
          <Text style={style.title}>{name}</Text>

          <Text>{message}</Text>
        </View>
      </View>

      {children}
    </View>
  );
};

export default Profile;
