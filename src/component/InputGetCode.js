import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import Styles from '../style/style'
import font from '../container/font';
import TextInput from '../component/TextInput'
import px2dr from '../container/px2dr'

export default class Register extends Component  {
  constructor() {
    super()
    this.state = {
      codeTitle: font.GETCODE,
    }
    this.timer = null
  }

  getCode() {
    if (this.timer !== null) {
      return {}
    }
    let score = 60
    this.timer = setInterval(() => {
      this.setState({codeTitle: --score})
      if (score === 0) {
        this.clearInterval()
      }
    }, 1000)
  }

  clearInterval() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.setState({codeTitle: font.GETCODE})
      this.timer = null
    }
  }

  componentWillUnmount() {
    this.clearInterval()
  }

  render() {
    let { defaultValue, onChangeText, style, inputStyle} = this.props
    return (
      <View style={[styles.account_view, style]}>
        <TextInput
          placeholder={font.INPUT_CODE}
          style={[styles.input, inputStyle]}
          defaultValue={defaultValue}
          onChangeText={text => onChangeText(text)}
          />
        <TouchableHighlight style={styles.countryCode} onPress={() => this.getCode()}>
          <Text style={styles.codeTxt}>{this.state.codeTitle}</Text>
        </TouchableHighlight>
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
  codeTxt: {
    color: '#fff',
    fontSize: px2dr(32)
  },
  input: {
    width: px2dr(480)
  },
})
