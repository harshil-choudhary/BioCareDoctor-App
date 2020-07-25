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

import {SubscriptionPackage} from '../../redux/actions/SubscriptionPackage'
import {connect} from 'react-redux'

class Subscription extends Component {
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
                  <Text style={styles.uName}>Welcome! Shashank </Text>
                </View>
                <View style={styles.upperWrapper2}>
                                    <Text style={styles.uName2}>
                                    You are almost done. Just one more step to complete onboarding
                                    </Text>
                                    <Text style={styles.uName2}>
                                    Select your subscription package to enter a new healthy world
                                    </Text>
                                    
                                   
                                </View>
                                <View style={styles.appointmentWrapper}>
                        <View style={styles.appointmentDetailedWrapper}>
                        <Text style={styles.freeText}>
                        FREE
                            </Text>
                          <View
                            style={[styles.appointmentSpecsWrapper, { marginTop: 10 }]}>
                            <Image
                              style={styles.appointmentdetailImg}
                              source={Images.groot}
                            />
                          </View>
                          <View style={styles.middleWrapper}>
                            <Text style={styles.modalText}>
                              Model Name
                            </Text>
                            <TouchableOpacity
                              activeOpacity={1}
                              style={styles.boxBtn2}
                              onPress={() =>
                                this.props.navigation.navigate('SearchDoctor')
                              }>
                              <Text
                                style={styles.btnText1}>
                                Render
                                         </Text>
                            </TouchableOpacity>
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
    SubscriptionPackage:state.SubscriptionPackage.SubscriptionPackage
  };
};

export default connect(mapStateToProps, {
  SubscriptionPackage //Action
})(Subscription);



