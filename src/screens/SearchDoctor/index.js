import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,Picker
} from "react-native";
const { width } = Dimensions.get('window');
import Background from '../components/Background'
import styles from './style';
import { Icons, Images } from '../../utils';
import ProgressBar from 'react-native-progress/Bar';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {searchNetwork} from '../../redux/actions/searchNetwork'
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

class SearchDoctor extends Component {
    state={ experience:0,degree:'',token:''}

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
            this.props. searchNetwork (this.state.token)
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
                                    <Text style={styles.uName}>Search </Text>
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
                                
                                <View style={styles.symptomWrapper}>
                            <View style={styles.symptomBox}>

                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.degreeType}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({ degreeType: itemValue, degree: itemPosition })}
                                >
                                    <Picker.Item label="Select Categories" value="degree" />
                                    <Picker.Item label="Msc" value="msc" />
                                    <Picker.Item label="Bsc" value="bsc" />
                                </Picker>

                            </View>
                        </View>

                        <View style={styles.symptomWrapper}>
                            <View style={styles.symptomBox}>

                                <Picker style={styles.pickerStyle}
                                    selectedValue={this.state.experienceYear}
                                    mode={'dropdown'}
                                    onValueChange={(itemValue, itemPosition) =>
                                        this.setState({experienceYear : itemValue, experience: itemPosition })}
                                >
                                    <Picker.Item label="Select city" value="exprnc" />
                                    <Picker.Item label="Delhi" value="one" />
                                    <Picker.Item label="chandigarh" value="two" />
                                    <Picker.Item label="gurgaon" value="three" />
                                    <Picker.Item label="manali" value="four" />
                                </Picker>

                            </View>
                        </View>
                                {/* ............................................................................................... */}
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
                                                        <Text style={styles.docAdrssText}>
                                                            Address: Nashik
                                                          </Text>
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            style={styles.boxBtn2}
                                                            onPress={() =>
                                                                this.props.navigation.navigate('MyNetwork')
                                                            }>
                                                            <Text
                                                                style={styles.btnText1}>
                                                                Request
                                                             </Text>
                                                        </TouchableOpacity>
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
        searchNetwork:state.searchNetwork.searchNetwork
    };
  };
  
  export default connect(mapStateToProps, {
    searchNetwork //Action
  })(SearchDoctor);

