import { StyleSheet, Dimensions } from 'react-native';
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 35,
        marginTop: height * 0.01
    },
    uName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontSize: 22,
    },
    boxBtn: {
        width: width * 0.35,
        height: height * 0.05,
        display: 'flex',
        backgroundColor: '#29E093',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // marginLeft:width*0.09,
        marginTop: width * 0.015,
        marginRight: width * 0.08
    },
    btnText: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF'
    },
    textInputStyle: {
        height: 45,
        width: "90%",
        borderWidth: 1,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        // marginTop: height * 0.13,
        borderColor: '#29E093'
    },
    textInputStyle2: {
        height: 45,
        width: "90%",
        borderWidth: 1,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: height * 0.025,
        borderColor: '#29E093'
    },
    appointmentSpecsWrapper: {
        width: '99%',
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appointmentdetailImg: {
        width: width * 0.6,
        height: width * 0.55,
        borderRadius: 10,
    },
    modalText: {
        fontFamily: 'Segoe UI',
        fontSize: 18,
        lineHeight: 24,
        color: '#000000',
        marginLeft: 15
    },
    docAdrssText: {
        fontFamily: 'Segoe UI',
        fontSize: 18,
        lineHeight: 24,
        color: '#000000',
        // marginLeft: 15
    },
    appointmentWrapper: {
        //width,
        marginTop: height * 0.02,
        marginBottom: 6,
    },
    appointmentDetailedWrapper: {
        width: width * 0.90,
        height: height * 0.55,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        //marginTop: height * 0.005,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        //marginLeft: 10,
    },
    middleWrapper: {
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    boxBtn2: {
        width: width * 0.40,
        height: height * 0.06,
        display: 'flex',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#29E093',
        // marginLeft:width*0.09,
        marginTop: width * 0.01
    },
    btnText1: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 20,
        color: '#29E093'
    },
    docNameText: {
        fontFamily: 'Segoe UI',
        fontSize: 18,
        lineHeight: 24,
        color: '#000000'
    },
    docTypeText: {
        fontFamily: 'Segoe UI',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '300'
    },
    upperCont: {
        width: '100%',
        height: height * 0.07,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        // backgroundColor: 'maroon',
      },
      arrowCont: {
        width: width * 0.15,
        height: height * 0.03,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.02,
        // backgroundColor: 'pink',
      },
      symptomWrapper: {
        width: '90%',
        height: height * 0.07,
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
      },
      symptomBox: {
        width: width * 0.9,
        height: height * 0.07,
        display: 'flex',
        borderColor: '#29E093',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 5,
        //elevation: 4,
      },
      pickerStyle:{  
        height: 60,  
        width:width * 0.85,  
       // color: '#344953',  
        justifyContent: 'center',
    
        
    }  ,
});