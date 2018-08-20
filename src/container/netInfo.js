import { 
  NetInfo,
} from 'react-native'
import common from '../container/common'
import isDev from './config'

export default function network() {
  return new Promise(callback => {
      NetInfo.isConnected.fetch().done((isConnected) => {
          console.log('network is' + (isConnected ? 'online' : 'offline'))
          if (isDev) {
            callback(false)
            return {}
          }
          if (!isConnected) {
            common.hidLoading()
            // common._toRouter('')
            callback(true)
          } else {
            callback(false)
          }
      });
  }) 
}