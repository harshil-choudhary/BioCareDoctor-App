import React, { Component } from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput, 
  Dimensions,
  Image
} from "react-native";

const { width, height } = Dimensions.get('window');
import styles from './style';
import Background from '../components/Background'
import { Icons, Images } from '../../utils';
import {forgotPassword} from '../../redux/actions/forgotPassword'
import {connect} from 'react-redux'

class ForgetPassword  extends Component {
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
              <View style={styles.textCont}>
                <Text style={styles.heading}>We can understand it is tough to forget your password. Please Enter your email for reset link </Text>
                {/* <Text style={}>link</Text> */}
              </View>

              <TextInput style={styles.textInputStyle}
                  placeholder="Email"
                  placeholderTextColor='#000000'
                  underlineColorAndroid="transparent"
                  textAlignVertical='center'
              />
            
            

              <TouchableOpacity
                  activeOpacity={1}
                  style={styles.boxBtn2}
                  onPress={() =>
                    console.log("Reset Link Sent")
                  }>
                  <Text
                      style={styles.btnText}>
                      Send Reset Link
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
    forgotPassword:state.forgotPassword.forgotPassword
  };
};

export default connect(mapStateToProps, {
  forgotPassword//Action
})( ForgetPassword );



