import React from 'react';
import { Button } from 'antd';

export default ({ clickedTodo, showModal }) => {
  return (
    <Button style={{ height: '22px', marginTop: '2px' }} onClick={showModal} >
    修改
    </Button>
  );
}