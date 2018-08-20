// complete
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import px2pr from '../container/px2dr'

export default class Button extends Component  {
  _render() {
    var { enable, loading, onPress, style, titleStyle, buttonStyle, title, titleStyleError } = this.props
    if (loading === true) {
      return (
        <View style={[styles.button, style, styles.buttonNotEnable]}>
          {/* <Image></Image>   */}
        </View>
      )
    } else if (enable === true) {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, style]}>
          <View style={styles.viewText}>
            <Text style={[styles.textMeg, titleStyle]}>{title}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={[styles.button, style, styles.buttonNotEnable]}>
          <View style={styles.viewText}>
            <Text style={[styles.textMeg, styles.textMegError, titleStyleError]}>{title}</Text>
          </View>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={styles.view}>
        { this._render() }
      </View>
    )
  }
}

var styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMeg: {
    color: '#fff',
    fontSize: px2pr(32),
  },
  textMegError: {
    color: '#878DA0',
  },
  button: {
    height: px2pr(80),
    width: px2pr(280),
    borderRadius: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonNotEnable: {
    backgroundColor: '#585c6c',
  }
})
