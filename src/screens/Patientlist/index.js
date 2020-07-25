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
import styles from './style';
import Background from '../components/Background'

import {patientList} from '../../redux/actions/patientList'
import {connect} from 'react-redux'



import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
const patientListContent = [{
    p_id: '1',
    p_img: Images.Patient,
    p_name: 'Appointment',
    screenName: 'Appointment'
},
{
    p_id: '2',
    p_img: Images.Patient,
    p_name: 'Appointment',
    screenName: 'Appointment'
},
{
    p_id: '3',
    p_img: Images.Patient,
    p_name: 'Appointment',
    screenName: 'Appointment'
},
{
    p_id: '4',
    p_img: Images.Patient,
    p_name: 'Appointment',
    screenName: 'Appointment'
}
]
class PatientList extends Component {
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
                            {/* ............................................................................................... */}
                            <FlatList showsVerticalScrollIndicator={false}
                                data={patientListContent}
                                renderItem={({ item }) => (
                                    <>
                                        <View style={styles.cardWrapper3}>
                                            <View style={styles.cardWrapper2}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('PatientDetailList')}
                                                >
                                                    <Image
                                                        style={styles.patientImange}
                                                        source={Images.Patient
                                                        }
                                                    />
                                                    {<Text style={styles.textStyle3} >Patient Name</Text>}
                                                    {<Text style={styles.textStyle4} >ID: BC007</Text>}
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.cardWrapper2}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('PatientDetailList')}
                                                >
                                                    <Image
                                                        style={styles.patientImange}
                                                        source={Images.Patient
                                                        }
                                                    />
                                                    <Text style={styles.textStyle3} >Patient Name</Text>
                                                    <Text style={styles.textStyle4} >ID: BC007</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </>
                                )}
                                keyExtractor={item => item.p_id}
                            />
                            {/* .................................................................................................... */}
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
        patientList:state.patientList.patientList
    };
  };
  
  export default connect(mapStateToProps, {
    patientList //Action
  })(PatientList);

