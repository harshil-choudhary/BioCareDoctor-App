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
//Libraries
import LinearGradient from 'react-native-linear-gradient';

const VirtualAppointmentListContent = [{
    p_id: '1',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    v_appoinmentDate: '17-06-2020',
    v_appointmentTime: '09.00',
    v_appointmentNumber: 'Hospital Name',
    v_appointmentStatus: 'pending',
    screenName: 'Home'
},
{
    p_id: '2',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    v_appoinmentDate: '18-06-2020',
    v_appointmentTime: '09.00',
    v_appointmentNumber: 'Hospital Name',
    v_appointmentStatus: 'pending',
    screenName: 'Home'
},
{
    p_id: '3',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    v_appoinmentDate: '17-06-2020',
    v_appointmentTime: '09.00',
    v_appointmentNumber: 'Hospital Name',
    v_appointmentStatus: 'pending',
    screenName: 'Home'
},
{
    p_id: '4',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    v_appoinmentDate: '17-06-2020',
    v_appointmentTime: '09.00',
    v_appointmentNumber: 'Hospital Name',
    v_appointmentStatus: 'pending',
    screenName: 'Home'
},
{
    p_id: '5',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    v_appoinmentDate: '17-06-2020',
    v_appointmentTime: '09.00',
    v_appointmentNumber: 'Hospital Name',
    v_appointmentStatus: 'pending',
    screenName: 'Home'
}
]

class VirtualAppointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          data: [],
          value: '',
        };
        this.arrayholder = [];
      }
      
      
      componentDidMount() {
        this.setState({ loading: true });
            this.setState({
              data: VirtualAppointmentListContent,
              loading: false,
            });
            this.arrayholder=VirtualAppointmentListContent;
      }
    
      searchFilterFunction = text => {
        this.setState({
          value: text,
        });
    
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.p_name.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
        });
      };
    

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
                                    <Text style={styles.uName}>Virtual Appointments</Text>
                                </View>
                                {/*..........................................................................  */}
                                <View style={styles.bfbottomWrapper}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            this.props.navigation.navigate('Appointments')}
                                        style={styles.InPersonTextbtnWrapper}
                                    >
                                        <Text style={styles.inPersonTextbtn}>In - Person</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() =>
                                            this.props.navigation.navigate('VirtualAppointments')}
                                        style={styles.virtualTextbtnWrapper}
                                    >
                                        <Text style={styles.bookTextbtn}>
                                            Virtual
                  </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* ...................................................................................... */}
                                <View style={styles.inPersonAppWrapper}>
                                    <Text style={styles.inPersonAppText}>     Virtual Appointments</Text>
                                    <View style={styles.inputWrapper}>
                                        <TextInput
                                            style={styles.searchinp}
                                            placeholder="Search"
                                            placeholderTextColor='#29E093'
                                            onChangeText={text => this.searchFilterFunction(text)}
                                        />
                                        <Image style={styles.searchIconStyle}
                                            source={Icons.searchIcon} />
                                    </View>
                                </View>
                                {/* ........................................................................................................ */}
                                <FlatList showsVerticalScrollIndicator={false}
                                    data={this.state.data}
                                    renderItem={({ item }) => (
                                        <>
                                            <View style={styles.appointmentWrapper}>
                                                <View style={styles.appointmentDetailedWrapper}>
                                                    <View
                                                        style={[styles.appointmentSpecsWrapper, { marginTop: 10 }]}>
                                                        <Image
                                                            style={styles.appointmentdetailImg}
                                                            source={Images.Patient}
                                                        />
                                                        <View style={styles.appointmentNameWrapper}>
                                                            <Text style={styles.appointmentNameText}>
                                                                {item.p_name}
                                                            </Text>
                                                            <Text style={styles.appointmentTimeText}>
                                                                {item.v_appointmentTime}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.confirmAppointmentWrapper}>
                                                            <Text style={styles.dateWrapper}>{item.v_appoinmentDate}</Text>
                                                            <TouchableOpacity
                                                                activeOpacity={1}
                                                                style={styles.boxBtn2}
                                                                onPress={() =>
                                                                    this.props.navigation.navigate('Report')
                                                                }>
                                                                <Text
                                                                    style={styles.btnText}>
                                                                    Confirm
                                           </Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                    <View style={styles.middleWrapper}>
                                                        <Text >
                                                            {item.v_appointmentNumber}
                                                        </Text>
                                                        <Text style={styles.AppointStatusText}>
                                                            {item.v_appointmentStatus}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </>
                                    )}
                                    keyExtractor={item => item.p_id}
                                />
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </View>
        );
    }
}
export default VirtualAppointments;
