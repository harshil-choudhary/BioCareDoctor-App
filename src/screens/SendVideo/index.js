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

import {sendVideo} from '../../redux/actions/sendVideo'
import {connect} from 'react-redux'

class SendVideo extends Component {
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
                                    <Text style={styles.uName}> Send Video </Text>
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
                                <TextInput style={styles.textInputStyle}
                                    placeholder="Select User"
                                    placeholderTextColor='#000000'
                                    underlineColorAndroid="transparent"
                                    textAlignVertical='center'

                                />
                                <View style={styles.reportCardWrapper}>
                                    <View style={styles.reportDetailedWrapper}>
                                        <View
                                            style={[styles.appointmentSpecsWrapper, { marginTop: 10 }]}>
                                            <Image
                                                style={styles.appointmentdetailImg}
                                                source={Images.playingBtn}>
                                            </Image>
                                            <Text style={styles.uploadText}> Upload </Text>
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
        sendVideo:state.sendVideo.sendVideo
    };
  };
  
  export default connect(mapStateToProps, {
    sendVideo //Action
  })(SendVideo);
  

