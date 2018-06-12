import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions, TouchableHighlight, StyleSheet
} from 'react-native';
import {SafeAreaView, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {Font, Constants} from 'expo';
import {
    AppStyles,
    avenirBookObliqueFont,
    avenirFont,
    avenirHeavyFont,
    avenirMediumFont,
    navigationOptions
} from "../Styles";
import Header from '../views/header'


const SCREEN_HEIGHT = Dimensions.get('window').height;
const h1=18;
const h2=14;
export default class AppointmentConfirmScreen extends Component {

    //navigation bar header null. full screen
    static navigationOptions =
        {
            title: 'Appointment Detail',
            // headerStyle: {
            //     backgroundColor: '#FFC107'
            // },

            // headerTintColor: '#fff',
        };

    constructor(props) {
        super(props);

        this.state = {
            textColored: '#645c5d',
            bgc: '#f9f9f9',
            isReady: false
        };
    }


    // async componentWillMount() {
    //     //fonts
    //     await Expo.Font.loadAsync({
    //         avenir: avenirFont,
    //         avenirHeavy: avenirHeavyFont,
    //         AvenirBookOblique: avenirBookObliqueFont,
    //         avenirMedium: avenirMediumFont
    //     });
    //     this.setState({isReady: true});

    //     //token adding to header in magento index, however if needed use own way to use API then can restore like this
    //     var restoredToken = await AsyncStorage.getItem('authToken');
    //     console.log('restore auth token ',  restoredToken);

    //     //example of using request\
    //     //sss = magento.getAppointmentVenueList();
    //     var that = this;
    //     magento.getAppointmentConfirmList();
    //     // .then(data => {
    //     //     name = data.firstname + ' ' + data.lastname;
    //     //     email = data.email;
    //     //     phone = data.addresses[0].telephone;
    //     //     console.log('xx-info:' + ' ' + name + ' ' + email + ' ' + phone);                    
    //     //         })
    //     // .catch(error => {
    //     //             console.log(error);
    //     //         });        
 


    //     //ddd = magento.getAppointmentVenueList();

    //     // console.log('sdfsfdfgdfgdfgsdfgsdfg ' + ddd);
    // }


    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.thanksblock}>
                    <Text style = {styles.thankstext}>Thank you for your booking!</Text>
                    <Text style = {styles.thankstext}>We will reach out to you in</Text>
                    <Text style = {styles.thankstext}>1 ~ 2 working days to confirm</Text>
                    <Text style = {styles.thankstext}>your appointment.</Text>
                </View>
                <View style = {{width:'100%', height:'60%'}}>
                    <View style = {{alignItems:'center'}}>
                        <Text style = {{marginTop:30, fontSize:20}}>LAMINATE VIEWING</Text>
                    </View>
                    <View style = {{marginTop:30, marginLeft:20, justifyContent:'center'}}>
                        <Text>Thursday, 17 November 2017</Text>
                        <Text>2.00 PM - 3.00 PM</Text>
                        <Text style = {{marginTop:10}}>Lamitak Studio, CT Hub 2</Text>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fefefe',
    },
    thanksblock: {
        width:'100%', 
        height:'40%', 
        borderBottomWidth:1, 
        borderBottomColor:'#00ff00', 
        justifyContent:'center'
    },
    thankstext: {
        marginLeft:20
    }
})