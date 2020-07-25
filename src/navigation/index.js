import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { Icons } from '../utils';

//Screens

import Login from '../screens/Login';
import Home from '../screens/Home';
import ForgetPassword from '../screens/ForgetPassword';
import Ragistration from '../screens/Ragisteration';
import PatientList from '../screens/Patientlist';
import ThreeDModel from '../screens/3D Model';
import Report from '../screens/Reports';
import Profile from '../screens/Profile';
import Appointments from '../screens/Appointments';
import VirtualAppointments from '../screens/VirtualAppointments';
import AppointmentDetails from '../screens/AppointmentDetails';
import Wallet from '../screens/Wallet';
import Invoice from '../screens/Invoice';
import PatientDetailList from '../screens/PatientDetailList';
import PatientDetails from '../screens/PatientDetails';
import PatientReport from '../screens/PatientReport';
import ConsultationHistory from '../screens/ConsultationHistory';
import DiagnoseDetails from '../screens/DiagnoseDetails';
import ViewedPatient from '../screens/ViewedPatient';
import Vaccination from '../screens/Vaccination';
import BankDetails from '../screens/BankDetails';
import SearchDoctor from '../screens/SearchDoctor';
import MyNetwork from '../screens/MyNetwork';
import VideoList from '../screens/VideoList';
import SendVideo from '../screens/SendVideo';
import ReportDetails from '../screens/ReportDetails';
import MarkAvailability from '../screens/MrakAvailability';
import HospitalTiming from '../screens/HospitalTiming';
import Subscription from '../screens/subscription';









import Notifications from '../screens/Notifications';







const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




export function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'rgb(85,136,231)',
        style: { height: 65, borderTopRightRadius: 20, borderTopLeftRadius: 20 },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="ThreeDModel"
        component={ThreeDModel}
        options={{
          tabBarLabel: '3D Model',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} />;
            }
          },
        }}
      />


      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}



function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="Ragistration" component={Ragistration} />
        <Stack.Screen name="PatientList" component={PatientList} />
        <Stack.Screen name="3DModel" component={ThreeDModel} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Profile" component={Profile} />
        {/* <Stack.Screen name="Appointments" component={Appointments} /> */}
        <Stack.Screen name="VirtualAppointments" component={VirtualAppointments} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="PatientDetailList" component={PatientDetailList} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="PatientReport" component={PatientReport} />
        <Stack.Screen name="ConsultationHistory" component={ConsultationHistory} />
        <Stack.Screen name="DiagnoseDetails" component={DiagnoseDetails} />
        <Stack.Screen name="ViewedPatient" component={ViewedPatient} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
        <Stack.Screen name="BankDetails" component={BankDetails} />
        <Stack.Screen name="SearchDoctor" component={SearchDoctor} />
        <Stack.Screen name="MyNetwork" component={MyNetwork} />
        <Stack.Screen name="VideoList" component={VideoList} />
        <Stack.Screen name="SendVideo" component={SendVideo} />
        <Stack.Screen name="ReportDetails" component={ReportDetails} />
        <Stack.Screen name="MarkAvailability" component={MarkAvailability} />
        <Stack.Screen name="HospitalTiming" component={HospitalTiming} />
        <Stack.Screen name="Subscription" component={Subscription} />



       





        <Stack.Screen name="Notifications" component={Notifications} />
        
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
