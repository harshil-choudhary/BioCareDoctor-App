import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput, 
    Dimensions,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
import { Icons, Images } from '../../utils';



class Background extends Component {
    render() {
        return (
            <View style={{height: '100%', possition: 'absolute', zIndex:-1000}}>
            <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.16, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.16, 50]}
                style={styles.upperCont}>
                
                </LinearGradient>

                <LinearGradient
                colors={['#75e4f7', '#5588e7']}
                start={{x: 0.16, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.16, 50]}
                style={styles.lowerCont}>
                
                </LinearGradient>
            </View>
        );
    }
}

const styles = {
    upperCont: {
    position: 'absolute',
    left: -120,
    top: -90,
    height:320,
    width:350,
    right: '0%',
    top: '-4.4%',
    borderRadius:320/2,
    
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  lowerCont: {
    position: 'absolute',
    right: -150,
    bottom: 20,
    height:270,
    width:270,
    borderRadius:270/2,
    alignItems: 'center',
  }
}



export default Background;

