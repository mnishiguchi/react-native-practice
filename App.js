import Expo from 'expo';
import React from 'react';
import { Root } from 'native-base';
import SearchScreen from './src/SearchScreen';

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
        <SearchScreen />
      </Root>
    );
  }
}

export default App;
