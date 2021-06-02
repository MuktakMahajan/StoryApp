import {StyleSheet, ImageBackground} from 'react-native';


const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  header: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute', 
    left: 0, 
    right: 0,
    top: 10
    ,
    backgroundColor: 'transparent'
  },
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute', 
    left: 0, 
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  footer: {
    flex: 5
  },
  input: {
    color: 'white',
    flex: 4,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    color: 'white',
  }

});

export default styles