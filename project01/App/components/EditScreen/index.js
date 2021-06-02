import 'react-native-gesture-handler';
import React, {Component } from 'react';
import {View,Text ,Button,TouchableOpacity,Dimensions, ImageBackground, StatusBar, TextInput} from 'react-native';
import Image from 'react-native-scalable-image';
import styles from './styles'
export default class EditScreen extends Component {
    state={
        message: ''
    }
    componentDidMount() {
       StatusBar.setHidden(true);
    }
    componentWillUnmount() {
        StatusBar.setHidden(false);
    }
    render(){
        const {x}=this.props.route.params
        const {y}=this.props.route.params
        return (
            <View style={styles.body}>
                <Image source={{uri: y}} width={Dimensions.get('window').width} />
                <View style={styles.header}>
                    <Text style={{color: 'white', fontSize: 15}}>Muktak Mahajan</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.footer}>
                        <TextInput placeholder="Add Comment" placeholderTextColor='white' style={styles.input} onChangeText={text => this.setState({ message: text })}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Send" color="transparent" onPress={()=>this.props.navigation.navigate('screen2',{profile: x, status: y, message: this.state.message})}></Button>
                    </View>
                </View>
            </View>
        )
    }
}