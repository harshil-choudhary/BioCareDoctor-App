import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    wrapper: {
        width,
        height,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    scrollWrapper: {
        width,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:'center'
    
        // backgroundColor: 'pink',
    },
    logoCont: {
        width: '80%',
        height: height * 0.27,
        marginTop: height * 0.1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'pink',
    },
    textInputStyle: {
        height: 50,
        width: "80%",
        borderWidth: 2,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: 35,
        borderColor: '#29E093',
        backgroundColor:'#FFFFFF'
    },
    textInputStyle2: {
        height: 50,
        width: "80%",
        borderWidth: 2,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: 20,
        borderColor: '#29E093',
        backgroundColor:'#FFFFFF'
    },
    forgetPassText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.037,
        marginTop: height * 0.03,
        color: '#000000',
    },
    boxBtn2: {
        width: width * 0.8,
        height: height * 0.07,
        display: 'flex',
        backgroundColor: '#29E093',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: width * 0.018,
        marginTop: width * 0.07
    },
    btnText: {
        fontWeight: 'normal',
        textShadowColor: '#000000'
    },

    buttonpasschange: {
        width: '80%',
        height: height * 0.15,
        justifyContent: 'center',

        // backgroundColor: 'yellow',
    },
    dontHaveAccountText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.037,
        marginTop: height * 0.04,
        color: '#000000',


    },
    topCircle:{
        position: 'absolute',
        left: -50,
        top: -50,
        bottom: 54.4,
        borderRadius:300/2,
        height:300,
        width:300,
        backgroundColor: 'yellow',
    },
    bottomCircle:{
        position: 'absolute',
        right: -50,
        bottom: -50,
        borderRadius:300/2,
        height:300,
        width:300,
        backgroundColor: 'yellow',
    },
    animatedBox:
  {
     
     zIndex:5, position:'absolute',alignItems:'center', top:'35%', left:'30%',
  },
 
});