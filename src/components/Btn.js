import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
export default class Btn extends Component {
  render() {
    const {text} = this.props;
    const {image} = this.props;
    const {rate} = this.props;

    return (
      <View>
        <TouchableOpacity style={styles.button}>
          <Image style={{width: 10, height: 10}} source={image} />
          <Text style={{color: '#424874'}}>
            {text}-{rate}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    width: 90,
    height: 30,
    borderColor: 'gray',
    fontWeight: 'bold',
  },
});
