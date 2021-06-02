import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff'
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  logo: {
    width:25,
    height: 25,
    borderRadius: 12

  },
  images: {
    width: 200,
    height: 200,
    marginHorizontal: 3
  },
  triangleTL: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 60,
    borderTopWidth: 60,
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
  },
  triangleTL: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 60,
    borderTopWidth: 60,
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff'
  },
  triangleTR: {
    alignSelf: 'flex-end',
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 60,
    borderTopWidth: 60,
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
    transform: [
      {rotate: '90deg'}
    ]
  },
  triangleBR: {
    bottom: 0,
    right: 0,
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 60,
    borderTopWidth: 60,
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
    transform: [
      {rotate: '180deg'}
    ]
  },
  triangleBL: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 60,
    borderTopWidth: 60,
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
    transform: [
      {rotate: '270deg'}
    ]
  }
});

export default styles