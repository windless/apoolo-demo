import React from 'react';
import { Spin, Icon, } from 'antd';

import 'antd/dist/antd.css';
import './css/loading.css';

export default () => {
  return (
    <div className="loadingWrapper">
        <Spin 
          indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}
        />
    </div>
  )
}