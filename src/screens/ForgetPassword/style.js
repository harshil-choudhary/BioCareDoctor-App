import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative',
      },
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
        alignItems: 'center',
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
    
    
    boxBtn2: {
        width: width * 0.8,
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
        textShadowColor: '#000000'
    },
    textCont: {
        width: '80%',
        height: height * 0.15,
        justifyContent: 'center',
        
        // backgroundColor: 'yellow',
      },
      heading: {
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.040,
        marginTop: height * 0.04,
        // color: '#59A3EE',
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