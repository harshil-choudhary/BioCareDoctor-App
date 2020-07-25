import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
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
        paddingBottom: 35
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
    dropDownStyle:{
       // height: 45,
        width: "80%",
        borderWidth: 2,
       // paddingTop: 10,
        paddingLeft: 15,
       // borderRadius: 10,
        marginTop: 10,
        borderColor: '#29E093'

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
        height: height * 0.07,
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    heading: {
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.040,
        marginTop: height * 0.03,
        // color: '#59A3EE',
    },

    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 50,  
        width: "99%",  
       // color: '#344953',  
        justifyContent: 'center',
    
        
    }  ,


    symptomWrapper: {
        width: '80%',
        height: height * 0.07,
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
      },
      symptomBox: {
        width: width * 0.8,
        height: height * 0.07,
        display: 'flex',
        borderColor: '#29E093',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 2,
        paddingLeft: 5,
        //elevation: 4,
      },
      symptomText: {
        fontWeight: 'normal',
        textShadowColor: '#000000',
        fontSize: 24,
        lineHeight: 32,
        color: '#29E093'
      },
});