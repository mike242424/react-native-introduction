import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  boxOne: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    position: 'absolute',
  },
  boxTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    marginLeft: 50,
    position: 'relative',
    marginBottom: -50,
    zIndex: 2,
  },
  boxThree: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    marginLeft: 100,
    position: 'relative',
  },
});
