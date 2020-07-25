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
  appointmentSpecsWrapper: {
    width: '99%',
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appointmentdetailImg: {
    width: width * 0.75,
    height: width * 0.75,
    borderRadius: 10,
  },
  modalText: {
    fontFamily: 'Segoe UI',
    fontSize: 18,
    lineHeight: 24,
    color: '#000000',
    marginLeft: 15
  },
  appointmentWrapper: {
    //width,
    marginTop: height * 0.01,
    marginBottom: 6,
  },
  appointmentDetailedWrapper: {
    width: width * 0.90,
    height: height * 0.55,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    //marginTop: height * 0.005,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    //marginLeft: 10,
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
    width: width * 0.40,
    height: height * 0.06,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#29E093',
    // marginLeft:width*0.09,
    marginTop: width * 0.01
  },
  btnText1: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize: 20,
    color: '#29E093'
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