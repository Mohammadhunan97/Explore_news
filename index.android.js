import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import styles from './app/stylesheet';
import Header from './app/components/header';
import Background from './app/components/background';
import Newssources from './app/components/newssources';
import Footer from './app/components/footer';



export default class exnews extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOverlay: false
    }
    this.setMenuOverlay = this.setMenuOverlay.bind(this);
  }
  setMenuOverlay(bool){
    this.setState({menuOverlay:this.state.menuOverlay})
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Header />
        <Background />
        <Text style={styles.mainText}>Enjoy up to date news from sources like New York Times, Y Combinator, ESPN and more</Text>
        <Newssources />
        <Footer />
        </ScrollView>
      </View>
    );
  }
}


AppRegistry.registerComponent('exnews', () => exnews);
