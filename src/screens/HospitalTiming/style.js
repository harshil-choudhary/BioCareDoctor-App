import { StyleSheet, Dimensions } from 'react-native';
import { borderRadius } from 'react-select/src/theme';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative',
    },
    wrapper: {
        // position: 'absolute',
        flex: 1,
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        backgroundColor: '#F5F5F5',
    },
    scrollWrapper: {
        width,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 30
        // backgroundColor: 'pink',
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft:25,
        marginTop: 30   
    },
    uName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontSize: 22,
    },
   
    upperWrapper2: {
        width: '93%',
        //height: height * 0.01,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginLeft: 20
      },
      uName2: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#000000',
        fontSize: 14,
        lineHeight: 22,
      },
      dropDownStyle:{
        // height: 45,
         width: "95%",
         borderWidth: 2,
        // paddingTop: 10,
         paddingLeft: 15,
        // borderRadius: 10,
         marginTop: 10,
         borderColor: '#29E093',
        // marginLeft:15
 
     },
     symptomWrapper: {
        width: '100%',
        height: height * 0.07,
        display: 'flex',
        // flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 30,
       // marginLeft:10
      },
      symptomBox: {
        width: width * 0.95,
        height: height * 0.08,
        display: 'flex',
        borderColor: '#29E093',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        elevation: 4,
      },
      symptomText: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 18,
        lineHeight: 24,
        color: '#000000'
      },
      timeSelectWrapper: {
        width: '95%',
        //height: height * 0.01,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
       // marginLeft: 20,
        marginTop:height * 0.04,
      },
      timeSelect: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#5589E7',
        fontSize: 18,
        lineHeight: 24,
      },
      appointmentWrapper: {
         width,
         marginTop: height * 0.04,
         marginBottom:6,
       },
     
       appointmentDetailedWrapper: {
         width: width * 0.95,
         height: height * 0.13,
         display: 'flex',
         justifyContent: 'flex-start',
         alignItems: 'center',
         backgroundColor: '#ffffff',
       //  marginTop: height * 0.02,
         borderRadius: 15,
         shadowColor: 'rgba(1, 1, 1, 1)',
         elevation: 4,
         flexDirection:'row',
         
        marginLeft: 10,
       },
      
       
     
     
     appointmentNameWrapper: {
         marginLeft:2,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'row',
         //marginTop:5,
       },
       appointmentNameWrapper1: {
         marginLeft: 30,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'row',
         //marginTop:5,
       },
       quanText: {
         fontSize: 18,
        // marginTop: 5
         //lineHeight:20,
       },
       countView: {
         flexDirection: 'row',
         marginLeft: 5,
         marginTop: 5,
       },
       boxQuant: {
         width: width * 0.13,
         height: height * 0.055,
         display: 'flex',
         backgroundColor: '#FFFFFF',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 15,
         borderWidth: 1,
         borderColor: '#29E093',
         // marginLeft:width*0.09,
         marginTop: width * 0.01
       },
     
     btnText1:{
         fontSize:18,
     }
     
     
    });