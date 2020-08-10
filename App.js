import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, EdgeInsetsPropType } from 'react-native';
import CategoryListItem from './components/categoryListItem'
import RefreshControl from './components/RefreshControl'
import categoryListItem from './components/categoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{paddingLeft:16, paddingRight:19, paddingTop:16}} contentContainerStyle={{backgroundColor:"#949392"}}>
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <RefreshControl />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    //borderWidth:2
    
  },
});
