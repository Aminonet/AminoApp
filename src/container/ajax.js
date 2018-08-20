import { 
    AsyncStorage,
} from 'react-native';
import URL from './url'
import common from './common'
let common_url = URL.baseUrl
import netInfo from './netInfo'

async function ajax(tar_url, method, params = ''){
    common.showLoading()
    const noNetwork = await netInfo().then(res => {
        console.log(res)
        return res
    })
    if (noNetwork) {
        return {}
    }

    let url = common_url + tar_url
    if (method == 'get' && params != '') {
        url += '?'
        const keys = Object.keys(params)
        for (const k of keys) {
            url += `${k}=${params[k]}`
        }
    }
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
    };
    await AsyncStorage.getItem('user').then(value => {
        const values = JSON.parse(value)
        if (value != null) {
            header.Authorization = values.AccessToken
            header.isMobile = true
        }
    }).catch(err => {});
    console.log('header')
    console.log(header)
    if(params == ''){   // no params
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: method,
                headers: header
            }).then((response) => response.json())
                .then((responseData) => {
                    // if (responseData.status == '3') {
                    //     readux._toRouter('login')
                    // }
                    console.log('res:')
                    console.log(responseData)
                    resolve(responseData)
                    common.hidLoading()
                })
                .catch( (err) => {
                    console.log('err:');    
                    console.log(err)
                    reject(err);
                    common.hidLoading()
                })
        })
    }else{
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: method,
                headers: header,
                body: JSON.stringify(params)
            }).then(response => response.json())
                .then((responseData) => {
                    // if (responseData.status == '3') {
                    //     common._toRouter('login')
                    // }
                    console.log('res:')
                    console.log(responseData)
                    resolve(responseData)
                    common.hidLoading()
                })
                .catch( (err) => { 
                    console.log('err:')       
                    console.log(err)
                    reject(err)
                    common.hidLoading()
                });
        });
    }
}
export default ajax