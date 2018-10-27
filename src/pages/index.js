import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import { IdCard } from 'components'

export default class extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  toDemo = () => {
    this.props.history.push('/demo')
  }

  render() {
    return (
      <div className={styles.normal}>
        <IdCard/>
        <Button onClick={() => this.toDemo()}>toDemo</Button>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
        </ul>
      </div>
    );
  }
}
