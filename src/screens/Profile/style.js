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
    paddingBottom: 60
    // backgroundColor: 'pink',
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
  logoCont: {
    width: '80%',
    height: height * 0.27,
    marginTop: height * 0.01,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'pink',
},
textInputStyle: {
  height: 45,
  width: "80%",
  borderWidth: 2,
  paddingTop: 10,
  paddingLeft: 15,
  borderRadius: 10,
  marginTop: 20,
  borderColor: '#29E093',
  backgroundColor:'#FFFFFF'
},
textInputStyle2: {
  height: 45,
  width: "80%",
  borderWidth: 2,
  paddingTop: 10,
  paddingLeft: 15,
  borderRadius: 10,
  marginTop: 10,
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
  marginTop: width * 0.1,
  marginBottom:20
},
btnText: {
  fontWeight: 'normal',
  textShadowColor: '#000000'
},
});