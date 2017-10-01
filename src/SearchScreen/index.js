import React from 'react';
import { Linking, StyleSheet, WebView } from 'react-native';
import { Content, Spinner } from 'native-base';
import { toast, successToast, dangerToast } from '../utils';
import Layout from '../Layout';
import SearchHeader from './SearchHeader';
import ResultList from './ResultList';

// https://developer.github.com/v3/search/#search-repositories
const repositoriesUrl = (q = '') =>
  `https://api.github.com/search/repositories?q=${q}`;

const initialSearchTerm = (props, defaultSearchTerm = '') => {
  const searchTerm = props.navigation.state.params.searchTerm;
  return searchTerm || defaultSearchTerm;
};

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: initialSearchTerm(props),
      selectedItem: undefined,
      results: {
        items: []
      }
    };
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    this.setState({ loading: true });

    return fetch(repositoriesUrl(this.state.searchTerm))
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ results: responseJson, loading: false });
        successToast(`${responseJson.items.length} items found`);
        return responseJson.Search;
      })
      .catch(error => {
        this.setState({ loading: false });
        dangerToast(error);
      });
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  handlePressListItem = item => {
    this.visitWebScreen(item.html_url);
  };

  visitWebScreen = (uri = 'https://google.com') => {
    this.props.navigation.navigate('Web', { uri });
  };

  render() {
    const { searchTerm, loading, results: { items } } = this.state;
    return (
      <Layout>
        <SearchHeader
          onChangeText={this.updateSearchTerm}
          onSearch={this.search}
          searchTerm={searchTerm}
          {...this.props}
        />
        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <ResultList
              dataArray={items}
              onPressListItem={this.handlePressListItem}
            />
          )}
        </Content>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({});

export default SearchScreen;
