import React, {Component} from 'react';
import {
    View,
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
export default class CollectionScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
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
    }
})
