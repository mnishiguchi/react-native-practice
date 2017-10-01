import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

const Layout = props => (
  <Container style={styles.appContainer}>{props.children}</Container>
);

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 24
  }
});

export default Layout;
