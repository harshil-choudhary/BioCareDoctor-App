import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
const { width } = Dimensions.get('window');
import Background from '../components/Background'
import styles from './style';

import { Icons, Images } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';

import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {profile} from '../../redux/actions/profile'
import {connect} from 'react-redux'

const dashboardContent = [{
  d_id: '1',
  d_img: Images.Patient,
  d_name: 'Appointments',
  screenName: 'Appointments'
},
{
  d_id: '2',
  d_img: Images.Patient,
  d_name: 'Reports',
  screenName: 'Report'
},
{
  d_id: '3',
  d_img: Images.Patient,
  d_name: 'Wallet',
  screenName: 'Wallet'
},
{
  d_id: '4',
  d_img: Images.Patient,
  d_name: 'Invoice',
  screenName: 'Invoice'
},
{
  d_id: '5',
  d_img: Images.Patient,
  d_name: 'Viewed Patient',
  screenName: 'ViewedPatient'
},
{
  d_id: '6',
  d_img: Images.Patient,
  d_name: 'Vaccination',
  screenName: 'Vaccination'
},
{
  d_id: '7',
  d_img: Images.Patient,
  d_name: 'Mark Availability',
  screenName: 'MarkAvailability'
}
]

class Home extends Component {

  state = {token:"", username:''}

   async _getStorageValue(){
            var value = await AsyncStorage.getItem('token')
            if (value != null){
                
                this.setState({token:value})
               
                var value2 = this.props.profile(value)
                this.props.profile(value)
      
            }
            else
            

            return value
          }

          componentDidMount(){
            this._getStorageValue();
          }

  render() {
    console.log(this.props.profile1)
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
                  <TouchableOpacity
                    style={styles.userNameWrapper}
                    activeOpacity={1}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.uName}>Hello! {this.props.profile1.name}</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.upperWrapper2}>
                  <Text style={styles.uName2}>You have consulted 3 out of 4 patients today</Text>
                  <View style={styles.medalIconWrapper}>
                    <Image style={styles.medalIconStyle} source={Icons.MedalIcon} />
                  </View>
                </View>
                <View style={styles.progressBarStyle}>
                  <ProgressBar
                    progress={0.50}
                    width={340}
                    height={15}
                    animated={true}
                    borderRadius={10}
                    color={'#56EEB7'}
                    unfilledColor={'#E5E5E5'}
                    borderWidth={0}
                  // borderColor={'rgba(0, 0, 0, 0.1)'}
                  />
                </View>
                <View style={styles.upperWrapper3}>
                  <Text style={styles.uName2}>You are doing great this month </Text>
                </View>
                <View style={styles.appointmentWrapper}>
                  <View >
                    <Text style={styles.numStyle}>4</Text>
                    <Text style={styles.textStyle} >Appointments</Text>
                  </View>
                  <View style={styles.patientWrapper} >
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        this.props.navigation.navigate('PatientList')}
                    >
                      <Text style={styles.numStyle}>3</Text>
                      <Text style={styles.textStyle2} >Patients</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.patientWrapper} >
                    <Text style={styles.numStyle}>6</Text>
                    <Text style={styles.textStyle2} >Reports</Text>
                  </View>
                </View>
                {/* .............................................................................................. */}
                <View style={styles.cardWrapper1}>
                  <Text style={styles.uName3}>You are on a 6 day streak </Text>
                  <View style={styles.cardWrapper3}>
                    <View>
                      <View style={styles.cardWrapper2}>
                        <Text style={styles.numStyle1}>6</Text>
                        <Text style={styles.textStyle3} >Patients</Text>
                      </View>
                      <Text style={styles.dateText}>June 13</Text>
                    </View>
                    <View>
                      <View style={styles.cardWrapper2}>
                        <Text style={styles.numStyle1}>3</Text>
                        <Text style={styles.textStyle3} >Patients</Text>
                      </View>
                      <Text style={styles.dateText}>June 14</Text>
                    </View>
                    <View>
                      <View style={styles.cardWrapper2}>
                        <Text style={styles.numStyle1}>4</Text>
                        <Text style={styles.textStyle3} >Patients</Text>
                      </View>
                      <Text style={styles.dateText}>June 15</Text>
                    </View>
                    <View>
                      <View style={styles.cardWrapper2}>
                        <Text style={styles.numStyle1}>5</Text>
                        <Text style={styles.textStyle3} >Patients</Text>
                      </View>
                      <Text style={styles.dateText}>June 16</Text>
                    </View>
                    <View>
                      <View style={styles.cardWrapper2}>
                        <Text style={styles.numStyle1}>6</Text>
                        <Text style={styles.textStyle3} >Patients</Text>
                      </View>
                      <Text style={styles.dateText}>June 17</Text>
                    </View>
                  </View>
                </View>
                {/* ................................................................................................. */}
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dashboardContent}
                  renderItem={({ item }) => (
                    <>
                      <View style={styles.cardWrapper}>
                        <View style={styles.cardSpecsWrapper}>
                          <Image
                            style={styles.carddetailImg}
                            source={item.d_img}
                          />
                          <View style={styles.cardNameWrapper}>
                            <TouchableOpacity
                              activeOpacity={1}
                              onPress={() =>
                                this.props.navigation.navigate(item.screenName)}
                            >
                              <Text style={styles.appointmentText}>
                                {item.d_name}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </>
                  )}
                  keyExtractor={item => item.d_id}
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
    profile1:state.profile.profile
  };
};

export default connect(mapStateToProps, {
 profile
})(Home);
