/*
 * @Author: allen.wong 
 * @Date: 2020-11-25 16:18:53 
 * @Last Modified by: allen.wong
 * @Last Modified time: 2020-11-27 17:44:56
 */

const area = {
  11: "北京",
  12: "天津",
  13: "河北",
  14: "山西",
  15: "内蒙古",
  21: "辽宁",
  22: "吉林",
  23: "黑龙江",
  31: "上海",
  32: "江苏",
  33: "浙江",
  34: "安徽",
  35: "福建",
  36: "江西",
  37: "山东",
  41: "河南",
  42: "湖北",
  43: "湖南",
  44: "广东",
  45: "广西",
  46: "海南",
  50: "重庆",
  51: "四川",
  52: "贵州",
  53: "云南",
  54: "西藏",
  61: "陕西",
  62: "甘肃",
  63: "青海",
  64: "宁夏",
  65: "新疆",
  71: "台湾",
  81: "香港",
  82: "澳门",
  91: "国外"
}

const idcard = (idStr) => {
  return false
}

export default (type, value) => {
  let reg
  switch (type) {
    case 'name':
      reg = /^[\u4E00-\u9FA5]{2,6}$/
      break;
    case 'tel':
      reg = /^1[3456789][0-9]\d{8}$/
      break;
    case 'email':
      reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      break;
    case 'idcard':
      return idcard(value)
    default:
      return console.error({
        errMsg: '没有对应的数据检测类型'
      })
  }

  return reg.test(value)
}