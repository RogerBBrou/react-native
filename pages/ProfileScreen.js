import React from "react";
import {Constants} from "expo";
import {
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
    Image,
} from 'react-native';
import {Input, Button} from 'react-native-elements'

export default class ProfileScreen extends React.Component<any, any> {

    //Navigation bar header
    //Todo:text style and menu items
    static navigationOptions = {
        title: 'USER SETTINGS',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign out" onPress={this._signOutAsync}/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#f9f9f9',
    }
});
