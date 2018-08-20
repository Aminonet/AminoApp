import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import TextInput from '../component/TextInput'
import px2dr from '../container/px2dr'
import CountryCodePicker from '../container/react-native-country-code-picker'

export default class InputPhone extends Component  {
  constructor() {
    super()
    this.state = {
      country: '86',
    }
  }

  showSelect() {
    this.refs.countryCodePicker.showPicker()
  }

  selectCountry(res) {
    this.setState({country: res.phoneCode})
    console.log(res)
  }

  render() {
    let { style, defaultValue, placeholder, onChangeText }  = this.props
    return (
      <View style={[styles.account_view, style]}>
        <TouchableHighlight onPress={() => this.showSelect() } style={styles.countryCode}>
          <Text style={styles.countryTxt}>+ {this.state.country}</Text>
        </TouchableHighlight>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChangeText={text => onChangeText(text)}
        />
        <CountryCodePicker ref="countryCodePicker" isShow={false} onPick={res => this.selectCountry(res)} />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  account_view: {
    flexDirection: 'row',
    backgroundColor: '#353c47',
  },
  countryCode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryTxt: {
    color: '#fff',
    fontSize: px2dr(36)
  },
  input: {
    width: px2dr(480)
  },
})