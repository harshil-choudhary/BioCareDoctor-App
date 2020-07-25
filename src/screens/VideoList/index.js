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
import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {videoList} from '../../redux/actions/videoList'
import {connect} from 'react-redux'

const PatientVideoListContent = [{
    p_id: '1',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    date: '17-06-2020',
    p_vid: Images.operation,
},
{
    p_id: '2',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    date: '17-06-2020',
    p_vid: Images.operation,
},
{
    p_id: '3',
    p_img: Images.Patient,
    p_name: 'Patient Name',
    date: '17-06-2020',
    p_vid: Images.operation,
}
]
class VideoList extends Component {
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
                                <Text style={styles.uName}> Video List </Text>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.boxBtn}
                                    onPress={() =>
                                        this.props.navigation.navigate('SendVideo')
                                    }>
                                    <Text
                                        style={styles.btnText}>
                                        Send Video to Patient
                                   </Text>
                                </TouchableOpacity>
                            </View>
{/* ...................................................................................... */}
<FlatList showsVerticalScrollIndicator={false}
                                    data={PatientVideoListContent}
                                    renderItem={({ item }) => (
                                        <>
                        
                            <View style={styles.reportCardWrapper}>
                                <View style={styles.reportDetailedWrapper}>
                                    <View
                                        style={[styles.reportSpecsWrapper, { marginTop:15 }]}>
                                        <Image
                                            style={styles.reportdetailImg}
                                            source={Images.Patient}
                                        />
                                        <View style={styles.reportNameWrapper}>
                                            <Text style={styles.reportNameText}>
                                            Patient Name
                                            
                                            </Text>
                                            <Text style={styles.reportExpText}>
                                            17-06-2020 
                                               
                                            </Text>
                                         
                                        </View>
                                     
                                        
                                    </View>
                                    <View
                            style={[styles.appointmentSpecsWrapper, { marginTop: 10 }]}>
                            <Image
                              style={styles.appointmentdetailImg}
                              source={Images.operation}>
                             </Image>
                            
                            
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
const mapStateToProps = (state) => {
    return {
        videoList:state.videoList.videoList
    };
  };
  
  export default connect(mapStateToProps, {
    videoList //Action
  })( VideoList);
  

