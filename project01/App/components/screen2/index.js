import 'react-native-gesture-handler';
import React, {Component } from 'react';
import {View,Text,Image,Button,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styles from './styles'

export default class Screen2 extends Component{
	renderFileUri(x) {
    if (x) {
      return <Image
        source={{ uri: x }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('./profile.jpg')}
        style={styles.images}
      />
    }
  }
  render() {
    const {profile}=this.props.route.params;
    const {status}=this.props.route.params;
    const {message}=this.props.route.params;
    return (
      <View style={styles.body}>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('screen3',{x: profile, y:status, z:message})}>
          <View style={styles.ImageSections}>
            <View>
              {this.renderFileUri(profile)}
              <View style={[styles.triangleTLE, this.props.style]} />
              <View style={[styles.triangleTL, this.props.style]} />
              <View style={[styles.triangleTRE, this.props.style]} />
              <View style={[styles.triangleTR, this.props.style]} />
              <View style={[styles.triangleBRE, this.props.style]} />
              <View style={[styles.triangleBR, this.props.style]} />
              <View style={[styles.triangleBLE, this.props.style]} />
              <View style={[styles.triangleBL, this.props.style]} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Text style={{color: 'black', fontSize: 20}} > User-1</Text>
        <Text style={{color: 'black', fontSize: 20}} > Details-1 </Text>
      </View>
    );
  }
}