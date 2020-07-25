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
import styles from './style';
import Background from '../components/Background'
import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
//Libraries
import LinearGradient from 'react-native-linear-gradient';
class PatientDetailList extends Component {
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
                                <Text style={styles.uName}>Patient list</Text>
                            </View>
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
                                                Patient Name
                                            </Text>
                                            <Text style={styles.reportExpText}>
                                                ID: BC007
                                               </Text>
                                            <View style={styles.dateIconWrapper}>
                                                <Image style={styles.ImageIconStyle} source={Images.cakeImage} />
                                                <Text style={styles.reportExpText1}>
                                                    17-06-2020
                                               </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.middleWrapper}>
                                        <TouchableOpacity
                                            style={styles.profileImgWrapper}
                                            activeOpacity={1}
                                            onPress={() => this.props.navigation.navigate('Profile')}>
                                            <Image
                                                source={Images.callIcon}
                                                style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.profileImgWrapper}
                                            activeOpacity={1}
                                            onPress={() => this.props.navigation.navigate('Profile')}>
                                            <Image
                                                source={Images.chatIcon}
                                                style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.profileImgWrapper}
                                            activeOpacity={1}
                                            onPress={() => this.props.navigation.navigate('Profile')}>
                                            <Image
                                                source={Images.videoIcon}
                                                style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.inPersonAppWrapper}>
                                <Text style={styles.inPersonAppText}>Appointment Info</Text>
                            </View>
                            <View style={styles.infoDetailedWrapper}>
                                <View
                                    style={[styles.appointmentSpecsWrapper, { marginTop: 3 }]}>
                                    <View style={styles.middleWrapper1}>
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
                            <View style={styles.noteWrapper}>
                                <Text style={styles.noteText}>Notes</Text>
                            </View>
                            <View style={styles.textCont}>
                                <Text style={styles.heading}>Here we will be showing any remark entered by the user
                                and if he does not this complete notes section
                                 will be hidden to avoid confusion </Text>
                            </View>
                            <View style={styles.symptomWrapper}>
                                <View style={styles.symptomBox}>
                                    <Text
                                        style={styles.symptomText}>
                                        Symptoms
                                           </Text>
                                </View>
                            </View>
                            <View style={styles.symptomDetailWrapper}>
                                <View style={styles.symptomDetailBox}>
                                    <Text
                                        style={styles.symptomDetailText}>
                                        Cough
                                           </Text>
                                </View>
                                <View style={styles.symptomDetailBox}>
                                    <Text
                                        style={styles.symptomDetailText}>
                                        Fever
                                             </Text>
                                </View>
                                <View style={styles.symptomDetailBox}>
                                    <Text
                                        style={styles.symptomDetailText}>
                                        Cold
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.symptomWrapper}>
                                <View style={styles.symptomBox}>
                                    <Text
                                        style={styles.symptomText}>
                                        Past History
                                           </Text>
                                </View>
                            </View>
                            <View style={styles.btnDetailWrapper}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn2}
                                    onPress={() =>
                                        this.props.navigation.navigate('Profile')
                                    }>
                                    <Text
                                        style={styles.btnText1}>
                                        Cancel
                                           </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn}
                                    onPress={() =>
                                        this.props.navigation.navigate('PatientDetails')
                                    }>
                                    <Text
                                        style={styles.btnText}>
                                        Consult
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
export default PatientDetailList;
