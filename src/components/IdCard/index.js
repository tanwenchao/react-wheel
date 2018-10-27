import React from 'react';
import { Input, Icon, Tooltip, message } from 'antd'
import { trim, isCard } from 'utils/helper'
// import { formatIdCard } from 'utils/format'

const Search = Input.Search

export default class IdCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (this.state.value !== nextProps.defaultValue) {
      this.setState({
        value: nextProps.defaultValue
      })
    }
  }

  onChange = (e) => {
    // const value = trim(e.target.value)
    // const reg = /^[0-9a-zA-Z]*$/
    // if (reg.test(value) || value === '' || value === '-') {
    //   this.setState({
    //     value: value
    //   })
    // }
    const value = trim(e.target.value)
    // const reg = /^[0-9a-zA-Z]*$/
    this.setState({
      value: value
    })
  }

  handleEmpty = () => {
    this.setState({
      value: ''
    })
  }

  doSearch = (value) => {
    if (value === '') {
      if (this.props.passEmpty) {
        this.props.getResult
          && this.props.getResult({
            value,
            type: 'empty',
            success: true
          })
        return
      } else {
        message.error('请输入姓名或身份证号码')
        this.props.getResult
          && this.props.getResult({
            value,
            type: 'empty',
            success: false
          })
        return
      }
    }
    // 判断输入的是身份证号还是姓名
    // 身份证
    const reg = /^[0-9a-zA-Z]*$/
    if (reg.test(value)) {
      if (!isCard(value)) {
        return message.error('请输入正确的身份证号码')
      }
      this.props.getResult
        &&
      this.props.getResult({
        value,
        type: 'idCard',
        success: isCard(value)
      })
    } else {
      this.props.getResult({
        value,
        type: 'userName',
        success: true
      })
    }
  }

  render() {
    const {
      placeholder = '请输入姓名或身份证号码',
      enterText = '搜索',
      size = "large"
    } = this.props

    const {
      value,
    } = this.state

    const suffix = value ? 
      <Icon key="1" type="close-circle" size="large" style={{ marginRight: 10, cursor: 'pointer'}} onClick={this.handleEmpty} />
    : null;

    // const title = value ? (
    //   <span className="numeric-input-title">
    //     {formatIdCard(value)}
    //   </span>
    // ) : '请输入身份证号码';
    const title = '请输入姓名或身份证号码'
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Search
          placeholder={placeholder}
          enterButton={enterText}
          suffix={suffix}
          size={size}
          value={this.state.value}
          onChange={this.onChange}
          onSearch={value => this.doSearch(value)}
        />
      </Tooltip>
    );
  }
}
