// complete
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import TextInput from '../../../component/TextInput'
import Button from '../../../component/Button'
import InputPhone from '../../../component/InputPhone'
import InputGetCode from '../../../component/InputGetCode'
import Styles from '../../../style/style'
import TitleBar from '../../../component/TitleBar'
import font from '../../../container/font';
import px2dr from '../../../container/px2dr';

export default class Login extends Component  {
  constructor() {
    super()
    this.state = {
      phone: '',
      code: '',
    }
    this.routes = [
      'resetPwd'
    ]
  }	

  _router(n) {
    this.props.navigation.navigate(this.routes[n])
  }

  render() {
    let canNext = false
    if (this.state.phone != '' && this.state.code != '') {
      canNext = true
    }
    return (
      <View style={Styles.cell}>
        <TitleBar navigation = {this.props.navigation} title={font.FORGET_PASSWORD}/>
        <View style={Styles.wrapper}>
          <Text style={Styles.label}>{font.PHONE}</Text>
          <InputPhone
            placeholder={font.INPUT_PHONE}
            defaultValue={this.state.phone}
            onChangeText={text => {this.setState({phone: text})}}
          />
          <Text style={Styles.label}>{font.CODE}</Text>
          <InputGetCode
            placeholder={font.INPUT_CODE}
            defaultValue={this.state.code}
            onChangeText={text => {this.setState({code: text})}}
          />
          <Button
            enable={canNext}
            title={font.NEXT_STEP}
            style={{marginTop: px2dr(120)}}
            onPress={() => this._router(0)}
          />
        </View>
      </View>
    )
  }
}

