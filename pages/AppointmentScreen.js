import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Alert,
    ScrollView,
    Dimensions, TouchableHighlight, StyleSheet, AsyncStorage
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
import {magento} from "../magento";

import DatePicker from '../datepicker/datepicker.js'

import ExpandableList from '../components/ExpandableList/ExpandableList';



const SCREEN_HEIGHT = Dimensions.get('window').height;
const h1=18;
const h2=14;

var fx;

export default class AppointmentScreen extends Component {

    //navigation bar header null. full screen
    static navigationOptions =
        {
            title: 'Appointment',
            // headerStyle: {
            //     backgroundColor: '#FFC107'
            // },

            // headerTintColor: '#fff',
        };


    constructor(props) {
        super(props);

        venueValueArray = ['aaa', 'bbb', 'ccc', 'asdfasdfasdfsdafsadfsadfsadf', 'eee'];
        
        this.state = {
            textColored: '#645c5d',
            bgc: '#f9f9f9',
            isReady: false,
            starttime: '8:00',
            endtime: '10:00',
            date:'2016-05-05',
            aptDetailText:'',
            name:'',
            email:'',
            phonenumber:''
        };
    }

    handleChangeAptDetailText = (text) => {
        this.setState({
            aptDetailText: text
        });
    }

    setStartTime =(time) => {
        if(time < this.state.endtime) {
            this.setState({
                starttime: time
            });
        } else {
            Alert.alert('Attention!', 'Start Time must be smaller than End Time');
        }
    }

    setEndTime =(time) => {
        if(time > this.state.starttime) {
            this.setState({
                endtime: time
            });
        } else {
            Alert.alert('Attention!', 'End Time must be bigger than Start Time');
        }
    }


    async componentWillMount() {
        //fonts
        await Expo.Font.loadAsync({
            avenir: avenirFont,
            avenirHeavy: avenirHeavyFont,
            AvenirBookOblique: avenirBookObliqueFont,
            avenirMedium: avenirMediumFont
        });
        this.setState({isReady: true});

        //token adding to header in magento index, however if needed use own way to use API then can restore like this
        var restoredToken = await AsyncStorage.getItem('authToken');
        console.log('restore auth token ',  restoredToken);

         magento.getAppointmentVenueList();
        
        magento.getAppointmentInfoList()
        .then(data => {
            name = data.firstname + ' ' + data.lastname;
            email = data.email;
            phone = data.addresses[0].telephone;

            console.log('xx-info:' + ' ' + name + ' ' + email + ' ' + phone);
            this.setState({
                name:name,
                email:email,
                phonenumber:phone
            })                    
                })
        .catch(error => {
                    console.log(error);
                });        
 
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }
        return (
            
            <View style={styles.container}>
                <View style = {{width:'100%', height:'5%'}}/>
                <View style = {styles.topblock}>
                    <View style = {{width: '30%'}}>
                        <ImageBackground
                            source={require('../assets/images/avatar1.jpg')}
                            style={{width: '100%', height: '100%'}}/>
                        
                    </View>

                    <View style = {styles.topblocktextbox}>
                        <Text style = {{fontSize:20}}>
                            {this.state.name}
                        </Text>
                        <Text>{this.state.email}</Text>
                        <Text>{this.state.phonenumber}</Text>
                    </View>
                </View>
                <View style = {styles.middlebock}>
                    <View>
                        <Text style = {styles.textblocktitle}>Venue</Text>
                        <ExpandableList
                            data={venueValueArray}
                        />
                    </View>
                    <View style = {styles.submiddleblock}>
                        <Text>Date</Text>
                        <View style = {{flexDirection: 'row'}}>
                            <DatePicker
                                date={this.state.date}
                                mode="date"
                                placeholder="placeholder"
                                format="MMM Do YYYY"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.setState({date: date});}}
                            />
                        </View>
                    </View>
                    <View>
                        <Text>Time</Text>
                        <View style = {{flexDirection: 'row', alignItems:'center',}}>
                            <DatePicker
                                date={this.state.starttime}
                                mode="time"
                                androidMode = "spinner"
                                format="HH : mm"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                minuteInterval={10}
                                onDateChange={this.setStartTime}
                            />
                            <Text style = {{marginLeft:5, marginRight:5}}>-</Text>
                            <DatePicker
                                date={this.state.endtime}
                                mode="time"
                                format="HH : mm"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                minuteInterval={10}
                                onDateChange={this.setEndTime}
                            />
                        </View>
                    </View>
                    
                    <View style = {styles.submiddleblock}>
                        <Text style = {styles.textblocktitle}>Appointment Details</Text>
                        <TextInput placeholder = 'Type your appointment detail'
                            underlineColorAndroid = 'transparent'
                            onChangeText = {this.handleChangeAptDetailText}
                            value = {this.state.aptDetailText}
                        />
                    </View>
                </View>
                <View style = {styles.bottomblock}>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.AppointmentConfirm()}>
                        <Text style = {styles.buttonText}>Book</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
    AppointmentConfirm = () => {
          this.props.navigation.navigate('AppointmentConfirm');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        height:'100%'
    },
    topblock: {
        width:'100%', 
        height:'20%', 
        marginLeft: 20, 
        flexDirection:'row'
    },
    topblocktextbox: {
        width: '70%', 
        marginLeft:30, 
        justifyContent:'center'
    },
    middlebock: {
        width:'100%', 
        height:'60%', 
        marginLeft: 20,
        marginTop: 20
    },
    submiddleblock: {
        marginTop: 25,

    },
    textblocktitle: {
        marginBottom: 10
    },
    date: {
        marginRight:15, 
        textDecorationLine:'underline'
    },
    textblockcontents: {
        
    },
    bottomblock: {
        width:'100%', 
        height:'10%', 
        justifyContent:'center',
        alignItems:'center',
     },
    button: {
        width:'60%',
        height: '100%',
        borderRadius: 10,
        borderColor: '#ff0000',
        borderWidth: 1,
        justifyContent:'center', 
        alignItems:'center',
        
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        textAlign:'center'
    }
});







