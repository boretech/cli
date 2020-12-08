/*
 * @Author: allen.wong 
 * @Date: 2020-11-25 16:18:53 
 * @Last Modified by: allen.wong
 * @Last Modified time: 2020-12-08 15:44:28
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

const errors = [
  "验证通过!",
  "身份证号码位数不对!",
  "身份证号码出生日期超出范围或含有非法字符!",
  "身份证号码校验错误!",
  "身份证地区非法!"
]

const idcard = idStr => {
  // 检验输入数据类型
  if (typeof idStr !== 'string') {
    console.log(`error: ${errors[2]}`)
    return false
  }

  // 检验地区
  if (area[+idStr.substr(0, 2)] === null) {
    console.log(`error: ${errors[4]}`)
    return false
  }

  // 身份证位数及格式验证
  if (idStr.length === 18) {
    const idArr = idStr.split('')
    const year = +idStr.substr(6, 4)
    const reg = (!(year % 4) || !(year % 100) && !(year % 400)) ? /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/

    if (reg.test(idStr)) {
      // 计算校验位
      const S = (+idArr[0] + (+idArr[10])) * 7 + (+idArr[1] + (+idArr[11])) * 9 + (+idArr[2] + (+idArr[12])) * 10 + (+idArr[3] + (+idArr[13])) * 5 + (+idArr[4] + (+idArr[14])) * 8 + (+idArr[5] + (+idArr[15])) * 4 + (+idArr[6] + (+idArr[16])) * 2 + (+idArr[7]) * 1 + (+idArr[8]) * 6 + (+idArr[9]) * 3
      const JYM = '10x98765432'
      const M = JYM.substr(S % 11, 1)
      if (M === idArr[17].toLowerCase()) {
        return true
      } else {
        console.log(`error: ${errors[3]}`)
        return false
      }
    } else {
      console.log(`error: ${errors[3]}`)
      return false
    }
  } else {
    console.log(`error: ${errors[1]}`)
    return false
  }
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