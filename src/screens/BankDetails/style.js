import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative',
    },
    wrapper: {
        position: 'absolute',
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
        height: height * 0.10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 35,
        marginTop: 10
    },
    uName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontSize: 22,
        lineHeight: 30,
    },
    upperWrapper2: {
        width: '100%',
        height: height * 0.015,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 35,
        marginBottom:30

    },
    uName2: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#000000',
        fontSize: 14,
        lineHeight: 19,
    },
  
    textInputStyle2: {
        height: 45,
        width: "90%",
        borderWidth: 1,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        marginTop: height * 0.025,
        borderColor: '#29E093',
        backgroundColor:'#FFFFFF'
        
    },
    boxBtn2: {
        width: width * 0.9,
        height: height * 0.07,
        display: 'flex',
        backgroundColor: '#29E093',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: width * 0.018,
        marginTop: width * 0.1
    },
    btnText: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF'
    },
    dropDownStyle:{
        // height: 45,
         width: "90%",
         borderWidth: 2,
        // paddingTop: 10,
         paddingLeft: 15,
        // borderRadius: 10,
         marginTop: 10,
         borderColor: '#29E093'
 
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
});