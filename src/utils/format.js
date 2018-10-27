/**  
 * 格式化时间  
 *   
 * @param  {time} 时间  
 * @param  {cFormat} 格式  
 * @return {String} 字符串  
 *  
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00  
 */
export const formatDate = (strTime, cFormat) => {
  if (!strTime) return ''
  if (arguments.length === 0) return null
  if ((strTime + '').length === 10) {
    strTime = +strTime * 1000
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}', date
  if (typeof strTime === 'object') {
    date = strTime
  } else {
    date = new Date(strTime)
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }

  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    var value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str  
}

/**
 * 格式化手机号为334格式
 * @param  {[mobile]} mobile [时间字符串]
 * @return {[String]}         [string]
 */
export const formatPhone = (mobile) => {
  var value = mobile.replace(/\D/g, '').substring(0, 11)
  var valueLen = value.length
  if (valueLen > 3 && valueLen < 8) {
    value = value.replace(/^(...)/g, "$1 ")
  } else if (valueLen >= 8) {
    value = value.replace(/^(...)(....)/g, "$1 $2 ")
  }
  return value
}

/**
 * 格式化身份证号
 * @param  {[value]}  string [身份证号]
 * @return {[String]}         [string]
 * 
 * @example formatIdCard('430222111211111121') // -> 430-222-1112-1111-1121
 */
export const formatIdCard = (value) => {
  return value.replace(/(\d{3})(\d{3})(\d{4})(\d{4})(\d{4})/g, '$1-$2-$3-$4-$5');
}

/**
 * 加密身份证号
 * @param  {[value]}  string [身份证号]
 * @return {[String]}         [string]
 * 
 * @example encryptCard('430222111211111121') // -> 430-222-1112-1111-1121
 */
export const encryptCard = (card) => {
  if (!card) return ''
  return card.replace(card.substring(6, 14), '********')
}
