import React from 'react';
import { StyleSheet } from 'react-native';
import { Spinner, Content, Container } from 'native-base';
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
        return responseJson.Search;
      })
      .catch(error => {
        this.setState({ loading: false });
        console.error(error);
      });
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  handlePressListItem = item => {
    // TODO
    alert(item.full_name);
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
