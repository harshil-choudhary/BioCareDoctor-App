import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker
} from "react-native";
const { width, height } = Dimensions.get('window');
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './style';
import { Icons, Images } from '../../utils';
import {doctorCategory} from '../../redux/actions/doctorCategory'
import {register} from '../../redux/actions/register'
import {connect} from 'react-redux'
class Ragistration extends Component {

    componentDidMount(){
    console.disableYellowBox = true;
        this.props.doctorCategory()
        // this.formatCategoryData()
    }

    submitForm(){
        console.log(this.state)
        console.log('hi')
    }

    

    pickerChange(index){
     this.setState()
    }

    


    state = { category: '',categoryData: '', name:'', email:'', password:'', phone:'', category_id:'', degree:'', exp:'', fees:'', provides_econsult:'' }
    render() {
        
        return (
            <View style={styles.wrapper}>
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
                        <View style={styles.textCont}>
                            <Text style={styles.heading}>Enter Your details to register</Text>
                            {/* <Text style={}>link</Text> */}
                        </View>
                        <TextInput style={styles.textInputStyle}
                            placeholder="Name"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                            value={this.state.name}
                            onChangeText={name => this.setState({name})}
                        />
                        <TextInput style={styles.textInputStyle2}
                            placeholder="Email"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                        />
                        <TextInput style={styles.textInputStyle2}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                        />



                        
                        <View style={styles.symptomWrapper}>
                            <View style={styles.symptomBox}>

                                <Picker style={styles.pickerStyle}
                                    mode={'dropdown'}
                                    selectedValue={this.state.category }
                                    onValueChange={category => this.setState({category})}
                                    >{
                                      this.props.doctorCategory1.map( (v)=>{
                                       return <Picker.Item label={v.name} value={v.id} />
                                      })
                                     }
                                </Picker>

                            </View>
                        </View>
                        
                        <View style={styles.symptomWrapper}>
                            <View style={styles.symptomBox}>

                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.degreeType}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ degreeType: itemValue, degree: itemPosition })}
                                >
                                    <Picker.Item label="Select Degree" value="degree" />
                                    <Picker.Item label="Msc" value="msc" />
                                    <Picker.Item label="Bsc" value="bsc" />
                                </Picker>

                            </View>
                        </View>
                        <View style={styles.symptomWrapper}>
                            <View style={styles.symptomBox}>

                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.experienceYear}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({experienceYear : itemValue, experience: itemPosition })}
                                >
                                    <Picker.Item label="Experience" value="exprnc" />
                                    <Picker.Item label="1 year" value="one" />
                                    <Picker.Item label="2 year" value="two" />
                                    <Picker.Item label="3 year" value="three" />
                                    <Picker.Item label="4 year" value="four" />
                                </Picker>

                            </View>
                        </View>
                        <TextInput style={styles.textInputStyle2}
                            placeholder="Fee"
                            placeholderTextColor='#000000'
                            underlineColorAndroid="transparent"
                            textAlignVertical='center'
                        />
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={() =>
                                this.props.navigation.navigate('AppHome')
                            }>
                                <Text
                                    style={styles.btnText}>
                                    Register
                          </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.doctorCategory.doctorCategory)
    state.doctorCategory.doctorCategory = Array.from(state.doctorCategory.doctorCategory)
  return {
    doctorCategory1:state.doctorCategory.doctorCategory,
    register1:state.register.register
  };
};

export default connect(mapStateToProps, {
 doctorCategory, register
})(Ragistration);
