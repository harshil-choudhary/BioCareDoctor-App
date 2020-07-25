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

import {threeDModel} from '../../redux/actions/threeDModel'
import {connect} from 'react-redux'

import { Icons, Images } from '../../utils';

import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const modalListContent = [{
  m_id: '1',
  m_img: Images.groot,
  m_name: 'Model Name',
},
{
  m_id: '2',
  m_img: Images.groot,
  m_name: 'Model Name',
},
{
  m_id: '3',
  m_img: Images.groot,
  m_name: 'Model Name',
}
]

class ThreeDModel extends Component {
  state={token:''}
  componentDidMount(){
    // if (this.state.token!= "")reoprts
        this.props.threeDModel()
    // this.formatCategoryData()
}

async _getStorageValue(){
  var value = await AsyncStorage.getItem('token')
    console.log(value);
    if (value == null){
      await AsyncStorage.removeItem('token');
      this.props.navigation.navigate('Login');
    }
    else {
      this.setState({token:value})
    }
    return value
  }



  render() {
    var token = this._getStorageValue();
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
                  <Text style={styles.uName}>3D Model </Text>
                </View>
                {/* ........................................................................................... */}
                <FlatList showsVerticalScrollIndicator={false}
                  data={modalListContent}
                  renderItem={({ item }) => (
                    <>
                      <View style={styles.appointmentWrapper}>
                        <View style={styles.appointmentDetailedWrapper}>
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
                    </>
                  )}
                  keyExtractor={item => item.m_id}
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
    threeDModel:state.threeDModel.threeDModel
  };
};

export default connect(mapStateToProps, {
  threeDModel //Action
})(ThreeDModel);
