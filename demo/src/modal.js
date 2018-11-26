import React from 'react';
import { Modal, Input } from 'antd';

export default ({ visible, handleOk, handleCancel, localTodo, updateState }) => {
  const handleOnChange = e => {
    const currentValue = e.target.value;
    updateState({
      localTodo: {
        ...localTodo,
        content: currentValue,
      },
    })
  }
  return (
    <Modal
      title="更新代办事项"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input value={localTodo.content} onChange={handleOnChange}/>
    </Modal>
  )
}