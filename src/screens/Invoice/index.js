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

import {invoiceDetails} from '../../redux/actions/invoiceDetails'
import {connect} from 'react-redux'

import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';


const paymentListContent = [{
    u_id: '1',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: ' Reason of payment or remarks',

},
{
    u_id: '2',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: 'Reason of payment or remarks',

},
{
    u_id: '3',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: 'Reason of payment or remarks',

},
{
    u_id: '4',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: 'Reason of payment or remarks',

},
{
    u_id: '5',
    u_img: Images.Patient,
    u_name: 'Username',
    paymentDate: '17-06-2020',
    paymentDetails: ' Reason of payment or remarks',

}


]

class Invoice extends Component {
    state={token:''}

    componentDidMount(){
        // if (this.state.token!= "")reoprts
            this._getStorageValue()
        // this.formatCategoryData()
    }
    async _getStorageValue(){
        var value = await AsyncStorage.getItem('token')
                            .then((response)=>{
                                console.log(response)
                            })
        console.log(value);
        if (value == null){
          await AsyncStorage.removeItem('token');
          this.props.navigation.navigate('Login');
        }
        else {
            this.setState({token:value})
            this.props.invoiceDetails(this.state.token)
          }
          return value
        }
    render() {
        var token = this._getStorageValue();
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
                                <Text style={styles.uName}>Invoice List</Text>
                            </View>
                            <View style={styles.upperWrapper2}>

                                <Text style={styles.uName2}>Please select your desired payment method </Text>
                            </View>

                            {/* ........................................................................................... */}
                            <FlatList showsVerticalScrollIndicator={false}
                                data={paymentListContent}
                                renderItem={({ item }) => (

                                    <>
                                        <View style={styles.reportCardWrapper}>
                                            <View style={styles.reportDetailedWrapper}>
                                                <View
                                                    style={[styles.reportSpecsWrapper, { marginTop: 15 }]}>
                                                    <Image
                                                        style={styles.reportdetailImg}
                                                        source={Images.Patient}
                                                    />
                                                    <View style={styles.reportNameWrapper}>
                                                        <Text style={styles.reportNameText}>
                                                            {item.u_name}
                                                        </Text>
                                                        <Text style={styles.reportExpText}>
                                                            {item.paymentDate}

                                                        </Text>
                                                        <Text style={styles.reportExpText}>
                                                            {item.paymentDetails}


                                                        </Text>
                                                    </View>
                                                    <View style={styles.dateWrapper}>
                                                        {/* <Text style={styles.numStyle}>{item.paymentAmount}</Text> */}
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            style={styles.boxBtn2}
                                                            onPress={() =>
                                                                console.log("View Invoice")
                                                            }>
                                                            <Text
                                                                style={styles.btnText}>
                                                                View
                                                             </Text>
                                                        </TouchableOpacity>

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
        invoiceDetails:state.invoiceDetails.invoiceDetails
    };
  };
  
  export default connect(mapStateToProps, {
    invoiceDetails //Action
  })(Invoice);
  


