import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';
import px2dr from '../container/px2dr';
import Styles from '../style/style'

export default class TextInputComponent extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      state: 1,
      resultStyle: {
        color: '#fff',
      },
      showError: false,
      key: 0,
      txtValue: '',
    }
  }

  getValue() {
    return this.state.txtValue
  }

  testRegExp() {
    if (this.props.regExp.test(this.state.txtValue)) {
      this.setState({
        resultStyle: {
          color: '#fff',
        },
        key: Math.random()
      })
      return true
    } else {
      this.setState({
        resultStyle: {
          color: 'rgb(216, 59, 58)',
        },
        key: Math.random()
      })
      return false
    }
  }

  focus() {
    this.setState({
      state: 2,
      resultStyle: {
        color: '#fff',
      },
    })
  }

  showError(font) {
    this.setState({
      showError: true,
      errorFont: font,
    })
  }

  blur() {
    const state = this.state.txtValue == ''?1:3
    console.log(state)
    this.setState({
      state,
      resultStyle: {
        color: '#fff',
      },
      key: Math.random()
    })
  }

  render() {
    const { style, placeholder, label } = this.props
    let css = {}
    let placeholderColor = null
    switch (this.state.state) {
      case 1: 
        css = {
          backgroundColor: '#353c47',
          color: '#585c6c',
        }
        placeholderColor = '#585c6c'
        break
      case 2: 
        css = {
          backgroundColor: '#585c6c',
          color: '#fff',
        }
        placeholderColor = '#fff'
        break
      case 3: 
        css = {
          backgroundColor: '#353c47',
          color: '#fff',
        }
        placeholderColor = '#fff'
    }

    return (
      <View>
        {
          label?
          <Text style={Styles.label}>{label}</Text>
          : null
        }
        <TextInput
          defaultValue={this.props.defaultValue}
          style={[styles.txtInput, style, css, this.state.resultStyle]}
          placeholder = {placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={text => {
            this.props.onChangeText(text)
          }}
          onFocus={() => this.focus()}
          onBlur={() => this.blur()}
          key={this.state.key}
        ></TextInput>
        {/* {
          this.state.showError?
          <Text style={styles.errorTitle}>{this.state.errorFont}</Text>
          :null
        } */}
      </View>
    )
  }
}
var styles = StyleSheet.create({
  txtInput: {
    height: px2dr(100),
    // marginLeft: px2dr(75),
    // marginRight: px2dr(75),
    fontSize: px2dr(28),
    borderRadius: 1,
    paddingLeft: px2dr(20),
    paddingRight: px2dr(20),
  },
  errorTitle: {
    color: 'rgb(216, 59, 58)'
  },
})

