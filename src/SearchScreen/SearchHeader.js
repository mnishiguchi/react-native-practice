import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text
} from 'native-base';

const SearchHeader = ({ navigation, onChangeText, onSearch, searchTerm }) => {
  return (
    <Header searchBar>
      <Left>
        <Button transparent onPress={() => navigation.goBack(null)}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Right>
        <Item>
          <Icon name="ios-search" style={styles.icon} />
          <Input
            onChangeText={onChangeText}
            onSubmitEditing={onSearch}
            placeholder="Search"
            value={searchTerm}
            style={styles.input}
          />
        </Item>
        <Button transparent onPress={onSearch}>
          <Text>Search</Text>
        </Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  input: { color: '#ddd' },
  icon: { color: '#ddd' }
});

export default SearchHeader;
