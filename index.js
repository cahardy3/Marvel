/** @format */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header'
import ComicList from './src/components/ComicList';
import SearchBar from './src/components/SearchBar';


const ComApp = () => (
  <View style={{ flex:1 }}>
      <Header headerText={'comics'} /> 
      <ComicList/>
  </View>
);

AppRegistry.registerComponent('marvel', () => ComApp);
