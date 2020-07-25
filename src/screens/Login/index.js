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

import Background from '../components/Background'

const { width, height } = Dimensions.get('window');
import styles from './style';
import { Icons, Images } from '../../utils';
import {login} from '../../redux/actions/login'
import {connect} from 'react-redux'
import LoadingIcon from '../../components/LoadingIcon';
import AsyncStorage from '@react-native-community/async-storage';



class Login extends Component {
    state = {email: "doctorname2@gmail.com", password:'12345678', loadingApp:false}
    constructor(props){
        super(props);
        }

    async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            if (value != null){
                console.log(value)
               this.props.navigation.push('AppHome')
            }

            return value
          }

    componentDidMount() {
       this._getStorageValue();
    }    



    submitLogin(){
        this.setState({loadingApp:true})
        this.props.login(this.state).then(async (response)=>{
            this.setState({loadingApp:false})
            await AsyncStorage.setItem('token', this.props.login1);

            console.log(this.props.login1)
            this.props.navigation.navigate('AppHome')
        })
        // console.log(this.props.login1)
         this.props.navigation.navigate('AppHome')
    }
    loadingRender(){
        
        if (this.state.loadingApp){
                return ( 
                   <LoadingIcon/>
                )
            }
    }

   
    render() {
            // console.log(this.props.login1)
            
            
        return (
            <View style={styles.wrapper}>
                <Background/>
                <View style={{zIndex:5, position:'absolute'}}>
                {this.loadingRender()}
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.logoCont}>
                            <Image
                                source={Images.loginLogo}
                                style={{ width: width * 0.35, height: height * 0.20 }}
                            />
                        </View>
                        <TextInput style={styles.textInputStyle}
                            placeholder="Email"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                            textAlignVertical='center'
                        />
                        <TextInput style={styles.textInputStyle2}
                            placeholder="Password"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                            textAlignVertical='center' />
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('ForgetPassword')
                            }>
                            <Text style={styles.forgetPassText}>
                                Forget password?
                    </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={() =>
                                this.submitLogin()
                                
                            }>
                            <Text
                                style={styles.btnText}>
                                Login
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Ragistration')
                            }>
                            <Text style={styles.dontHaveAccountText}>

                                <Text style={{ textDecorationLine: 'underline' }} > Dont Have an Account?</Text>

                                <Text style={{ color: 'blue' }}> Signup</Text>
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    // console.log(state.login.login)
    state.doctorCategory.doctorCategory = Array.from(state.doctorCategory.doctorCategory)
  return {
    doctorCategory1:state.doctorCategory.doctorCategory,
    login1:state.login.login
  };
};

export default connect(mapStateToProps, {
 login
})(Login);
