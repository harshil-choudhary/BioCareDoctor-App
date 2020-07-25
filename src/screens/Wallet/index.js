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

import {walletTransactions} from '../../redux/actions/walletTransactions'
import {connect} from 'react-redux'

const paymentListContent = [{
    u_id: '1',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: ' Reason of payment or remarks',
    paymentAmount:'30'
   
},
{
    u_id: '2',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: 'Reason of payment or remarks',
    paymentAmount:'30'
},
{
    u_id: '3',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: 'Reason of payment or remarks',
    paymentAmount:'30'
},
{
    u_id: '4',
    u_img: Images.Patient,
    u_name:'Username',
    paymentDate: '17-06-2020',
    paymentDetails: 'Reason of payment or remarks',
    paymentAmount:'30'
},
{
    u_id: '5',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: ' Reason of payment or remarks',
    paymentAmount:'30'
}


]
class Wallet extends Component {
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
                            <View style={styles.upperWrapper}>
                                <Text style={styles.uName}>Welcome!</Text>
                            </View>
                            <View style={styles.upperWrapper2}>

                                <Text style={styles.uName2}>Please select your desired payment method</Text>
                            </View>



                            <View style={styles.appointmentWrapper}>
                                <View style={styles.appointmentDetailedWrapper}>
                                    <View

                                        style={[styles.appointmentSpecsWrapper, { marginTop: 15 }]}>


                                        <View style={styles.inputWrapper}>
                                            <Text style={styles.balanceTextNum}>200</Text>
                                            <Text style={styles.balanceText}> Balance </Text>
                                        </View>

                                        <View style={styles.inputWrapper2}>
                                            <TextInput style={styles.textInputStyle}
                                                // placeholder="Name"
                                                placeholderTextColor='#000000'
                                                underlineColorAndroid="transparent"
                                            // textAlignVertical='center'
                                            />
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                style={styles.boxBtn2}
                                                onPress={() =>
                                                    this.props.navigation.navigate('Profile')
                                                }>
                                                <Text
                                                    style={styles.btnText}>
                                                    Send Money to Bank
                                           </Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>

                                </View>


                            </View>
 {/* ................................................................................................ */}
 <FlatList showsVerticalScrollIndicator={false}
                                data={paymentListContent}
                                renderItem={({ item }) => (

                                    <>
                            <View style={styles.reportCardWrapper}>
                                <View style={styles.reportDetailedWrapper}>
                                    <View
                                        style={[styles.reportSpecsWrapper, { marginTop:15 }]}>
                                        <Image
                                            style={styles.reportdetailImg}
                                            source={Images.Patient}
                                        />
                                        <View style={styles.reportNameWrapper}>
                                            <Text style={styles.reportNameText}>
                                                {item.u_name}
                                            
                                            </Text>
                                            <Text style={styles.reportExpText}>
                                                {item. paymentDate}
                                               
                                            </Text>
                                            <Text style={styles.reportExpText}>
                                                {item.  paymentDetails}
                                              
                                            </Text>
                                        </View>
                                        <View style={styles.dateWrapper}>
                                <Text style={styles.numStyle}>{item.paymentAmount}</Text>
                                        </View>

                                    </View>

                                </View>
                            </View>



                            </>
                                )}
                                keyExtractor={item => item.u_id}
                            />





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
        walletTransactions:state.walletTransactions.walletTransactions
    };
  };
  
  export default connect(mapStateToProps, {
    walletTransactions //Action
  })(Wallet);
  


