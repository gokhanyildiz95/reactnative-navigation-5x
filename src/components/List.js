import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {ListItem, SearchBar, Icon} from 'react-native-elements';

class List extends React.Component {
  state = {
    data: [],
    person: [],
  };

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results});
    console.log(this.state.person[0].name.first);
  }
  render() {
    return (
      <View>
        <Text> </Text>
      </View>
    );
  }
}

export default List;
