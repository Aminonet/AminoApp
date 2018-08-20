import React, {Component} from 'react'
import {
  View,
  Text,
  YellowBox,
  StyleSheet,
} from 'react-native'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
import Toast from 'react-native-easy-toast'
import Loading from './src/component/Loading'
import common from './src/container/common'
import RootNavigator from './src/view/Router'
import px from './src/container/px2dr'
import { connect } from 'react-redux'
import * as actions from './src/redux/action'
import { bindActionCreators } from 'redux'

class Main extends Component {
  componentDidMount() {
    common._toRouter = this._toRouter.bind(this)
    common.showLoading = this.showLoading.bind(this)
    common.hidLoading = this.hidLoading.bind(this)
    common.showToast = this.showToast.bind(this)
  }    
  
  showToast(t) {
    if (t != '' && t != undefined && t != null) {
      this.refs.toast.show(t)
    }
  }

  showLoading() {
    this.refs.loading.show()
  }

  hidLoading() {
    this.refs.loading.hid()
  }

  _toRouter(t) {
    this.refs.root._navigation.navigate(t)
  }

  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref='root'/>
        <Loading ref='loading'/>
        <Toast
          ref='toast'
          position='top'
          style={{padding: px(25)}}
          textStyle={{fontSize: px(18), color: '#fff'}}
          positionValue={px(270)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})

const mapStateToProps = (state) => {
  return {
    value: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
