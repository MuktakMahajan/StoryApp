import {StyleSheet, ImageBackground} from 'react-native';


const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  progress: {
    width: '100%'
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  bar:{
    top:10,
    left: 0,
    position: 'absolute',
  },
  footer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute', 
    left: 0, 
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default styles