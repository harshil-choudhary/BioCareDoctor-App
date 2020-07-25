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
        paddingBottom:20
        // backgroundColor: 'pink',
    },
    upperWrapper: {
        width: '100%',
        height: height * 0.15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 35,
        marginTop: 20
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
        height: height * 0.01,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 35
    },
    uName2: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'normal',
        fontStyle: 'normal',
        color: '#000000',
        fontSize: 14,
        lineHeight: 22,
    },
    walletWrapper: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'


    },
    balanceWrapper: {
        width: '90%',
        justifyContent:'center',
        alignItems: 'center',
         marginTop: 20


    },
    balanceTextNum: {
        fontSize: 48,
        lineHeight: 64,
        fontWeight: 'bold',
        color: '#29E093'
    },
    balanceText:{
        fontSize: 17,
        lineHeight: 23,
        fontWeight: 'bold',
        color: '#000000'
    },
    textInputStyle: {
        width: width * 0.60,
        height: height * 0.13,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.02,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        //marginLeft: 10,
    },
    inputWrapper:{
        
         width: '30%',
        // justifyContent: 'center',
        // alignItems: 'center',
         marginTop: 10


    },
    inputWrapper2:{
        width: '50%',
        marginBottom:10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 10


    },
    appointmentWrapper: {
        width,
        // marginTop: height * 0.005,
        marginBottom:80,
      },
    
      appointmentDetailedWrapper: {
        width: width * 0.95,
        height: height * 0.15,
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
     marginTop: height * 0.01,
       shadowColor: 'rgba(1, 1, 1, 1)',
       marginLeft: 30,
      },
      appointmentSpecsWrapper: {
        width: '99%',
        display: 'flex',
        flexDirection: 'row',
      },
      boxBtn2: {
        width: width * 0.60,
        height: height * 0.06,
        display: 'flex',
        backgroundColor: '#29E093',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
        // marginLeft:width*0.09,
        marginTop: width * 0.018
    },
    btnText: {
        fontWeight: 'bold',
        textShadowColor: '#000000',
        fontSize:12,
        color:'#FFFFFF'
    },
    //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



    reportSpecsWrapper: {
        width: '99%',
        display: 'flex',
        flexDirection: 'row',
      },
      reportdetailImg: {
        width: width * 0.19,
        height: width * 0.19,
      },
      
      reportNameWrapper: {
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'column',
        marginTop:5
      },
      reportNameText: {
        fontFamily: 'Helvetica Neue',
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
        paddingBottom: 1,
      },
    
     
      reportExpText: {
        color: '#000000',
        fontSize:12,
    fontFamily: 'Helvetica Neue',
        fontWeight:'bold',
        lineHeight:16
      },
     
      
    
      reportCardWrapper: {
        width,
       // marginTop: height * 0.1,
        marginBottom:8,
      },
    
      reportDetailedWrapper: {
        width: width * 0.95,
        height: height * 0.15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.01,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        marginLeft: 10,
      },
     
      middleWrapper: {
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height * 0.01,
      },

   
    numStyle: {
        fontSize: 36,
        lineHeight:48,
        fontWeight: 'bold',
        color: '#000000',
    
    
    
      },
      dateWrapper:{
          marginLeft:35
      }
     
});