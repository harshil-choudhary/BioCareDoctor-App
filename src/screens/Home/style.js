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
    height: height * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20
  },
  upperWrapper2: {
    width: '100%',
    height: height * 0.01,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20
  },
  userNameWrapper: {
    width: width * 0.42,
    height: width * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  uName: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 22,
  },
  uName2: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 14,
    lineHeight: 22,
  },
  medalIconWrapper: {
    //width: 58,
    //height: 20,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15
  },
  medalIconStyle: {
    width: 40,
    height: 40
  },
  progressBarStyle: {
    marginTop: 38,
    alignItems: 'flex-start',
  },
  upperWrapper3: {
    width: '100%',
    height: height * 0.18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20
  },
  appointmentWrapper: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: -35,
    justifyContent: 'space-evenly'
  },
  numStyle: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#29E093',
  },
  textStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: -30,
  },
  textStyle2: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: -8
  },
  patientWrapper: {
    marginLeft: 35
  },
  cardWrapper: {
    width: width * 0.95,
    height: height * 0.19,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 35,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginTop: 10,
    marginBottom: 5
  },
  appointmentCard: {
    flexDirection: 'row',
  },
  carddetailImg: {
    width: width * 0.25,
    height: width * 0.25,
    marginTop: 15
  },
  cardNameWrapper: {
    marginLeft: 35,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 35
  },
  appointmentText: {
    fontFamily: 'Segoe UI',
    color: '#29E093',
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 4 }
  },
  cardSpecsWrapper: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
  },
  // ...................................................................................................//
  cardWrapper1: {
    width: width * 0.95,
    height: height * 0.25,
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginTop: 20,
  },
  cardWrapper3: {
    width: width * 0.95,
    height: height * 0.18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  cardWrapper2: {
    width: width * 0.17,
    height: height * 0.10,
    display: 'flex',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#29E093',
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginTop: 10,
  },
  numStyle1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textStyle3: {
    fontSize: 12,
    fontWeight: 'bold',
    // marginLeft:-8
    color: '#FFFFFF',
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
  dateText: {
    marginLeft: 8,
    color: '#29E093'
  }
})