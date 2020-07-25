import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    TextInput
} from "react-native";
const { width } = Dimensions.get('window');
import styles from './style';
import Background from '../components/Background'
import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

import {bankDetails} from '../../redux/actions/bankDetails'
import {connect} from 'react-redux'
class BankDetails extends Component {
    state = {category: ''}
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
                            <View style={styles.upperWrapper}>
                                <Text style={styles.uName}>Bank Details</Text>
                            </View>
                            <View style={styles.upperWrapper2}>
                                <Text style={styles.uName2}>Please check your bank account details for payments</Text>
                            </View>
                            <DropDownPicker
                            items={[
                                {label: 'Select Category', value: ''},
                                {label: 'UK', value: 'uk'},
                                {label: 'France', value: 'france'},
                            ]}
                            placeholder="Select Bank"
                            defaultValue={this.state.category}
                            containerStyle={{height: 65,}}
                            style={styles. dropDownStyle}
                            arrowStyle='{{marginRight: 10}}'
                            arrowColor='red'
                            
                            
                            
                            dropDownStyle={{backgroundColor: '#fafafa', width: width * 0.9,marginTop: 10}}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                            <TextInput style={styles.textInputStyle2}
                                placeholder="Account holders Name"
                                placeholderTextColor='#000000'
                                underlineColorAndroid="transparent"
                                textAlignVertical='center'
                            />
                            <TextInput style={styles.textInputStyle2}
                                placeholder="Account number"
                                placeholderTextColor='#000000'
                                underlineColorAndroid="transparent"
                                textAlignVertical='center'
                            />
                            <TextInput style={styles.textInputStyle2}
                                placeholder="IFSC Code "
                                placeholderTextColor='#000000'
                                underlineColorAndroid="transparent"
                                textAlignVertical='center'
                            />
                            <TextInput style={styles.textInputStyle2}
                                placeholder="GSTIN "
                                placeholderTextColor='#000000'
                                underlineColorAndroid="transparent"
                                textAlignVertical='center'
                            />
                            <TextInput style={styles.textInputStyle2}
                                placeholder="Branch Name"
                                placeholderTextColor='#000000'
                                underlineColorAndroid="transparent"
                                textAlignVertical='center'
                            />
                            <TextInput style={styles.textInputStyle2}
                                placeholder="Pan Card"
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
                                    Save
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
        bankDetails:state.bankDetails.bankDetails
    };
  };
  
  export default connect(mapStateToProps, {
    bankDetails
  })(BankDetails);
  
