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
    color: '#5589E7',
    fontSize: 16,
    lineHeight: 22,
  },
  appointmentWrapper: {
    //width,
    marginTop: height * 0.1,
    marginBottom: 6,
  },
  appointmentDetailedWrapper: {
    width: width * 0.95,
    height: height * 0.55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    //marginTop: height * 0.005,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    //marginLeft: 10,
  },
  
  
 
  appointmentSpecsWrapper: {
    width: '99%',
    height: '99%',
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  appointmentdetailImg: {
    width: '100%',
    height: '60%',
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