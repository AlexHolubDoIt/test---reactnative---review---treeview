import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import FileTree from './components/FileTree';

// or any pure javascript modules available in npm
import { Card, List } from 'react-native-paper';
import tree from './components/data.json';
import snack from './assets/folder-open.svg';
import folder from './assets/folder.svg';

export default function App() {
  const [expandedNode, setExpandNode] = React.useState({
    isExpanded: true,
    targetNode: 'C:',
  });
  const { isExpanded, targetNode } = expandedNode;
  const handlePress = (node) => {
    setExpandNode({
      targetNode: node,
      isExpanded: node === targetNode ? !isExpanded : false,
    });
  };


  const treeView = (data, index) => {
    const nodeKey = Object.keys(data);
    const nodeValue = data[nodeKey];
    const hasChildren = nodeValue?.type === 'folder' && nodeValue?.children;
    return (
      <>
        {hasChildren ? (
          <ul>
            {' '}
            <List.Accordion
              title={`${nodeKey}`}
              expanded={nodeKey[0] === targetNode ? isExpanded : true}
              onPress={() => handlePress(nodeKey[0])}
              left={(props) => (
                <Image
                  source={require(`./assets/${
                    nodeKey[0] == targetNode && !isExpanded
                      ? `folder`
                      : `folder-open`
                  }.svg`)}
                  style={{ width: 20, height: 20 }}
                />
              )}>
              <>
                {hasChildren &&
                  Object.entries(hasChildren)?.map(([key, values], index) => (
                    <>{treeView({ [key]: { ...values } })}</>
                  ))}
              </>
            </List.Accordion>
          </ul>
        ) : (
          <List.Item
            title={nodeKey}
            style={{ marginLeft: 20 }}
            left={(props) => (
              <Image
                source={require('./assets/file.svg')}
                style={{ width: 20, height: 20 }}
              />
            )}
          />
        )}
      </>
    );
  };

  return <View style={styles.container}>{treeView(tree)}</View>;
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
