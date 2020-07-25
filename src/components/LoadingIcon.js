import React from 'react';
import { ActivityIndicator } from 'react-native';


const LoadingIcon = ({ loadingApp }) => <ActivityIndicator style={{zIndex:5, position:'absolute',alignItems:'center', top:'45%', left:'40%', }} size="large" color="red" animating={loadingApp} ></ActivityIndicator>;

export default LoadingIcon;