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
        width: width * 0.45,
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
        fontWeight: 'bold',
        textShadowColor: '#000000',
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF'
    },
    //...................................................//

    reportSpecsWrapper: {
        width: '99%',
        display: 'flex',
        flexDirection: 'row',
      },
      reportdetailImg: {
        width: width * 0.25,
        height: width * 0.25,
      },
      
      reportNameWrapper: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        marginTop:20
      },
      reportNameText: {
        fontFamily: 'Helvetica Neue',
        color: '#000000',
        fontSize: 18,
        lineHeight:24,
        fontWeight: 'bold',
        paddingBottom: 1,
      },
    
     
      reportExpText: {
        color: '#000000',
        fontSize:12,
    fontFamily: 'Helvetica Neue',
        fontWeight:'normal',
        lineHeight:16
      },
     
      
    
      reportCardWrapper: {
        //width,
       // marginTop: height * 0.1,
        marginBottom:8,
      },
    
      reportDetailedWrapper: {
        width: width * 0.95,
        height: height * 0.7,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.025,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
       // marginLeft: 10,
      },
      appointmentSpecsWrapper: {
        width: '99%',
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      appointmentdetailImg: {
        width: width * 0.95,
        height: width * 0.95,
        borderRadius: 10,
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