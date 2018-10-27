import { Badge } from 'antd'
// 过滤受理状态
export const filterAcceptStatus = (status, text) => {
  return (status === '1' && <Badge status="error" text="待受理" />) ||
    (status === '2' && <Badge status="success" text="已受理" />) ||
    (status === '3' && <Badge status="processing" text="回复结果" />) || <Badge status="default" text={text} />
}

// 投诉类型
export const filterComplaintType = (typeCode, type) => {
  return (typeCode === '1' && '民生资金') ||
    (typeCode === '2' && '干部作风') ||
    (typeCode === '3' && '四风问题') ||
    (typeCode === '4' && '扶贫领域') ||
    (typeCode === '5' && '其他问题') || type
}

// 反应类型
export const filterReactionType = (typeCode, typeSubCode) => {
  // 1 民生资金 2 民生项目  3 精准扶贫 4 三务公开
  if (typeCode === '1') {
    return '民生资金'
  } else if (typeCode === '2') {
    return '民生项目'
  } else if (typeCode === '3') {
    if (typeSubCode === '1') {
      return '精准扶贫 - 精准识别'
    }
    return '精准扶贫 - 精准脱贫'
  } else if (typeCode === '4') {
    if (typeSubCode === '1') {
      return '三务公开 - 党务公开'
    } else if (typeSubCode === '2') {
      return '三务公开 - 村务公开'
    } else if (typeSubCode === '3') {
      return '三务公开 - 财务公开'
    }
    return '三务公开'
  }
  return '未知'
}

// 各种类型的主题
export const filterTheme = (type_code, theme_code, theme, type_sub_code) => {
  // 1 民生资金 2 民生项目  3 精准扶贫 4 三务公开
  if (type_code === '1') {
    return (theme_code === '1' && '金额不对') ||
      (theme_code === '2' && '无领取资格') ||
      (theme_code === '3' && '重复发放') ||
      (theme_code === '4' && '数据有误') ||
      (theme_code === '5' && '对象已死亡') ||
      (theme_code === '6' && '其他') || theme
  } else if (type_code === '2') {
    return (theme_code === '1' && '资金不对') ||
      (theme_code === '2' && '项目内容与实际不符') ||
      (theme_code === '3' && '承建单位有不正当行为') ||
      (theme_code === '4' && '其他') || theme
  } else if (type_code === '3') {
    return (theme_code === '1' && '实情与公布信息不符') ||
      (theme_code === '2' && '该家庭不属于真实贫困户') ||
      (theme_code === '3' && '其他') || theme
  } else if (type_code === '4') {
    if (type_sub_code === '1') {
      return (theme_code === '1' && '入党信息有误') ||
        (theme_code === '2' && '不符合党员身份') ||
        (theme_code === '3' && '其他') || theme
    } else if (type_sub_code === '3') {
      return (theme_code === '1' && '金额不对') ||
        (theme_code === '2' && '信息有误') ||
        (theme_code === '3' && '其他') || theme
    }
  }
}