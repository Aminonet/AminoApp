import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import TextInput from '../../../component/TextInput'
import Button from '../../../component/Button'
import Styles from '../../../style/style'
import TitleBar from '../../../component/TitleBar'
import font from '../../../container/font';
import px2dr from '../../../container/px2dr';

export default class resetPwd extends Component  {
  constructor() {
    super()
    this.state = {
      pwd: '',
      rePwd: '',
    }
  }

  confirm() {
    this.props.navigation.navigate('login')
  }

  render() {
    let canConfirm = false
    if (this.state.pwd != '' && this.state.rePwd != '') {
      canConfirm = true
    }
    return (
      <View style={Styles.cell}>
        <TitleBar navigation = {this.props.navigation}/>
        <View style={Styles.wrapper}>
          <TextInput
            label={font.NEW_PASSWORD}
            placeholder={font.NEW_PWD_PLACEHOLDER}
            defaultValue={this.state.pwd}
            onChangeText={text => {this.setState({pwd: text})}}
          />
          <TextInput
            label={font.CONFIRM_PASSWORD}
            placeholder={font.CONFIRM_PWD_PLACEHOLDER}
            defaultValue={this.state.rePwd}
            onChangeText={text => {this.setState({rePwd: text})}}
          />
          <Button
            enable={canConfirm}
            title={font.CONFIRM}
            style={{marginTop: px2dr(120)}}
            onPress={() => this.confirm(0)}
          />
        </View>
      </View>
    )
  }
}
