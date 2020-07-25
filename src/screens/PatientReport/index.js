import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
} from "react-native";
const { width } = Dimensions.get('window');
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';

import Background from '../components/Background'
import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';

import {patientReports} from '../../redux/actions/patientReports'
import {connect} from 'react-redux'

// const reportListContent = [{
//     p_id: '1',
//     p_img: Images.Patient,
//     p_name: 'Patient Name',
//     reportDate: '17-06-2020',
//     reportDetails: 'ReportDetails: BC count report',
//     screenName: 'ConsultationHistory'
// },
// {
//     p_id: '2',
//     p_img: Images.Patient,
//     p_name: 'Patient Name',
//     reportDate: '17-06-2020',
//     reportDetails: 'ReportDetails: BC count report',
//     screenName: 'ConsultationHistory'
// },
// {
//     p_id: '3',
//     p_img: Images.Patient,
//     p_name: 'Patient Name',
//     reportDate: '17-06-2020',
//     reportDetails: 'ReportDetails: BC count report',
//     screenName: 'ConsultationHistory'
// },
// {
//     p_id: '4',
//     p_img: Images.Patient,
//     p_name: 'Patient Name',
//     reportDate: '17-06-2020',
//     reportDetails: 'ReportDetails: BC count report',
//     screenName: 'ConsultationHistory'
// },
// {
//     p_id: '5',
//     p_img: Images.Patient,
//     p_name: 'Patient Name',
//     reportDate: '17-06-2020',
//     reportDetails: 'reportDetails:BC count report',
//     screenName: 'ConsultationHistory'
// }
// ]
class PatientReport extends Component {
    state={token:''}

    componentDidMount(){
        // if (this.state.token!= "")reoprts
          //  var token = this._getStorageValue();
            //console.log(token)
        // this.formatCategoryData()
    }
    async _getStorageValue(){
        var value = await AsyncStorage.getItem('token')
                           
        // console.log(value);
        if (value == null){
          await AsyncStorage.removeItem('token');
          this.props.navigation.navigate('Login');
        }
        else {
            this.setState({token:value})
            
          }
          return value
        }
    render() {
        console.log('log test', this.props.patientReports)
       // var token = this._getStorageValue();
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
                                <Text style={styles.uName}>Patient Report</Text>
                            </View>
                            <View style={styles.upperWrapper2}>
                                <Text style={styles.uName2}>Patients reports </Text>
                            </View>
                            <FlatList showsVerticalScrollIndicator={false}
                                data={this.props.patientReports}
                                renderItem={({ item }) => (
                                    <>
                                        <View style={styles.reportCardWrapper}>
                                            <View style={styles.reportDetailedWrapper}>
                                                <View
                                                    style={[styles.reportSpecsWrapper, { marginTop: 10 }]}>
                                                    <Image
                                                        style={styles.reportdetailImg}
                                                        source={Images.ReportPdf}
                                                    />
                                                    <View style={styles.reportNameWrapper}>
                                                        <Text style={styles.reportNameText}>
                                                            {item.p_name}
                                                        </Text>
                                                        <Text style={styles.reportExpText}>
                                                            {item.reportDate}
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        activeOpacity={1}
                                                        style={styles.boxBtn2}
                                                        onPress={() =>
                                                            this.props.navigation.navigate(item.screenName)
                                                        }>
                                                        <Text
                                                            style={styles.btnText}>
                                                            View
                                                          </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.middleWrapper}>
                                                    <Text style={styles.reportNameText}>
                                                        {item.reportDetails}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </>
                                )}
                                keyExtractor={item => item.p_id}
                            />
                            
                            <View style={styles.btnDetailWrapper}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn3}
                                    onPress={() =>
                                        this.props.navigation.goBack()
                                    }>
                                    <Text
                                        style={styles.btnText1}>
                                        Back
                                         </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn}
                                    onPress={() =>
                                        this.props.navigation.navigate('ConsultationHistory')
                                    }>
                                    <Text
                                        style={styles.btnText}>
                                        Reports
                                         </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.patientReports)
    return {
        patientReports:state.patientReports.patientReport
    };
  };
  
  export default connect(mapStateToProps, {
    patientReports //Action
  })(PatientReport);

