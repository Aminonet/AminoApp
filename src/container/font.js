const language = 'chinese'
// const language = 'english'
let font = {}
if (language == 'chinese') {
  font = {
    LANGUAGE: 'chinese',
    LOGIN: '登录',
    ACCOUNT: '账号',
    PASSWORD: '密码',
    FORGET_PASSWORD: '忘记密码',
    LOGIN_ERROR: '账号或密码输入错误',
    NO_ACCOUNT: '还没有账号',
    LOGIN_PWD_ERROR: '错误',
    LOGIN_PWD_PLACEHOLDER: '请输入6-16位字母和数字的密码',
    TO_REGISTER: '立即注册',
    EUQIPMENT: '设备',
    WALLET: '钱包',
    COMMUNITY: '社区',
    MORE: '更多',
    PHONE: '手机号码',
    GETCODE: '获取验证码',
    CODE: '验证码',
    INPUT_CODE: '请输入验证码',
    INPUT_PHONE: '请输入手机号码',
    NEXT_STEP: '下一步',
    NEW_PASSWORD: '新密码',
    CONFIRM_PASSWORD: '确认密码',
    NEW_PWD_PLACEHOLDER: '请输入6-16位新密码',
    CONFIRM_PWD_PLACEHOLDER: '请再次输入新密码',
    CONFIRM: '确认',
    REGISTER: '注册',
    TO_LOGIN: '去登录',
  }
} else {
  font = {
    LANGUAGE: 'english',
  }
}


export default font
