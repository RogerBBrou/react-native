
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListView from './ListView';

export default class ExpandableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      expanded: false,
      selectedItem: '0000'
    };

  }

  componentDidMount() {
   this.setState({data:  this.props.data})

  }

 
  itemPicker = (item, index) => {
     this.setState({
       selectedItem: item,
       expanded: false
     });
  }

  expandList = () => {
   this.setState({
     expanded: true
   });
 }

 render() {
   return (
     <View style={styles.container}>
       <ListView selectedItem={this.state.selectedItem} 
                 expandList={this.expandList} 
                 itemPicker={this.itemPicker} 
                 data={this.state.data}
                 expanded={this.state.expanded}
                 />
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
});
