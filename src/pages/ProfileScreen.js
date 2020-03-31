import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Btn from '../components/Btn';
import List from '../components/List';

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safemain}>
        <Header />
        <View style={styles.main}>
          <Image
            style={styles.profile}
            source={require('../assets/prof.jpg')}
          />
          <View>
            <Text style={{fontSize: 30}}>Name Surname</Text>
          </View>
          <View style={styles.rate}>
            <Btn text="Follow" rate="22" />
            <Btn text="Follower" rate="20" />
            <Btn text="Stars" rate="30" image={require('../assets/star.png')} />
            <Btn
              text="Forks"
              rate="12"
              image={require('../assets/forks.png')}
            />
          </View>
          <View>
            <Text>Repositories</Text>
            <List />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safemain: {
    flex: 1,
    flexDirection: 'column',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'gray',
    marginTop: 20,
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  rate: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
