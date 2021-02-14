import React  from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import FileTree from './components/FileTree';
import tree from './components/data.json';

export default function App() {
  return (
    <View style={styles.container}>
      <FileTree data={tree} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
