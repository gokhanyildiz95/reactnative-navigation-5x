import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import Icon, {SearchBar} from 'react-native-elements';
import Search from './Search';

export default class Header extends Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;

    return (
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/github-logo.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: 50,
    height: 50,
  },
  search: {
    height: 40,
    marginLeft: 10,
    display: 'flex',
    flex: 5,
    marginBottom: 15,
  },
  icon: {
    borderColor: 'white',
  },
});
