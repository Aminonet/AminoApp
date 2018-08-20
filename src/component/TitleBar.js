import React, { Component } from 'react';
import { 
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'
import Styles from '../style/style'
import px2dr from '../container/px2dr'

export default class TitleBar extends Component {
  return() {
    // console.log(this.props)
    this.props.navigation.pop()
  }
  render() {
    return (
      <View style={[styles.header, Styles.fdr, Styles.aic, Styles.jcc]}>
        <TouchableOpacity style={Styles.cell} onPress={this.return.bind(this)}>
          <Image style={{width: px(60), height: px(60), marginLeft: px(30)}} source={require('../img/return3x.png')}></Image>
        </TouchableOpacity>
        <View style={[{flex: 2}, Styles.aic]}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={Styles.cell}>
          {
            this.props.right?
            <TouchableOpacity onPress={() => { this.props.navigation.navigate(this.props.tar)}}>
              <Text style={{color: '#fff', textAlign: 'right', marginRight: px(30), fontSize: px(16)}}>{this.props.right}</Text>
            </TouchableOpacity>
            :null
          }
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  header: {
    backgroundColor: '#353C47',
    ...Platform.select({
      ios: {
        height: px2dr(128),
        paddingTop: px2dr(30)
      },
      android: {
        height: px2dr(120),
      },
    })
  },
  title: {
    textAlign: 'center',
    fontSize: px2dr(36),
    color: '#fff',
  },
})