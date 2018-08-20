import { Dimensions } from 'react-native'
 
const deviceWidthDp = Dimensions.get('window').width
 
const uiWidthPx = 750
 
export default px = (uiElePx) => {
 return uiElePx * deviceWidthDp / uiWidthPx
}
