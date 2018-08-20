import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import TextInput from '../../component/TextInput'
import Button from '../../component/Button'
import InputPhone from '../../component/InputPhone'
import Styles from '../../style/style'
import font from '../../container/font'
import px2dr from '../../container/px2dr';

export default class Login extends Component  {
  constructor() {
    super()
    this.state = {
      account: '',
      password: '',
    }
    this.routes = [
      'getCode',
      'register'
    ]
  }

  submit() {
    console.log(this.state)
  }

  _router(n) {
    this.props.navigation.navigate(this.routes[n])
  }

  render() {
    let enable = false
    if (this.state.account && this.state.password) {
      enable = true
    }
    return (
      <ImageBackground style={[Styles.cell, styles.wrapper]} source={require('../../images/login/login_bg.png')}>
        <Text style={styles.login}>{font.LOGIN}</Text>
        <InputPhone
          placeholder = {font.INPUT_PHONE}
          defaultValue = {this.state.account}
          onChangeText = {text => this.setState({account: text})}
        />
        <View style={styles.pwd_view}>
          <Text style={styles.pwd_label}>{font.PASSWORD}</Text>
          <Text onPress={() => this._router(0)} style={styles.pwd_forget}>{font.FORGET_PASSWORD}?</Text>
        </View>
        <TextInput
          errorTitle = {font.LOGIN_PWD_ERROR}
          placeholder = {font.LOGIN_PWD_PLACEHOLDER}
          defaultValue = {this.state.password}
          onChangeText = {text => this.setState({password: text})}
        />
        <Button
          enable = {enable}
          onPress = {() => this.submit()}
          title = {font.LOGIN}
          style={{marginTop: px2dr(120)}}
        />
        <View style={styles.register_view}>
          <Text style={styles.no_account}>
            {font.NO_ACCOUNT}？
          </Text>
          <TouchableHighlight onPress={() => this._router(1)}>
              <Text style={styles.to_register}>{font.TO_REGISTER}</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    )
  }
}
var styles = StyleSheet.create({
  login: {
    marginTop: px2dr(200),
    marginBottom: px2dr(40),
    fontSize: px2dr(50),
    color: '#878DA0'
  },
  wrapper: {
    flex: 1,
    paddingLeft: px2dr(75),
    paddingRight: px2dr(75),
  },
  pwd_view: {
    flexDirection: 'row',
  },
  pwd_label: {
    flex: 1,
    color: '#fff',
    fontSize: px2dr(36),
    marginTop: px2dr(60),
    marginBottom: px2dr(40),
  },
  pwd_forget: {
    color: '#fff',
    fontSize: px2dr(28),
    marginTop: px2dr(60),
  },
  no_account: {
    color: '#878DA0',
    fontSize: px2dr(28),
    // textAlign: 'center',
    marginTop: px2dr(40)
  },
  to_register: {
    color: 'rgb(65, 208, 116)',
    marginTop: px2dr(40),
  },
  register_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
