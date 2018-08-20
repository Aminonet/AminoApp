import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  AlertIOS,
  TextInput,
} from 'react-native';
import Styles from './../style/style'
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home'
import Mine from './mine/Mine'
import px2dr from '../container/px2dr'
import common from '../container/common'
import font from '../container/font'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "equipment",
      badgetext: 0,
    }
    navigation = this.props.navigation
    imgs = [
        require('../images/equipment.png'),
        require('../images/equipment_white.png'),
        require('../images/wallet.png'),
        require('../images/wallet_white.png'),
        require('../images/community.png'),
        require('../images/community_white.png'),
        require('../images/more.png'),
        require('../images/more_white.png'),
    ]
    this.items = [
      {
        tab: 'equipment',
        title: font.EUQIPMENT,
        icon: imgs[0],
        selectedIcon: imgs[1],
        component: <Home navigation={navigation}/>,
      },
      {
        tab: 'wallet',
        title: font.WALLET,
        icon: imgs[2],
        selectedIcon: imgs[3],
        component: <Home navigation={navigation}/>,
      },
      {
        tab: 'community',
        title: font.COMMUNITY,
        icon: imgs[4],
        selectedIcon: imgs[5],
        component: <Mine navigation={navigation}/>,
      },
      {
        tab: 'more',
        title: font.MORE,
        icon: imgs[6],
        selectedIcon: imgs[7],
        component: <Mine navigation={navigation}/>,
      }
    ]
  }

  Item(item, index) {
    return (
      <TabNavigator.Item
        tabBarStyle={styles.tab}
        selected={this.state.selectedTab === item.tab}
        title={item.title}
        titleStyle={styles.titleStyle}
        selectedTitleStyle={{color:"#fff"}}
        renderIcon={() => <Image style={styles.icon} source={item.icon} />}
        renderSelectedIcon={() => <Image style={[styles.icon]} source={item.selectedIcon} />}
        // badgeText="1"
        // renderBadge={() =>
        //   this.state.badgetext == 0?null:
        //   <View style={styles.badge}>
        //     <Text style={styles.badgeText}>{this.state.badgetext}</Text>
        //   </View>
        // }
        key={index}
        onPress={() => this.setState({ selectedTab: item.tab })}>
        {item.component}
    </TabNavigator.Item>
    )
  }

  render() {
    return (
      <TabNavigator tabBarStyle={[Styles.shadow, styles.tab]}>
        {
          this.items.map((temp, index) => {
            return this.Item(temp, index)
          })
        }
      </TabNavigator>
  )}
}
const styles = StyleSheet.create({
  icon:{
    width: px2dr(48),
    height: px2dr(48),
  },
  titleStyle: {
    marginBottom: px2dr(5),
    fontSize: px2dr(24),
  },
  badge: {
    backgroundColor: 'rgb(230, 30, 4)',
    width: px2dr(16),
    height: px2dr(16),
    borderRadius: px2dr(8),
  },
  badgeText: {
    textAlign: 'center',
    color: '#fff',
  },
  tab: {
    backgroundColor: 'rgb(40, 45, 55)',
    zIndex: 200,
  },
})
