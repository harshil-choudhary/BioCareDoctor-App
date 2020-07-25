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
        paddingBottom: 20
        // backgroundColor: 'pink',
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30,
        marginTop:5
    },
    uName: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 20,
    },
    cardWrapper3: {
        width: width * 0.97,
        height: height * 0.28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    cardWrapper2: {
        width: width * 0.44,
        height: height * 0.25,
        display: 'flex',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        // marginTop:,
    },
    numStyle1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textStyle3: {
        fontSize: 18,
        fontWeight: 'bold',
        // marginLeft:-8
        color: '#000000',
    },
    uName3: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#29E093',
        fontSize: 14,
        lineHeight: 22,
        marginLeft: 20,
        marginTop: 15,
    },
    patientImange: {
        width: width * 0.30,
        height: width * 0.25,
        marginTop: 15
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