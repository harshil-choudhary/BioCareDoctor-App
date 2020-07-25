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
import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CalendarPicker from 'react-native-calendar-picker';
class MarkAvailability extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Background />
                    <View style={{ zIndex: 5, position: 'absolute', bottom: '0%', top: '0%', }}>
                        <KeyboardAvoidingView behavior="padding">
                            <ScrollView
                                contentContainerStyle={styles.scrollWrapper}
                                showsVerticalScrollIndicator={false}>
                                <View style={styles.upperWrapper}>
                                    <Text style={styles.uName}>MarkAvailability</Text>
                                </View>
                                <View style={styles.upperWrapper2}>
                                    <Text style={styles.uName2}>Please tap on the date to unmark availability. Marked dates will be considered available.</Text>
                                </View>
                                <View style={styles.calenderContainer}>
                                    <CalendarPicker
                                        onDateChange={this.onDateChange}
                                        //todayBackgroundColor="#f2e6ff"
                                        selectedDayColor="#7300e6"
                                        selectedDayTextColor="#FFFFFF"
                                    />
                                    {/* 
                                    <View>
                                        <Text>SELECTED DATE:{startDate}</Text>
                                    </View> */}
                                </View>
                                <View style={styles.timeSelectWrapper}>
                                    <Text style={styles.timeSelect}>Select the morning start time and end time</Text>
                                </View>
                                {/* .......................................................................................... */}
                                <View style={styles.appointmentWrapper}>
                                    <View style={styles.appointmentDetailedWrapper}>
                                        <View style={styles.appointmentNameWrapper}>
                                            <Text style={styles.quanText}> From </Text>
                                            <View style={styles.countView}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        09
                                         </Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 18, lineHeight: 40 }}> : </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        00
                                         </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.appointmentNameWrapper1}>
                                            <Text style={styles.quanText}> To </Text>
                                            <View style={styles.countView}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        10
                                         </Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 18, lineHeight: 40 }}> : </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        00
                                         </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {/* ............................................................. */}
                                <View style={styles.timeSelectWrapper}>
                                    <Text style={styles.timeSelect}>Select the after noon start time and end times </Text>
                                </View>
                                <View style={styles.appointmentWrapper}>
                                    <View style={styles.appointmentDetailedWrapper}>
                                        <View style={styles.appointmentNameWrapper}>
                                            <Text style={styles.quanText}> From </Text>
                                            <View style={styles.countView}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        09
                                         </Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 18, lineHeight: 40 }}> : </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        00
                                         </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.appointmentNameWrapper1}>
                                            <Text style={styles.quanText}> To </Text>
                                            <View style={styles.countView}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        10
                                         </Text>
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 18, lineHeight: 40 }}> : </Text>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxQuant}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('HospitalTiming')
                                                      }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        00
                                         </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
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
export default MarkAvailability;
