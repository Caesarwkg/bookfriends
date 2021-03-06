const mongoose = require('mongoose')
const tools = require('../utils/tools')

const userInfoSchema = mongoose.Schema({
  phoneNumber: { type: String }, // 手机号
  password: { type: String }, // 密码
  nickName: { type: String }, // 昵称
  sex: { type: Number }, // 性别: 0: '女'; 1: 男'
  birthday: { type: String }, // 生日
  provinceName: { type: String }, // 所在省
  cityName: { type: String }, // 所在城市
  univercity: { type: String }, // 所在大学
  headIcon: { type: String }, // 头像
  description: { type: String }, // 自我描述
  QRCode: { type: String }, // 二维码
  habbies: { type: Array }, // 喜好
  createTime: { type: String, default: tools.getCurrentTime() }, // 创建时间
  updateTime: { type: String, default: tools.getCurrentTime() } // 更新时间
})

mongoose.model('user', userInfoSchema)
