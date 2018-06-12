import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ListItem from './ListItem';

const ListView = ({data, selectedItem, expandList, itemPicker, expanded}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => expandList()}>
        <View style={styles.listHeader}>
            <Text>{selectedItem !== "" ? selectedItem : 'Apparel'}</Text>
        </View>
        </TouchableOpacity>
        {
            expanded ?  <View>
            {
                data.map((item, index) => <ListItem 
                                            key={index}
                                            index={index} 
                                            item={item}
                                            itemPicker={itemPicker}
                                            selectedItem={selectedItem}
                                            />)
            }
            
        </View> : null
        }
       

    </View>
);

const styles = {
    container: {
        flex: 1,
    }, 
    listHeader: {
        justifyContent: 'center',
        borderBottomWidth: 1, // erase this line to dissapear first item black line
        paddingLeft: 5
    }
}

export default ListView;