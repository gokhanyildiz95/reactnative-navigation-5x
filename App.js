/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, Button, RefreshControlComponent, requireNativeComponent} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => (
  <View>
    <Text>Home</Text>
    <Button
    title="deneme" 
    onPress={() => navigation.navigate('Detail')}
    />
  </View>
)


const DetailScreen = (props) => (
  <View>
    <Text>Detail</Text>
  </View>
)


export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

