import React from 'react'
import {View, StyleSheet} from 'react-native'
import {List} from 'react-native-paper';
import SvgUri from "expo-svg-uri";
import PropTypes from 'prop-types'
import file from '../assets/file.svg';
import folder from '../assets/folder.svg';
import folderOpen from '../assets/folder-open.svg';

const iconSize = 20;

const FileTree = ({data, hasParent}) => {
  const nodeKey = Object.keys(data);
  const nodeValue = data[nodeKey];
  const hasChildren = nodeValue?.type === 'folder' && nodeValue?.children;
  const [expandedNode, setExpandNode] = React.useState({
    isExpanded: false,
    targetNode: 'C:',
  });
  const {isExpanded, targetNode} = expandedNode;
  const isTarget = nodeKey[0] === targetNode;

  const handlePress = () => {
    setExpandNode({
      targetNode: nodeKey[0],
      isExpanded: isTarget ? !isExpanded : true,
    });
  };

  const folderIcon = isTarget && isExpanded ? folderOpen : folder;

  return (
    <View style={hasParent ? styles.item : {}}>
      {hasChildren ? (
        <List.Accordion
          title={`${nodeKey}`}
          expanded={isTarget ? isExpanded : false}
          onPress={handlePress}
          left={() => (
            <SvgUri
              width={iconSize}
              height={iconSize}
              fill="#000"
              source={folderIcon}
            />
          )}
        >
          {Object.entries(hasChildren)?.map(([key, values], index) => (
            <FileTree key={key} data={{[key]: {...values}}} hasParent={true}/>
          ))}
        </List.Accordion>
      ) : (
        <List.Item
          title={nodeKey}
          left={() => (
            <SvgUri
              width={iconSize}
              height={iconSize}
              fill="#000"
              source={file}
            />
          )}
        />
      )}
    </View>
  )
}

export default FileTree;

FileTree.propType = {
  data: PropTypes.object.isRequired,
  hasParent: PropTypes.bool,
}

FileTree.defaultProps = {
  hasParent: false,
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 20
  },
});
