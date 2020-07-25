import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    KeyboardAvoidingView,
    TextInput
} from "react-native";
const { width } = Dimensions.get('window');
import styles from './style';
import Background from '../components/Background'
import { Icons, Images } from '../../utils';
import { FlatList } from "react-native-gesture-handler";
//Libraries
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
const CONTENT = [
    {
        title: ' Present Problem',
        content:
            'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
    },
    {
        title: 'Past History ',
        content:
            'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
    },
    {
        title: ' Personal History',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
    {
        title: 'Family History',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
    {
        title: 'Treatment History',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
    {
        title: 'Present Problem',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
    {
        title: 'Present Problem',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
    {
        title: 'Present Problem',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
    {
        title: 'Present Problem',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
];
class PatientDetails extends Component {
    state = { activeSections: [], };
    setSections = sections => {
        //setting up a active section state
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };
    renderHeader = (section, _, isActive) => {
        //Accordion Header view
        return (
            <Animatable.View
                // duration={400}
                // style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor">
                <View style={styles.symptomWrapper}>
                    <View style={styles.symptomBox}>
                        <LinearGradient
                            colors={['#75E4F7', '#5589E7']}
                            start={{ x: 0.1, y: 0.2 }}
                            end={{ x: 0.3, y: 1.8 }}
                            locations={[0.1, 0.5]}
                            style={styles.gradientBox}>
                        </LinearGradient>
                        <Text
                            style={styles.symptomText}>
                            {section.title}
                        </Text>
                    </View>
                </View>
            </Animatable.View>
        );
    };
    renderContent(section, _, isActive) {
        //Accordion Content view
        return (
            <Animatable.View
                // duration={400}
                style={[styles.content, isActive ? styles.active : styles.inactive]}
            // transition="backgroundColor"
            >
                <Animatable.Text
                    // animation={isActive ?'bounceIn' : undefined}
                    style={{ textAlign: 'center', width: width * 0.95, backgroundColor: '#FFFFFF', marginTop: -20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, elevation: 4 }}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }
    render() {
        const { multipleSelect, activeSections } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Background />
                    <View style={{ zIndex: 5, position: 'absolute', bottom: '0%', top: '0%' }}>
                        <KeyboardAvoidingView behavior="padding">
                            <ScrollView
                                contentContainerStyle={styles.scrollWrapper}
                                showsVerticalScrollIndicator={false}>
                                <View style={styles.upperCont}>
                                    <TouchableOpacity
                                        style={styles.arrowCont}
                                        onPress={() => this.props.navigation.goBack()}>
                                        <Image source={Icons.BackIcon} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.upperWrapper}>
                                    <Text style={styles.uName}>Patient details</Text>
                                </View>
                                {/*Code for Accordion/Expandable List starts here*/}
                                <Accordion
                                    activeSections={activeSections}
                                    sections={CONTENT}
                                    touchableComponent={TouchableOpacity}
                                    // expandMultiple={multipleSelect}
                                    renderHeader={this.renderHeader}
                                    renderContent={this.renderContent}
                                    // duration={400}
                                    onChange={this.setSections}
                                />
                                {/*Code for Accordion/Expandable List ends here*/}
                                {/* <View style={styles.symptomWrapper}>
                                <View style={styles.symptomBox}>
                                    <LinearGradient
                                        colors={['#75E4F7', '#5589E7']}
                                        start={{ x: 0.1, y: 0.2 }}
                                        end={{ x: 0.3, y: 1.8 }}
                                        locations={[0.1, 0.5]}
                                        style={styles.gradientBox}>
                                    </LinearGradient>
                                    <Text
                                        style={styles.symptomText}>
                                        Present Problem
                                           </Text>
                                </View>
                            </View> */}
                                <View style={styles.btnDetailWrapper}>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.boxBtn2}
                                        onPress={() =>
                                            this.props.navigation.goBack()
                                        }>
                                        <Text
                                            style={styles.btnText1}>
                                            Back
                                         </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={styles.boxBtn}
                                        onPress={() =>
                                            this.props.navigation.navigate('PatientReport')
                                        }>
                                        <Text
                                            style={styles.btnText}>
                                            Reports
                                         </Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </View>
        );
    }
}
export default PatientDetails;
