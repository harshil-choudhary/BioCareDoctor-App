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
    height: height * 0.2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
   marginLeft: 35,
    //marginTop: 10
  },

  uName: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 22,
    
  },

  bfbottomWrapper: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 1,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: '#56EEB7',
    borderWidth: 1,
    //position: 'absolute',
    bottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: height * 0.08,


  },
  inPersonTextbtn: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#FFFFFF'
  },

  InPersonTextbtnWrapper: {
    width: '55%',
    backgroundColor: '#56EEB7',
    borderRadius: 10,
    height: height * 0.08,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  virtualTextbtnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',

  },

  bookTextbtn: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#29E093',
    marginLeft: 30,

  },
  inPersonAppWrapper: {
    width: '95%',
    height: height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:10,
    marginBottom:30
  
  },
  inPersonAppText: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#5589E7',
    fontSize: 18,
    lineHeight: 24,
  },
  inputWrapper: {
    
    width: width * 0.4,
   height: height * 0.05,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
   backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    borderColor:'#29E093',
    borderWidth:1,
    elevation: 1,
    marginLeft:10
  },
  searchinp: {
    fontSize:12,
    lineHeight:16,
    marginLeft: 5,
    marginRight:20
  },
  searchIconStyle:{
    marginRight:width*0.03,

  },
  // ....................................................................................................//

  appointmentSpecsWrapper: {
    width: '99%',
    display: 'flex',
    flexDirection: 'row',
  },
  appointmentdetailImg: {
    width: width * 0.19,
    height: width * 0.19,
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
  AppointStatusText: {
    fontFamily: 'Helvetica Neue',
    color: '#000',
    fontSize: width * 0.04,
    fontWeight: 'normal',
    paddingBottom: 1,
  },

 
  appointmentTimeText: {
    color: '#000000',
    fontSize:18,
    marginTop:7,
    
    fontFamily: 'Helvetica Neue',
    fontWeight:'bold'
  },
 
  

  appointmentWrapper: {
    width,
    marginTop: height * 0.01,
    marginBottom:6,
  },

  appointmentDetailedWrapper: {
    width: width * 0.95,
    height: height * 0.20,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.018,
  },

  boxBtn2: {
    width: width * 0.30,
    height: height * 0.06,
    display: 'flex',
    backgroundColor: '#29E093',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
    // marginLeft:width*0.09,
    marginTop: width * 0.03
},
btnText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize:20,
    color:'#FFFFFF'
},
confirmAppointmentWrapper:{
  marginLeft:width*0.17,
  //marginTop: width * 0.03,
 // justifyContent:'flex-end',
  alignItems:'flex-end',
  


},





});
