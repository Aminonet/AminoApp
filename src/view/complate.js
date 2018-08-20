// complete
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Styles from '../../../style/style'
import TitleBar from '../../../component/TitleBar'
import font from '../../../container/font';

export default class Register extends Component  {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <View style={Styles.cell}>
        <TitleBar navigation = {this.props.navigate} title={font.registerTitle}/>
        <View style={Styles.wrapper}>
        
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({

})