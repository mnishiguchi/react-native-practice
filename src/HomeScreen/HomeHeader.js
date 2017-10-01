import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  H3,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base';

import Layout from '../Layout';

const HomeHeader = ({ navigation, title }) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

const styles = StyleSheet.create({});

export default HomeHeader;
