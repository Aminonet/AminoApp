import { createStackNavigator } from 'react-navigation'
import Tab from './Tab'
import Login from './login/login'
import GetCode from './login/forget/getCode'
import ResetPwd from './login/forget/resetPwd'
import Register from './login/register/register'

const RootNavigator = createStackNavigator({
  register: {
    screen: Register,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },
  getCode: {
    screen: GetCode,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },
  register: {
    screen: Register,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },
  login: {
    screen: Login,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },
  resetPwd: {
    screen: ResetPwd,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },

  tab: {
    screen: Tab,
    navigationOptions:()=>{
      return {
        header:null
      }
    }
  },
})
export default RootNavigator
