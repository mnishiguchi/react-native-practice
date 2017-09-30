import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { toast, successToast, dangerToast } from '../utils';
import SearchHeader from './SearchHeader';
import ResultList from './ResultList';

const repositoriesUrl = (q = '') =>
  `https://api.github.com/search/repositories?q=${q}`;

class SearchScreen extends React.Component {
  state = {
    searchTerm: 'react',
    selectedItem: undefined,
    results: {
      items: []
    }
  };

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
    toast(item.full_name);
  };

  render() {
    const { searchTerm, loading, results: { items } } = this.state;
    return (
      <Container style={styles.appContainer}>
        <SearchHeader
          onChangeText={this.updateSearchTerm}
          onSearch={this.search}
          searchTerm={searchTerm}
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 24
  }
});

export default SearchScreen;
