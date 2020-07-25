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
    paddingBottom:30
    // backgroundColor: 'pink',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.09,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
   marginLeft: 35,
    marginTop: 10,
  },
  uName: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 22,
    
  },
  appointmentSpecsWrapper: {
    width: '99%',
    display: 'flex',
    flexDirection: 'row',
  },
  appointmentdetailImg: {
    width: width * 0.30,
    height: width * 0.25,
  },
  greenTickIMG: {
      
    width: width * 0.20,
    height: width * 0.20,
  },
  
  appointmentNameWrapper: {
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    marginTop:5
  },
  appointmentNameText: {
    fontFamily: 'Helvetica Neue',
    color: '#000',
    fontSize: width * 0.04,
    fontWeight: 'bold',
    paddingBottom: 1,
  },
  
 
  appointmentTimeText: {
    color: '#000000',
    fontSize:18,
   
    
    fontFamily: 'Helvetica Neue',
    fontWeight:'bold'
  },
 
  
  appointmentWrapper: {
    width,
    // marginTop: height * 0.005,
    marginBottom:6,
  },
  appointmentDetailedWrapper: {
    width: width * 0.95,
    height: height * 0.16,
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
 
  
  boxBtn2: {
    width: width * 0.40,
    height: height * 0.06,
    display: 'flex',
    backgroundColor: '#29E093',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
    // marginLeft:width*0.09,
    marginTop: width * 0.01
},
btnText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize:20,
    color:'#FFFFFF'
},
confirmAppointmentWrapper:{
  marginLeft:width*0.03,
  //marginTop: width * 0.03,
 // justifyContent:'flex-end',
  alignItems:'flex-end',
  
},
inPersonAppWrapper: {
    width: '95%',
    height: height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:30,
    // marginBottom:30
  
  },
  inPersonAppText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#29E093',
    fontSize: 24,
    lineHeight: 32,
  },
  infoDetailedWrapper: {
    width: width * 0.95,
    height: height * 0.22,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: height * 0.04,
    borderRadius: 15,
    
    
    borderWidth:1,
    borderColor:'#29E093',
    //marginLeft: 10,
  },
  middleWrapper: {
    width: '90%',
    display: 'flex',
    //flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: height * 0.01,
  },
 
  ImageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.02,
    marginBottom:10
  },
  
  dateText: {
    fontSize: width * 0.035,
    color: '#898A8F',
    marginLeft: width * 0.01,
  },
 
  timeText: {
    marginLeft: width * 0.01,
    fontSize: 18,
    lineHeight:24,
    fontWeight:'bold'
  },
  visitText:{
    marginLeft: width * 0.01,
    fontSize: 15,
    lineHeight:17,
    fontWeight:'normal'
  },
  ImageIconStyle:{
    width:30,
    height:30
  },
noteWrapper:{
    width: '95%',
    height: height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:20,
    // marginBottom:30
},
noteText:{
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#29E093',
    fontSize: 24,
    lineHeight: 32,
},
textCont: {
    width: '95%',
    height: height * 0.08,
    justifyContent: 'center',
    
   
  },
  heading: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.040,
    marginTop: height * 0.04,
    // color: '#59A3EE',
  },
  symptomTextWrapper:{
    width: '95%',
    height: height * 0.07,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:30,
    // marginBottom:30
  },
  symptomWrapper:{
    width: '95%',
    height: height * 0.07,
    display: 'flex',
    flexDirection: 'row',
   justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:10,
  },
  symptomBox: {
    width: width * 0.40,
    height: height * 0.06,
    display: 'flex',
    borderColor:'#29E093',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10,
    borderWidth:1,
    marginLeft:10,
    
    // marginLeft:width*0.09,
    marginTop: width * 0.01
},
symptomText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize:20,
    color:'#29E093'
    
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