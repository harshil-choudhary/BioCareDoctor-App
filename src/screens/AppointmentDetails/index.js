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
import Background from '../components/Background'
import styles from './style';
import { Icons, Images } from '../../utils';

class AppointmentDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Background />
                    <View style={{ zIndex: 5, position: 'absolute', top: '0%', bottom: '0%', }}>
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
                                    <Text style={styles.uName}>Appointment Details</Text>
                                </View>
                                {/* ............................................................................................ */}
                                <View style={styles.appointmentWrapper}>
                                    <View style={styles.appointmentDetailedWrapper}>
                                        <View
                                            style={[styles.appointmentSpecsWrapper, { marginTop: 3 }]}>
                                            <Image
                                                style={styles.appointmentdetailImg}
                                                source={Images.Patient}
                                            />
                                            <View style={styles.appointmentNameWrapper}>
                                                <Text style={styles.appointmentNameText}>
                                                    Patient Name
                                                        </Text>
                                                <Text style={styles.appointmentTimeText}>
                                                    4.8
                                                        </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxBtn2}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('PatientDetailList')
                                                    }>
                                                    <Text
                                                        style={styles.btnText}>
                                                        Profile
                                           </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.confirmAppointmentWrapper}>
                                                <Image
                                                    style={styles.greenTickIMG}
                                                    source={Images.GreenTick}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {/* ............................................................................................... */}
                                <View style={styles.inPersonAppWrapper}>
                                    <Text style={styles.inPersonAppText}>Appointment Info</Text>
                                </View>
                                {/* .............................................................................................. */}
                                <View style={styles.infoDetailedWrapper}>
                                    <View
                                        style={[styles.appointmentSpecsWrapper, { marginTop: 3 }]}>
                                        <View style={styles.middleWrapper}>
                                            <View style={styles.ImageWrapper}>
                                                <Image style={styles.ImageIconStyle} source={Images.Planner} />
                                                <Text style={styles.dateText}>17-06-2020 </Text>
                                            </View>
                                            <View style={styles.ImageWrapper}>
                                                <Image style={styles.ImageIconStyle} source={Images.Alarmclock} />
                                                <Text style={styles.timeText}>09:00</Text>
                                            </View>
                                            <View style={styles.ImageWrapper}>
                                                <Image style={styles.ImageIconStyle} source={Images.WorldLoc} />
                                                <Text style={styles.visitText}>Clinic Visit</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {/* ............................................................................................. */}
                                <View style={styles.noteWrapper}>
                                    <Text style={styles.noteText}>Notes</Text>
                                </View>
                                <View style={styles.textCont}>
                                    <Text style={styles.heading}>Here we will be showing any remark entered by the user
                                    and if he does not this complete notes section
                                 will be hidden to avoid confusion </Text>
                                </View>
                                <View style={styles.symptomTextWrapper}>
                                    <Text style={styles.noteText}>Symptoms</Text>
                                </View>
                                <View style={styles.symptomWrapper}>
                                    <View style={styles.symptomBox}>
                                        <Text
                                            style={styles.symptomText}>
                                            Cough
                                           </Text>
                                    </View>
                                    <View style={styles.symptomBox}>
                                        <Text
                                            style={styles.symptomText}>
                                            Cold
                                             </Text>
                                    </View>
                                </View>
                                <View style={styles.symptomWrapper}>
                                    <View style={styles.symptomBox}>
                                        <Text
                                            style={styles.symptomText}>
                                            Fever
                                           </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </View>
        );
    }
}
export default AppointmentDetails;
