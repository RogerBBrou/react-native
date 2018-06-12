import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
    Image,
    Dimensions, TouchableHighlight
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
const h1 = 18;
const h2 = 14;
export default class Home extends Component {


    static navigationOptions = navigationOptions;


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

    _handleImagePress = () => {
        alert('Button pressed!', 'You did it!');
    };

    _openMenu = async () => {
        this.props.navigation.navigate('MenuScreen');
    };

    _navigateToCollection = () => {
        this.props.navigation.navigate('Collection');
    };


    async componentWillMount() {
        await Expo.Font.loadAsync({
            avenir: avenirFont,
            avenirHeavy: avenirHeavyFont,
            AvenirBookOblique: avenirBookObliqueFont,
            avenirMedium: avenirMediumFont
        });
        this.setState({isReady: true});

        const {navigation} = this.props;
        const authToken = navigation.getParam('authToken');

        var restoredToken = await AsyncStorage.getItem('authToken');
        console.log('restore auth token ',  restoredToken);
        console.log('home auth token', authToken);

        if (!authToken) {
            await AsyncStorage.setItem('authToken', authToken);
            console.log('saving token ', authToken)
        }
    }

    render() {
        const {email, password, email_valid, showLoading} = this.state;
        if (!this.state.isReady) {
            return <Expo.AppLoading/>;
        }

        return (
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <TouchableHighlight onPress={this._openMenu}>
                            <Image source={require('../assets/img/ico1.png')}/>
                        </TouchableHighlight>

                        <View style={{flex: -1, flexDirection: 'row'}}>
                            <Image source={require('../assets/img/ico2.png')} style={{marginRight: 14}}/>
                            <Image source={require('../assets/img/ico3.png')}/>
                        </View>

                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.mainHead}>{'collections'.toUpperCase()}</Text>

                    <View style={styles.imgContainer}>
                        <TouchableOpacity onPress={() => this._navigateToCollection()}>
                            <Image source={require('../assets/img/woods.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._navigateToCollection()}>
                            <Image source={require('../assets/img/patterns.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._navigateToCollection()}>
                            <Image source={require('../assets/img/solids.png')} style={styles.img}/>
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
        backgroundColor: '#ecf0f1',
    },
    headerContainer: {
        flex: -1,
        flexBasis: SCREEN_HEIGHT / 10,//4171,
        width: '100%',
        borderBottomWidth: 2,
        borderColor: '#e9e3d5',
    },
    header: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: SCREEN_HEIGHT / 30,
        paddingBottom: SCREEN_HEIGHT / 30,
    },
    main: {
        marginTop: SCREEN_HEIGHT / 11,
    },
    mainHead: {
        fontSize: h2,
        fontFamily: 'avenirHeavy',
        fontWeight: '500',
        color: '#645c5d',
        alignSelf: 'center',
    },
    imgContainer: {
        flex: -1,
        marginTop: SCREEN_HEIGHT / 51
    },
    img: {
        flex: -1,
        flexBasis: 120
    }
});




