import 'react-native-gesture-handler';
import React, {Component } from 'react';
import {View,Text,Dimensions, ImageBackground, StatusBar, Animated, transform, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import * as Progress from 'react-native-progress';
import Image from 'react-native-scalable-image';
import styles from './styles'
export default class Screen3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
    this.animate=this.animate.bind(this);
  }
  componentDidMount() {
    this.interval=setInterval(this.animate,500)
    StatusBar.setHidden(true);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
     StatusBar.setHidden(false);
  }
  animate() {
    this.setState({ progress: this.state.progress+0.1 });
    if(this.state.progress==0.9)
      {this.setState({progress: 0})}
  }
  render(){
    const {x}=this.props.route.params
    const {y}=this.props.route.params
    const {z}=this.props.route.params
    setTimeout(()=>{this.props.navigation.navigate('screen4',{profile: x, status: y, message: z})}, 5000);
    return (
      <View style={styles.body}>
        <Image
          width={Dimensions.get('window').width}
          source={{uri: y}}
        />
        <View style={styles.footer}>
          <Text style={styles.text}>{z}</Text>
        </View>
        <View style={styles.bar}>
          <Progress.Bar color='#D8B921' width={400} progress={this.state.progress} indeterminate={false} />
        </View>
      </View>
    )
  }
}