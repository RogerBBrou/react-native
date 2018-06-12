import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const ListItem = ({item, index, selectedItem, itemPicker}) => (
   
    <TouchableOpacity  style={selectedItem === item ? {display: 'none'} : {}} onPress={() => itemPicker(item, index)}>
    <View style={styles.container}>
            <Text>{item}</Text>
    </View>
    </TouchableOpacity>
);

const styles = {
    container: {
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1, // erase this line for the item black line to dissapear
        paddingLeft: 5
    }
}

export default ListItem;