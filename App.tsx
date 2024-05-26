import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainStack } from './src/stacks';
import { Provider } from 'react-redux';
import { store } from './src/common/redux/store';
export default function App() {
  return (
    <Provider store={store}> 
       <View style = {styles.container}>
          <MainStack/>
       </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 0
  },
});
