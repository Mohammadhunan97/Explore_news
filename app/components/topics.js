import React, { Component } from 'react';
import { Text,View, Linking } from 'react-native';
import styles from '../stylesheet';

export default class Topics extends Component {
  render() {
    return (
      <View style={styles.topics}>
        <View style={{marginTop:60}}>
        <Text style={styles.topic}>News</Text>
        <Text style={styles.topic}>Tech</Text>
        <Text style={styles.topic}>Sports</Text>
        <Text style={styles.topic}>Entertainment</Text>
        <Text style={styles.topic}>Finance</Text>
        </View>
      </View>
    );
  }
}


