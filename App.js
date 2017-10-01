import Expo from 'expo';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Root } from 'native-base';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import SearchScreen from './src/SearchScreen';
import WebScreen from './src/WebScreen';
import SideBar from './src/SideBar';

const AppNavigator = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Web: { screen: WebScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

class App extends React.Component {
  state = { isReady: false };

  // https://github.com/GeekyAnts/NativeBase#4-getting-started
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf')
    });

    this.setState({ isReady: true });
  }

  render() {
    // https://github.com/GeekyAnts/NativeBase#4-getting-started
    if (!this.state.isReady) return <Expo.AppLoading />;

    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
