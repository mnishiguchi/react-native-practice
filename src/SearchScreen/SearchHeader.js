import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Text
} from 'native-base';

const SearchHeader = ({ onChangeText, onSearch, searchTerm }) => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input
          onChangeText={onChangeText}
          onSubmitEditing={onSearch}
          placeholder="Search"
          value={searchTerm}
        />
        <Icon name="ios-people" />
      </Item>
      <Button transparent onPress={onSearch}>
        <Text>Search</Text>
      </Button>
    </Header>
  );
};

const css = StyleSheet.create({});

export default SearchHeader;
