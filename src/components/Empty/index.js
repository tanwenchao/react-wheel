import React from 'react';
import { Icon } from 'antd'
import "./index.less"

export default class Empty extends React.Component {
  render() {
    const {
      tip = '暂无数据'
    } = this.props
    return (
      <div className="empty-data">
        <Icon type="frown-o" />
        {tip}
      </div>
    );
  }
}
