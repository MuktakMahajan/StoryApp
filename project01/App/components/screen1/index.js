import 'react-native-gesture-handler';
import React, {Component } from 'react';
import {View,Text,Image,Button,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import {gql, useMutation} from '@apollo/client';

const ADD_PICTURE = gql`
  mutation addProfilePicture($id: ID!, $uri: String!) {
    addProfilePicture(id: $id, photo: $uri) {
      id
    }
  }
`;

export default class Screen1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        uri: ''
      },
      fileUri: ''
    }
  }
  chooseImage=()=> {
    let options = {
      title: 'Upload Picture',
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      this.props.navigation.navigate('editscreen',
        {
          x: this.state.fileUri,
          y: response.uri
        });
    });
  }
  
  chooseProfileImage=()=> {
    let options = {
      title: 'Upload Profile Picture',
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      addPhoto();
      this.setState({
        fileUri: response.uri
      })
    });
  }
  addProfilePicture=()=>{
    this.chooseProfileImage();
  }
  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
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
    return (
      <View style={styles.body}>
        <TouchableWithoutFeedback onLongPress={this.addProfilePicture}>
          <View style={styles.ImageSections}>
            <View>
              {this.renderFileUri()}
              <View style={[styles.triangleTL, this.props.style]} />
              <View style={[styles.triangleTR, this.props.style]} />
              <View style={[styles.triangleBR, this.props.style]} />
              <View style={[styles.triangleBL, this.props.style]} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={this.chooseImage} testID = "click">
          <View style={styles.status}>
            <Image source={require('./images.png')} style={styles.logo}/>
          </View>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 20}} > User-1</Text>
        <Text style={{color: 'black', fontSize: 20}}> Details-1 </Text>
        </View>
    );
  }
};


