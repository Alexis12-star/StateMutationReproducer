import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Provider,  } from 'react-redux';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { increment } from './store/slice';

import {RootState, store} from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

const MainApp = () => {
  const count = useAppSelector((state: RootState) => state.counter)
  count.value = 99
  const dispatch = useAppDispatch()
  
  
  const incrementCount = () => {
    dispatch(increment())
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 100}}>{count.value}</Text>
      <StatusBar style="auto" />
      <Button 
        title="Increment"
        onPress={incrementCount}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
