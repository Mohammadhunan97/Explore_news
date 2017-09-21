import React, { Component } from 'react';
import { Text,View, Linking } from 'react-native';
import styles from '../stylesheet';

export default class Topics extends Component {
  constructor(props){
    super(props);
    this.state = {
      topicActive: false
    }
  }
  getNews(){
    this.setState({topicActive:true})
  }
  render() {
    topics = () => {
      if(this.state.topicActive === false){
        return(<View style={{marginTop:60}}>
        <Text 
        onPress={()=>this.getNews()}
        style={styles.topic}>News</Text>
        <Text 
        style={styles.topic}>Tech</Text>
        <Text 
        style={styles.topic}>Sports</Text>
        <Text 
        style={styles.topic}>Entertainment</Text>
        <Text 
        style={styles.topic}>Finance</Text>
        </View>)
      }else{
        return(<Text>News</Text>)
      }
    }
    return (
      <View style={styles.topics}>
      {topics()}
      </View>
    );
  }
}


