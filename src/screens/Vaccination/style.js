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
        paddingBottom: 10
        // backgroundColor: 'pink',
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 35,
        marginTop:10
    },
    uName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontSize: 22,
        lineHeight: 30
    },
    symptomWrapper: {
        // width: '95%',
        height: height * 0.1,
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    symptomBox: {
        width: width * 0.95,
        height: height * 0.1,
        display: 'flex',
        borderColor: '#29E093',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        elevation: 4,
        flexDirection: 'row'
    },
    symptomText: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 24,
        lineHeight: 32,
        color: '#29E093',
        marginLeft: 40
    },
    gradientBox: {
        width: width * 0.04,
        height: height * 0.098,
        display: 'flex',
        borderWidth: 1,
        borderColor: '#29E093',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 0,
        marginLeft: -10
    },
    boxBtn: {
        width: width * 0.40,
        height: height * 0.07,
        display: 'flex',
        backgroundColor: '#29E093',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // marginLeft:width*0.09,
        marginTop: width * 0.01
    },
    boxBtn2: {
        width: width * 0.40,
        height: height * 0.07,
        display: 'flex',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#29E093',
        // marginLeft:width*0.09,
        marginTop: width * 0.01
    },
    btnText: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 20,
        color: '#FFFFFF'
    },
    btnText1: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 20,
        color: '#29E093'
    },
    btnDetailWrapper: {
        width: '95%',
        height: height * 0.15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    content: {
        padding: 20,
        marginBottom:-15
        //backgroundColor: 'red',
    },
    //   active: {
    //     backgroundColor: 'rgba(255,255,255,1)',
    //   },
    //   inactive: {
    //     backgroundColor: 'rgba(245,252,255,1)',
    //   },
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