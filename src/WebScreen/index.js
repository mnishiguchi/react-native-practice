import React, { Component } from 'react';
import { WebView } from 'react-native';
import Layout from '../Layout';
import WebHeader from './WebHeader';

const WebScreen = ({ navigation }) => {
  const uri = navigation.state.params.uri;

  return (
    <Layout>
      <WebHeader title={uri} navigation={navigation} />
      <WebView source={{ uri: uri }} />
    </Layout>
  );
};

export default WebScreen;
