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
import {reportDetails} from '../../redux/actions/reportDetails'
import {connect} from 'react-redux'
import { FlatList } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';


class ReportDetails extends Component {
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
                                <Text style={styles.uName}> Report Details </Text>
                            </View>
                            <View style={styles.upperWrapper2}>
                                <Text style={styles.uName2}>CBC count report</Text>
                            </View>
                            
                            <View style={styles.appointmentWrapper}>
                        <View style={styles.appointmentDetailedWrapper}>
                          <View
                            style={styles.appointmentSpecsWrapper}>
                            <Image
                              style={styles.appointmentdetailImg}
                              source={Images.reportDetails}
                            />
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
const mapStateToProps = (state) => {
  return {
    reportDetails:state.reportDetails.reportDetails
  };
};

export default connect(mapStateToProps, {
  reportDetails //Action
})(ReportDetails);

