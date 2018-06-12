import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListView from './components/ListView';

const data = [
  'Apparel', 
  'Beauty', 
  'Electronics', 
  'Grocery',
  'Home Improvement',
  'Jewlry', 
  'Pharmacy'
];

export default class App extends React.Component {

   constructor(props) {
     super(props);

     this.state = {
       data: [],
       expanded: false,
       selectedItem: 'Apparel'
     };

   }

   componentDidMount() {
    const data = this.getData();

    this.setState({data})
   }

   getData = () => {
    return  [
        'Apparel', 
        'Beauty', 
        'Electronics', 
        'Grocery',
        'Home Improvement',
        'Jewlry', 
        'Pharmacy'
      ];
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
