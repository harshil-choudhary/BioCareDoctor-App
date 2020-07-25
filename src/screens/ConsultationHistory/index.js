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
const consulationListContent = [{
    p_id: '1',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    reportDate: '17-06-2020',
    reportDetails: 'Basic problem and diagnostics',
    screenName: 'ConsultationHistory'
},
{
    p_id: '2',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    reportDate: '17-06-2020',
    reportDetails: 'Basic problem and diagnostics',
    screenName: 'ConsultationHistory'
},
{
    p_id: '3',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    reportDate: '17-06-2020',
    reportDetails: 'Basic problem and diagnostics',
    screenName: 'ConsultationHistory'
},
{
    p_id: '4',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    reportDate: '17-06-2020',
    reportDetails: 'Basic problem and diagnostics',
    screenName: 'ConsultationHistory'
},
{
    p_id: '5',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    reportDate: '17-06-2020',
    reportDetails: 'Basic problem and diagnostics',
    screenName: 'ConsultationHistory'
}
]
class ConsultationHistory extends Component {
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
                                <Text style={styles.uName}>Consultation History</Text>
                            </View>
                            <View style={styles.upperWrapper2}>
                                <Text style={styles.uName2}>Patients reports </Text>
                            </View>
                            <FlatList showsVerticalScrollIndicator={false}
                                data={consulationListContent}
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
                                                            {/* {item.p_name} */}
                                                            09:00
                                                        </Text>
                                                        <Text style={styles.reportNameText1}>
                                                            {/* {item.p_name} */}
                                                            17-06-2020
                                                        </Text>
                                                        <Text style={styles.reportExpText}>
                                                            {/* {item.reportDate} */}
                                                            Instructions given in short
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
                                        this.props.navigation.navigate('DiagnoseDetails')
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
export default ConsultationHistory;
