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

import {myNetwork} from '../../redux/actions/myNetwork'
import {connect} from 'react-redux'

const docListContent = [{
    d_id: '1',
    d_img: Images.Patient,
    d_name: 'Model Name',
    d_type: ' General Physician',
    d_adress: 'Address: Nashik',
},
{
    d_id: '2',
    d_img: Images.Patient,
    d_name: 'Model Name',
    d_type: ' General Physician',
    d_adress: 'Address: Nashik',
},
{
    d_id: '3',
    d_img: Images.Patient,
    d_name: 'Model Name',
    d_type: ' General Physician',
    d_adress: 'Address: Nashik',
}
]
class MyNetwork extends Component {
    state={token:''}
    componentDidMount(){
        // if (this.state.token!= "")reoprts
            this._getStorageValue()
        // this.formatCategoryData()
    }
    async _getStorageValue(){
        var value = await AsyncStorage.getItem('token')
                            .then((response)=>{
                                console.log(response)
                            })
        console.log(value);
        if (value == null){
          await AsyncStorage.removeItem('token');
          this.props.navigation.navigate('Login');
        }
        else {
            this.setState({token:value})
            this.props.myNetwork(this.state.token)
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
                                    <Text style={styles.uName}> My Network </Text>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.boxBtn}
                                        onPress={() =>
                                            console.log("Add Doctor")
                                        }>
                                        <Text
                                            style={styles.btnText}>
                                            Add Doctor
                                       </Text>
                                    </TouchableOpacity>
                                </View>
                                <FlatList showsVerticalScrollIndicator={false}
                                    data={docListContent}
                                    renderItem={({ item }) => (
                                        <>
                                            <View style={styles.appointmentWrapper}>
                                                <View style={styles.appointmentDetailedWrapper}>
                                                    <View
                                                        style={[styles.appointmentSpecsWrapper, { marginTop: 8 }]}>
                                                        <Image
                                                            style={styles.appointmentdetailImg}
                                                            source={Images.Patient}
                                                        />
                                                        <Text style={styles.docNameText}>
                                                            Doctors Name
                                             </Text>
                                                        <Text style={styles.docTypeText}>
                                                            General Physician
                                              </Text>
                                                    </View>
                                                    <View style={styles.middleWrapper}>
                                                        <TouchableOpacity
                                                            style={styles.profileImgWrapper}
                                                            activeOpacity={1}
                                                            onPress={() => console.log("Call Doctor")}>
                                                            <Image
                                                                source={Images.callIcon}
                                                                style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                                            />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={styles.profileImgWrapper}
                                                            activeOpacity={1}
                                                            onPress={() => console.log("Chat with Doctor")}>
                                                            <Image
                                                                source={Images.chatIcon}
                                                                style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                                            />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={styles.profileImgWrapper}
                                                            activeOpacity={1}
                                                            onPress={() => console.log("Video Call Doctor")}>
                                                            <Image
                                                                source={Images.videoIcon}
                                                                style={{ width: '100%', height: '100%', borderRadius: 50 }}
                                                            />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            style={styles.boxBtn2}
                                                            onPress={() =>
                                                                console.log("Refer Patient")
                                                            }>
                                                            <Text
                                                                style={styles.btnText1}>
                                                                Refer Patient
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={styles.addrsWrapper}>
                                                        <Text style={styles.docAdrssText}>
                                                            Address: Nashik
                                                          </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </>
                                    )}
                                    keyExtractor={item => item.d_id}
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
        myNetwork:state. myNetwork. myNetwork
    };
  };
  
  export default connect(mapStateToProps, {
    myNetwork //Action
  })(MyNetwork);

