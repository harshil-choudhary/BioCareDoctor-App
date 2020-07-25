import React, { Component, useEffect, useState } from "react";
import {SafeAreaView, StatusBar, Alert} from 'react-native';
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import {Provider} from "react-redux"
import Navigation from "./src/navigation";
import {store} from './src/redux/store'
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const [isLoggedIn, setLogged] = useState(null)
  useEffect(async ()=>{
    var token = await AsyncStorage.getItem('token')
    if (token){
      setLogged(true)
    }
    else{
      setLogged(false)

    }
  },[])

  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Navigation isLoggedIn={isLoggedIn} />
    </Provider>


    
  );
}
