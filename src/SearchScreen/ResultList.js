import React from 'react';
import numeral from 'numeral';
import { Image, Modal, Platform, StyleSheet } from 'react-native';
import { List, ListItem, Text, Thumbnail } from 'native-base';

const rowRenderer = (item, onPressListItem) => {
  if (!item) return <Text>No item</Text>;
  const onPress = () => onPressListItem(item);
  return (
    <ListItem button onPress={onPress}>
      <Thumbnail square size={80} source={{ uri: item.owner.avatar_url }} />
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.fullNameText}>{item.full_name}</Text>
      <Text note style={styles.scoreText}>
        {numeral(item.score).format('0.00')}
      </Text>
    </ListItem>
  );
};

const ResultList = ({ dataArray, onPressListItem }) => {
  const renderRow = item => rowRenderer(item, onPressListItem);
  return <List dataArray={dataArray} renderRow={renderRow} />;
};

const styles = StyleSheet.create({
  nameText: {
    marginLeft: 16,
    flex: 2,
    fontWeight: '600',
    color: '#46ee4b'
  },
  fullNameText: {
    marginLeft: 16,
    flex: 3,
    color: '#007594'
  },
  scoreText: {
    flex: 1,
    textAlign: 'right'
  }
});

export default ResultList;
