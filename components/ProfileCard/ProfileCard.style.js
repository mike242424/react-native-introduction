import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    flex: 1,
    paddingLeft: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#EEE',
    padding: 10,
    borderRadius: '50%',
  },
  instaIcon: {
    backgroundColor: '#EEE',
    padding: 5,
    borderRadius: '50%',
  },
});
