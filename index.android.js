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
import Topics from './app/components/topics';



export default class exnews extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOverlay: false
    }
    this.setMenuOverlay = this.setMenuOverlay.bind(this);
  }
  setMenuOverlay(){
    this.setState({menuOverlay:!this.state.menuOverlay})
    console.log(this.state.menuOverlay,"this.state.menuOverlay");
  }
  render() {
    menuVisible = () => {
      if(this.state.menuOverlay === false){
        return(<View>
           <Background />
        <Text style={styles.mainText}>Enjoy up to date news from sources like New York Times, Y Combinator, ESPN and more</Text>
        <Newssources />
        <Footer />
        </View>)
      }else{
        return(<Topics />)
      }
    }
    return (
      <View style={styles.container}>
        <ScrollView>
        <Header setMenuOverlay={this.setMenuOverlay}/>
        {menuVisible()}
        </ScrollView>
      </View>
    );
  }
}


AppRegistry.registerComponent('exnews', () => exnews);
