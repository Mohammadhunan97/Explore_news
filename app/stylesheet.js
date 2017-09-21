import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex:1

  },
  header: {
  	display: 'flex'
  },
  logo: {
  	flex: 1,
  	textAlign: 'center',
  	fontSize: 28,
  	color: '#410099',
  	fontWeight: "400",
  	position: 'relative',
  	top: 10,
  	zIndex: 10
  },
  menu: {
  	flex: 1,
  	position:'relative',
  	bottom:30,
  	left: 10,
  	width: 42,
  	height:42
  },
  background: {
  	flex: 1,
   	height: 100,
   	width: 411,
   	height: 250
  },
  mainText: {
  	textAlign: 'center',
  	color: '#000',
  	fontSize: 18,
  	marginTop: 20,
  	marginLeft: 60,
  	marginRight: 60
  },
  footer: {
  	marginTop: 20,
  	alignItems: 'center',
  	backgroundColor: '#272222',
  	height: 80
  }
});

module.exports = styles;