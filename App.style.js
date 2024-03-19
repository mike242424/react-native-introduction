import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  boxOne: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
  boxTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  boxThree: { height: 100, width: 100, backgroundColor: 'green' },
});
