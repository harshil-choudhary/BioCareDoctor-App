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
    Modal
} from "react-native";
const { width, height } = Dimensions.get('window');
import styles from './style';
import Background from '../components/Background'
import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
class DiagnoseDetails extends Component {
    constructor() {
        super();
        this.state = {
            showMedicine: false,
            showTest: false,
            quantity: 0,
        }
    }

    increaseQuantity = () =>{
        this.setState({quantity:this.state.quantity+1})
      }
    
      decreaseQuantity = () =>{
        if (this.state.quantity==0){
          ;
        }
        else{
          this.setState({quantity:this.state.quantity-1})
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Background />
                    <View style={{ zIndex: 5, position: 'absolute', bottom: '0%', top: '0%' }}>
                        <KeyboardAvoidingView behavior="height">
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
                                    <Text style={styles.uName}>Patient details</Text>
                                </View>
                                <View style={styles.logoCont}>
                                    <Image
                                        source={Images.loginLogo}
                                        style={{ width: width * 0.35, height: height * 0.20 }}
                                    />
                                </View>
                                <View style={styles.textCont}>
                                    <Text style={styles.heading}>Enter your diagnostics details</Text>
                                </View>
                                <TextInput style={styles.textInputStyle}
                                    placeholder="Problem"
                                    placeholderTextColor='#000000'
                                    underlineColorAndroid="transparent"
                                    textAlignVertical='center'
                                />
                                <TextInput style={styles.textInputStyle2}
                                    placeholder="Discussion"
                                    placeholderTextColor='#000000'
                                    underlineColorAndroid="transparent"
                                    textAlignVertical='top'
                                />
                                <TextInput style={styles.textInputStyle2}
                                    placeholder="Instructions"
                                    placeholderTextColor='#000000'
                                    underlineColorAndroid="transparent"
                                    textAlignVertical='top'
                                />
                                {/* ................................................................................................. */}
                                <Modal
                                    transparent={true}
                                    animationType='slide'
                                    visible={this.state.showMedicine}>
                                    <View style={{ backgroundColor: '#000000aa', height: height * 1 }}>
                                        <View style={styles.medicineModel}>
                                            <TextInput style={styles.medModelTextInputStyle}
                                                placeholder="Medicine Name"
                                                placeholderTextColor='#000000'
                                                underlineColorAndroid="transparent"
                                                textAlignVertical='center'
                                            />
                                            <View
                                                style={[styles.appointmentSpecsWrapper, { marginTop: 10 }]}>
                                                <View style={styles.appointmentNameWrapper}>
                                                    <Text style={styles.quanText}>Quantity :</Text>
                                                    <View style={styles.countView}>
                                                    <TouchableOpacity
                                                            activeOpacity={1}
                                                            
                                                            onPress={() => { this.decreaseQuantity()}
                                                            }>
                                                        <Text style={{ fontSize: 52, lineHeight: height*0.07 }}> - </Text>
                                                        </TouchableOpacity>
                                                            <View style={styles.boxQuant}>
                                                            <Text
                                                                style={styles.btnText1}>
                                                                {this.state.quantity}
                                                            </Text>
                                                            </View>
                                                            <TouchableOpacity
                                                            activeOpacity={1}
                            
                                                            onPress={() => { this.increaseQuantity()}
                                                            }>
                                                        <Text style={{ fontSize: 40, lineHeight: height*0.065 }}> + </Text>
                                                        </TouchableOpacity>                                                            
                                                    </View>
                                                </View>
                                                <View style={styles.appointmentNameWrapper}>
                                                    <Text style={styles.quanText}>Instruction :</Text>
                                                    <View style={styles.bfbottomWrapper}>
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            onPress={() => console.log("Before Food Pressed")}>
                                                            <Text style={styles.feedbackTextbtn}>Before Food</Text>
                                                        </TouchableOpacity>
                                                        
                                                        <TouchableOpacity
                                                            activeOpacity={1}
                                                            style={styles.bookTextbtnWrapper}
                                                            onPress={() =>
                                                                console.log("After Food Pressed")
                                                            }>
                                                            <Text style={[styles.bookTextbtn, { color: '#ffffff' }]}>
                                                                After Food
                  </Text>
                                                        </TouchableOpacity>
                                                       
                                                    </View>
                                                </View>
                                                <View style={styles.timeWrapper}>
                                                    <Text style={styles.quanText}>Timing :</Text>
                                                    <View>
                                                        <View style={styles.countView}>
                                                            <TouchableOpacity
                                                                activeOpacity={1}
                                                                style={styles.boxQuant}
                                                                onPress={() => console.log("Morning Pressed")
                                                                }>
                                                                <Text
                                                                    style={styles.timeBtnText}>
                                                                    +
                                         </Text>
                                                            </TouchableOpacity>
                                                            <Text style={{ fontSize: 18, lineHeight: 50 }}> Morning  </Text>
                                                        </View>
                                                        <View style={styles.countView}>
                                                            <TouchableOpacity
                                                                activeOpacity={1}
                                                                style={styles.boxQuant}
                                                                onPress={() => console.log("Afternoon Pressed")
                                                                }>
                                                                <Text
                                                                    style={styles.timeBtnText}>
                                                                    +
                                        </Text>
                                                            </TouchableOpacity>
                                                            <Text style={{ fontSize: 18, lineHeight: 50 }}> After noon  </Text>
                                                        </View>
                                                        <View style={styles.countView}>
                                                            <TouchableOpacity
                                                                activeOpacity={1}
                                                                style={styles.boxQuant}
                                                                onPress={() => console.log("Night Pressed")
                                                                }>
                                                                <Text
                                                                    style={styles.timeBtnText}>
                                                                    +
                                        </Text>
                                                            </TouchableOpacity>
                                                            <Text style={{ fontSize: 18, lineHeight: 50 }}>  Night </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={styles.btnDetailWrapper1}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxBtn3}
                                                    onPress={() => { this.setState({ showMedicine: false }) }
                                                    }>
                                                    <Text
                                                        style={styles.btnText1}>
                                                        Suggest
                                         </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' */}
                                <Modal
                                    transparent={true}
                                    animationType='slide'
                                    visible={this.state.showTest}>
                                    <View style={{ backgroundColor: '#000000aa', height: height * 1 }}>
                                        <View style={styles.testModel}>
                                            <TextInput style={styles.modelTextInputStyle}
                                                placeholder="Select Test"
                                                placeholderTextColor='#000000'
                                                underlineColorAndroid="transparent"
                                                textAlignVertical='center'
                                            />
                                            <View style={styles.btnDetailWrapper}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxBtn}
                                                    onPress={() => { this.setState({ showTest: false }) }
                                                    }>
                                                    <Text
                                                        style={styles.btnText}>
                                                        Suggest
                                         </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                                {/* ............................................................................................. */}
                                <View style={styles.btnDetailWrapper}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.boxBtn3}
                                        onPress={() => { this.setState({ showTest: true }) }
                                        }>
                                        <Text
                                            style={styles.btnText1}>
                                            Suggest Test
                                         </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.boxBtn}
                                        onPress={() => { this.setState({ showMedicine: true }) }
                                        }>
                                        <Text
                                            style={styles.btnText}>
                                            Suggest Medicine
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
export default DiagnoseDetails;
