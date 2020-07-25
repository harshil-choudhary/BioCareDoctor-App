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
    height: height * 0.15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 35,
    marginTop:5
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
    marginLeft: 35,
    marginBottom: 55
  },
  uName2: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 14,
    lineHeight: 22,
  },
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
    marginTop: 5
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
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    lineHeight: 16
  },



  reportCardWrapper: {
    width,
    // marginTop: height * 0.1,
    marginBottom: 8,
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
    lineHeight: 48,
    fontWeight: 'bold',
    color: '#000000',



  },
  dateWrapper: {
    // marginLeft:35
  },

  boxBtn2: {
    width: width * 0.23,
    height: height * 0.08,
    display: 'flex',
    backgroundColor: '#29E093',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: width * 0.02,
    marginTop: width * 0.01
  },
  btnText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize: 20,
    color: '#FFFFFF'
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

})