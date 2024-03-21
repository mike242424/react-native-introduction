import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 20,
          borderRadius: '50%',
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setCount((prevCount) => prevCount + 1)}
      >
        <Text>Add</Text>
      </TouchableOpacity>

      <Text style={{ margin: 20 }}>{count}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 20,
          borderRadius: '50%',
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setCount(count - 1)}
      >
        <Text>Subtract</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
