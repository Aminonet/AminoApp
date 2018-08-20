import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import Styles from '../../../style/style'
import font from '../../../container/font';
import px2dr from '../../../container/px2dr'
import InputPhone from '../../../component/InputPhone'
import InputGetCode from '../../../component/InputGetCode'
import Button from '../../../component/Button'

export default class Register extends Component  {
  constructor() {
    super()
    this.state = {
      account: '',
    }
    this.routes = [
      '',
      'login',
    ]
  }

  _router(n) {
    this.props.navigation.navigate(this.routes[n])
  }

  render() {
    return (
      <ImageBackground style={[Styles.cell, styles.wrapper]} source={require('../../../images/login/login_bg.png')}>
        <Text style={styles.title}>{font.REGISTER}</Text>
        <Text style={styles.account}>{font.ACCOUNT}</Text>
        <InputPhone
          placeholder = {font.INPUT_PHONE}
          defaultValue = {this.state.account}
          onChangeText = {text => this.setState({account: text})}
        />
        <Text style={styles.account}>{font.CODE}</Text>
        <InputGetCode
          inputStyle={{width: px2dr(400)}}
          defaultValue = {this.state.code}
          onChangeText = {text => this.setState({code: text})}
        />
        <Button
          title={font.CONFIRM}
          style={{marginTop: px2dr(120)}}
        />
        <TouchableHighlight onPress={() => this._router(1)} style={{marginTop: px2dr(40)}}>
          <Text style={styles.to_login}>{font.TO_LOGIN}</Text>
        </TouchableHighlight>
      </ImageBackground>
    )
  }
}
var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: px2dr(75),
    paddingRight: px2dr(75),
  },
  title: {
    marginTop: px2dr(200),
    fontSize: px2dr(50),
    color: '#878DA0',
  },
  account: {
    color: '#fff',
    fontSize: px2dr(36),
    marginTop: px2dr(60),
    marginBottom: px2dr(40),
  },
  to_login: {
    textAlign: 'center',
    color: '#4A90E2',
    fontSize: px2dr(28),
    paddingBottom: px2dr(40),
  },
})
