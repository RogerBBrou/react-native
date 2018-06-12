import React from "react";
import {
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ActivityIndicator,
    StatusBar,
    Dimensions,
    View,
    Image,
} from 'react-native';
import {Input, Button} from 'react-native-elements'
import {Constants} from "expo";
import {avenirBookObliqueFont, avenirFont, avenirHeavyFont, avenirMediumFont} from "../Styles";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const h1=18;
const h2=14;

export default class MenuScreen extends React.Component<any, any> {

    _goToProfile = () => {
        this.props.navigation.navigate('Profile');
    };

    //navigation bar header null. full screen
    static navigationOptions =
        {
            title: 'Sign Up',
            headerStyle: {
                backgroundColor: '#FFC107'
            },

            headerTintColor: '#fff',
            header: null
        };

    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
            email: '',
            email_valid: true,
            isPasswordValid: true,
            password: '',
            login_failed: false,
            showLoading: false,
            textColored: '#645c5d',
            bgc: '#f9f9f9',
            isReady: false
        };
    }

    _handleTextPress = () => {
        alert('Text pressed!', 'You did it!');
    };

    _navigateToCollection = () => {
        this.props.navigation.navigate('Collection');
    };

    _navigateToAppointment = () => {
        this.props.navigation.navigate('Appointment');
    };



    async componentWillMount() {
        await Expo.Font.loadAsync({
            avenir: avenirFont,
            avenirHeavy: avenirHeavyFont,
            AvenirBookOblique: avenirBookObliqueFont,
            avenirMedium: avenirMediumFont,
        });
        this.setState({isReady: true});
    }

    render() {
        const {email, password, email_valid, showLoading} = this.state;
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }

        //Todo:переименовать картинки в соответствующие названия
        //Todo: добавить методы с соответствующими названиями вместо_handleTextPress. Например _handleHomePress и т.д.
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Image source={require('../assets/img/ico1.png')} />

                        <View style={{flex:-1,flexDirection:'row'}}>
                            <Image source={require('../assets/img/ico2.png')} style={{marginRight:14}} />
                            <Image source={require('../assets/img/ico3.png')} />
                        </View>

                    </View>
                </View>

                <View style={styles.main}>
                    <TouchableOpacity onPress={this._handleTextPress}>
                        <Text style={styles.mainHeader}>{'Home'.toUpperCase()}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={() => this._navigateToCollection()}>
                            <Text style={styles.textHeader}>Collection
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._handleTextPress}>
                            <Text style={styles.textItem}>{'woods'.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._handleTextPress}>
                            <Text style={styles.textItem}>{'patterns'.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._handleTextPress}>
                            <Text style={styles.lastTextItem}>{'solids'.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={this._handleTextPress}>
                            <Text style={styles.textHeader}>My LAMI
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._navigateToAppointment}>
                            <Text style={styles.textItem}>{'appointments'.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._handleTextPress}>
                            <Text style={styles.textItem}>{'cart'.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._goToProfile}>
                            <Text style={styles.lastTextItem}>{'profile'.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
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
    headerContainer:{
        flex:-1,
        flexBasis:SCREEN_HEIGHT/10,
        width:'100%',
        borderBottomWidth:2,
        borderColor:'#e9e3d5',
    },
    header: {
        flex:-1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        paddingTop: SCREEN_HEIGHT/30,
        paddingBottom: SCREEN_HEIGHT/30,
    },
    main:{
        marginTop: SCREEN_HEIGHT/17,
    },
    mainHeader:{

        fontSize:h1,
        fontFamily:'avenirHeavy',
        fontWeight:'400',
        color:'#645c5d',
        alignSelf:'center'
    },
    textContainer:{
        flex:-1,
        marginTop: SCREEN_HEIGHT/17,
    },
    textHeader:{
        fontSize:h2,
        fontFamily:'avenirMedium',
        fontWeight:'300',
        color:'#645c5d',
        alignSelf:'center',
        marginBottom: SCREEN_HEIGHT/72
    },
    textItem: {
        fontSize:h1,
        fontFamily:'avenirHeavy',
        fontWeight:'500',
        color:'#645c5d',
        alignSelf:'center',
        marginBottom: SCREEN_HEIGHT/34
    },

    lastTextItem:{
        fontSize:h1,
        fontFamily:'avenirHeavy',
        fontWeight:'500',
        color:'#645c5d',
        alignSelf:'center',
        marginBottom: 0
    },
});
