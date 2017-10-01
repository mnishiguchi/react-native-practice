import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import {
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  H1,
  H3
} from 'native-base';

import Layout from '../Layout';
import HomeHeader from './HomeHeader';

class HomeScreen extends React.Component {
  visitSearchScreen = (searchTerm = '') => () => {
    this.props.navigation.navigate('Search', { searchTerm });
  };

  render() {
    return (
      <Layout>
        <HomeHeader title="HomeScreen" {...this.props} />
        <Content padder>
          <H1>Home Screen</H1>
          <Text>This app has a lot of cool features!</Text>
          <Card>
            <CardItem header>
              <H3>Search Android-related Repos</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  full
                  rounded
                  dark
                  onPress={this.visitSearchScreen(
                    'topic:android+topic:kotlin&sort=stars&order=desc'
                  )}
                >
                  <Text>Search</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <H3>Search React-related Repos</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  full
                  rounded
                  dark
                  onPress={this.visitSearchScreen(
                    'topic:react+topic:react-native&sort=stars&order=desc'
                  )}
                >
                  <Text>Search</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <H3>Search mnishiguchi's Repos</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  full
                  rounded
                  dark
                  onPress={this.visitSearchScreen(
                    'user:mnishiguchi&sort=updated&order=desc'
                  )}
                >
                  <Text>Search</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
