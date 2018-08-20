import React, { Component } from 'react'
import { 
  View,
  Image,
  Text,
} from 'react-native'
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
import Styles from '../style/style'
import Spinner from './spinner'

export default class LoadingComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.timer = ''
  }
  clear() {
    if (this.timer != '') {
      clearInterval(this.timer)
      this.timer = ''
    }
  }
  show() {
    this.clear()
    this.setState({
      show: true,
    })
  }
  hid() {
    this.clear()
    this.timer = setTimeout(() => {
      this.setState({
        show: false,
      })
    }, 200)
  }
  render() {
    const { visible } = this.props
    let hidden = false
    if (visible == undefined || visible == null) {
      hidden = true
    }
    
    return (
      <View style={{position: 'absolute'}}>
      {
        this.state.show?
          <View style={[{flex: 1,backgroundColor: 'rgba(0, 0, 0, 0.3)', width, height, zIndex: 999}, Styles.alignItemsCenter, Styles.vm]}>
            {/* <Image source={require('./timg.gif')} style={{width: 50, height: 50}}></Image> */}
            <Spinner visible={hidden} textContent={"loading..."} textStyle={{color: '#FFF', zIndex: 999}} />
          </View>
        :null
      }
      </View>
    );
  }
}