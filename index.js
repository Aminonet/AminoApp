import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import Main from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}
AppRegistry.registerComponent(appName, () => App);
