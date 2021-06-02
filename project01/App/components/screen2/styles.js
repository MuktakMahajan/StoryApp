import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  body: {
    flex: 1,
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
  images: {
    width: 200,
    height: 200,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#D8B921',
    marginHorizontal: 3
  },
  triangleTLE: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 70,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: '#D8B921',
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
  triangleTRE: {
    alignSelf: 'flex-end',
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 70,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: '#D8B921',
    transform: [
      {rotate: '90deg'}
    ]
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
  triangleBRE: {
    bottom: 0,
    right: 0,
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 70,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: '#D8B921',
    transform: [
      {rotate: '180deg'}
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
  triangleBLE: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 70,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: '#D8B921',
    transform: [
      {rotate: '270deg'}
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
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
}
});

export default styles