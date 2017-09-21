import React, { Component } from 'react';
import { Text,View, Image } from 'react-native';
import styles from '../stylesheet';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>Explore News</Text>
        <Image 
        source={require('../assets/menu.png')} 
        style={styles.menu}
        />

      </View>
    );
  }
}


