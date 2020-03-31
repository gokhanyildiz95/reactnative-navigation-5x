import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';

const HomeScreen = ({navigation}) => (
  <View style={styles.home}>
    <Header />
    <Search />
    <Button
      title="Go To Profile"
      onPress={() => navigation.navigate('ProfileScreen')}
    />
  </View>
);
const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});

export default HomeScreen;
