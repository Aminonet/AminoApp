import { StyleSheet } from 'react-native'
import px2dr from '../container/px2dr'

var Styles = StyleSheet.create({
  fdr: {
    flexDirection: 'row',
  },
  fdc: {
    flexDirection: 'column',
  },
  cell: {
    flex: 1,
  },
  tc: {
    textAlign: 'center',
  },
  aic: {
    alignItems: 'center',
  },
  asc: {
    alignSelf: 'center'
  },
  ase: {
    alignSelf: 'flex-end'
  },
  ass: {
    alignSelf: 'flex-start'
  },
  jcc: {
    justifyContent: 'center',
  },
  jce: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#20252D',
    paddingLeft: px2dr(40),
    paddingRight: px2dr(40),
  },
  label: {
    fontSize: px2dr(36),
    color: '#fff',
    marginTop: px2dr(60),
    marginBottom: px2dr(40),
  },
})
export default Styles
