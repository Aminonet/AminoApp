import React, { Component } from 'react';
import { 
  View,
  Text,
} from 'react-native';
import px from '../../container/px2dr'
import { connect } from 'react-redux'
import * as actions from '../../redux/action'
import { bindActionCreators } from 'redux'
import TitleBar from '../../component/TitleBar'
import common from '../../container/common'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      scroe: 0
    }
  }


  render() {
    console.log(this.props)

    return (
      <View>
        <TitleBar navigation={this.props.navigation} title="home"></TitleBar>
        <View>
          <Text style={{fontSize: px(30)}}>Home</Text>
          <Text onPress={ () => this.props.dispatch.changeText('212') }>{this.props.value.score}</Text>
          <Text>{this.state.score}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
