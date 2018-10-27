import axios from './axios-set'

// ========================  公共接口 =========================

/****** 民生政策 ******/
// 列表
export const peoplePolicyList = (params, data) => {
  return axios.get('/peoplePolicy/list', { params, ...data })
}
// 详情
export const peoplePolicyDetail = (params, data) => {
  return axios.get('/peoplePolicy/detail', { params, ...data })
}


/****** 民生资金 ******/
// 地区列表
export const areaList = (params, data) => {
  return axios.get('/area/list', { params, ...data })
}

// 根据地区筛选列表
export const moneyAreaList = (params, data) => {
  return axios.get('/money/areaList', { params, ...data })
}

// 资金类别
export const moneyType = (params, data) => {
  return axios.get('/money/type', { params, ...data })
}

// 资金详情
export const moneyDetail = (params, data) => {
  return axios.get('/money/detail', { params, ...data })
}

// 反应情况
export const moneyReport = (data) => {
  return axios.post('/money/report', { ...data })
}


/****** 监督举报 ******/
// 做投诉
export const postComplain = (data) => {
  return axios.post('/supervise/complain', { ...data })
}
// 投诉举报的记录
export const complainList = (params, data) => {
  return axios.get('/supervise/complainList', { params, ...data })
}
// 投诉举报的记录 详情
export const complainDetail = (params, data) => {
  return axios.get('/supervise/complainDetail', { params, ...data })
}
// 反应情况的记录
export const reactionList = (params, data) => {
  return axios.get('/supervise/reactionList', { params, ...data })
}
// 反应情况的记录 详情
export const reactionDetail = (params, data) => {
  return axios.get('/supervise/reactionDetail', { params, ...data })
}


/****** 民生项目 ******/
// 列表
export const projectList = (params, data) => {
  return axios.get('/project/list', { params, ...data })
}
// 详情
export const projectDetail = (params, data) => {
  return axios.get('/project/detail', { params, ...data })
}


/****** 三务公开 ******/
// 党务公开列表
export const workPartyList = (params, data) => {
  return axios.get('/work/party/list', { params, ...data })
}
// 党务公开详情
export const workPartyDetail = (params, data) => {
  return axios.get('/work/party/detail', { params, ...data })
}
// 村务公开列表
export const workVillageList = (params, data) => {
  return axios.get('/work/village/list', { params, ...data })
}
// 村务公开详情
export const workVillageDetail = (params, data) => {
  return axios.get('/work/village/detail', { params, ...data })
}
// 财务公开列表
export const workFinanceList = (params, data) => {
  return axios.get('/work/finance/list', { params, ...data })
}
// 财务公开详情
export const workFinanceDetail = (params, data) => {
  return axios.get('/work/finance/detail', { params, ...data })
}


/****** 精准扶贫 ******/
/* 扶贫政策 */
// 列表
export const helpPolicyList = (params, data) => {
  return axios.get('/help/policy/list', { params, ...data })
}
// 详情
export const helpPolicyDetail = (params, data) => {
  return axios.get('/help/policy/detail', { params, ...data })
}
/* 精准识别 */
export const helpDiscernList = (params, data) => {
  return axios.get('/help/discern/list', { params, ...data })
}
// 详情
export const helpDiscernDetail = (params, data) => {
  return axios.get('/help/discern/detail', { params, ...data })
}