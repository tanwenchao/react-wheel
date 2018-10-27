/**
 * [判断是否为手机号]
 * @param  {[String|Number]} str [description]
 * @return {[Boolean]}     [Boolean]
 */
export const isPhone = (str) => {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 * 去除空格
 * @param  {[String]} string [字符串]
 * @return {[String]}        [string]
 */
export const trim = (string) => {
  return string.replace(/^\s+|\s+$/gm, '');
}

/**
 * 是否数字
 * @param  {[value]} value [数字]
 * @return {[boolean]}        [boolean]
 */
export const isNumber = (value) => { 
  return Object.prototype.toString.call(value).slice(8, -1) === 'Number'
}

/**
 * 是否身份证号
 * @param  {[isCard]} string [字符串]
 * @return {[boolean]}        [boolean]
 */
export const isCard = (idCard) => {
  //15位和18位身份证号码的正则表达式
  var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  //如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length === 18) {
      var idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] //将前17位加权因子保存在数组里
      var idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2] //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
      for (var i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
      }
      var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
      var idCardLast = idCard.substring(17);//得到最后一位身份证号码
      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod === 2) {
        if (idCardLast === 'X' || idCardLast === 'x') {
          return true;
          //alert("恭喜通过验证啦！");
        } else {
          return false;
          //alert("身份证号码错误！");
        }
      } else {
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast - 0 === idCardY[idCardMod] - 0) {
          //alert("恭喜通过验证啦！");
          return true;
        } else {
          return false;
          //alert("身份证号码错误！");
        }
      }
    }
  } else {
    //alert("身份证格式不正确!");
    return false;
  }
}


/**
 * 比较两个对象是否相等
 * @return {[boolean]}        [boolean]
 */
export const objectDiff = (obj1, obj2) => {
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {/*  判断不是对象  */
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
    //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
  }

  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object;
    var t2 = obj2[attr] instanceof Object;
    if (t1 && t2) {
      return objectDiff(obj1[attr], obj2[attr]);
    } else if (obj1[attr] !== obj2[attr]) {
      return false;
    }
  }
  return true;
}