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
import Background from '../components/Background'
import styles from './style';
import { Icons, Images } from '../../utils';
import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CalendarPicker from 'react-native-calendar-picker';
import DropDownPicker from 'react-native-dropdown-picker';
class HospitalTiming extends Component {
    state = { category: '' }
    render() {
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
                            <Text style={styles.uName}>Hi! Shashank</Text>
                        </View>
                        <View style={styles.upperWrapper2}>
                            <Text style={styles.uName2}>Please tap on the date to unmark availability. Marked dates will be considered available.</Text>
                        </View>
                        <DropDownPicker
                            items={[
                                { label: 'Select Category', value: '' },
                                { label: 'UK', value: 'uk' },
                                { label: 'France', value: 'france' },
                            ]}
                            placeholder="Select Hospital"
                            defaultValue={this.state.category}
                            containerStyle={{ height: 65, }}
                            style={styles.dropDownStyle}
                            arrowStyle='{{marginRight: 10}}'
                            arrowColor='red'
                            dropDownStyle={{ backgroundColor: '#fafafa', width: width * 0.95, marginTop: 10,  zIndex:999,}}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                         <View style={styles.symptomWrapper, {zIndex:10}}>
                                <TextInput
                                    style={styles.symptomBox}
                                    placeholder="No of patient in morning "
                                    placeholderTextColor='#000000'
                                    />
                            </View>
                            <View style={styles.timeSelectWrapper}>
                                    <Text style={styles.timeSelect}>Select the morning start time and end time</Text>
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
                                <View style={styles.symptomWrapper}>
                                <TextInput
                                    style={styles.symptomBox}
                                    placeholder="No of patient in afternoon "
                                    placeholderTextColor='#000000'
                                    />
                            </View>
                            <View style={styles.timeSelectWrapper}>
                                    <Text style={styles.timeSelect}>Select the after noon start time and end time</Text>
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
export default HospitalTiming;
