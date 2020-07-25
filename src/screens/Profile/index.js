import React, { Component } from "react";
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,TextInput
} from "react-native";
const { width, height } = Dimensions.get('window');
import Background from '../components/Background'
import styles from './style';

import { Icons, Images } from '../../utils';

import {profile} from '../../redux/actions/profile'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.wrapper}>
              <Background />
              <View style={{ zIndex: 5, position: 'absolute', bottom: '0%', top: '0%' }}>
                <KeyboardAvoidingView behavior="padding">
                  <ScrollView
                    contentContainerStyle={styles.scrollWrapper}
                    showsVerticalScrollIndicator={false}>
                        <View style={styles.upperCont}>
                  <TouchableOpacity
                    style={styles.arrowCont}
                    onPress={() => this.props.navigation.goBack()}>
                    <Image source={Icons.BackIcon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.logoCont}>
                            <Image
                                source={Images.loginLogo}
                                style={{ width: width * 0.35, height: height * 0.20 }}
                            />
                        </View>
                        <TextInput style={styles.textInputStyle}
                            placeholder="Name"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                          
                            
                        />
                          <TextInput style={styles.textInputStyle2}
                            placeholder="Adress"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                         <TextInput style={styles.textInputStyle2}
                            placeholder="cardiologist"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                         <TextInput style={styles.textInputStyle2}
                            placeholder="Hospital name"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                         <TextInput style={styles.textInputStyle2}
                            placeholder="Hospital name"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                         <TextInput style={styles.textInputStyle2}
                            placeholder="Hospital name"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                         <TextInput style={styles.textInputStyle2}
                            placeholder="Hospital name"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                         
                         <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={async () =>
                                {
                                  await AsyncStorage.removeItem('token');
                                  this.props.navigation.replace('Login')
                                }
                            }>
                                <Text
                                    style={styles.btnText}>
                                    Logout
                          </Text>
                        </TouchableOpacity>
                        </ScrollView>
                        </KeyboardAvoidingView>
                        </View>
                        </View>
                        </View>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile:state.profile.profile
  };
};

export default connect(mapStateToProps, {
  profile //Action
})( Profile);



