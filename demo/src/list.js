import React, { Fragment } from 'react'
import { Tag, message} from 'antd';
import { connect } from 'react-redux';
import ChangeButton from './changeButton';
import MyModal from './modal';
// import * as AppQuery from './querys';

const list =  ({ data, deleteTodo, updateTodo, visible, toggleModal, localTodo, updateState }) => {
  const handleDelete = (id) => {
    deleteTodo({
      variables: {
        id,
      }
    })
    message.success('删除成功', 2);
  }
  const handleToggleState = (todo) => {
    const {
      id,
      content,
      finished,
    } = todo;
    updateTodo({
      variables: {
        id,
        content,
        finished: !finished,
      }
    })
  }
  const handleUpdateTodo = (todo) => {
    const {
      id,
      content,
      finished,
    } = todo;
    updateTodo({
      variables: {
        id,
        content,
        finished,
      }
    })
    handleCancel();
  }
  const handleShowModal = (todo) => {
    toggleModal({
      visible: true,
      localTodo: todo,
    })
  };
  const handleCancel = _ => {
    toggleModal({
      visible: false,
    })
  }
  return (
   <div style={{ width: '500px' }}>
     {
      data.map(todo => (
        <div style={{ marginTop: '10px' }} key={todo.id.toString()}>
          {
            todo.finished ?
            <Fragment>
              <div style={{ display: 'inline-block' }} onClick={e => handleToggleState.bind(this)(todo) }>
              <Tag
              closable
              onClose={e => handleDelete.bind(this)(todo.id)}
              color="red"
              
              >
                <span style={{ textDecoration:"line-through" }}>{todo.content}</span>
              </Tag>
              </div>
             <ChangeButton showModal={handleShowModal.bind(this, todo)} />
            </Fragment>
          :
          <Fragment>
            <div style={{ display: 'inline-block' }} onClick={e => handleToggleState.bind(this)(todo) }>
            <Tag
            closable
            onClose={e => handleDelete.bind(this)(todo.id)}
            >
              <span>{todo.content}</span>
            </Tag>
            </div>
            <ChangeButton showModal={handleShowModal.bind(this, todo)}/>
          </Fragment>
          }
        </div>
      ))
     }
     {
       visible && <MyModal visible={visible} handleOk={handleUpdateTodo.bind(this, localTodo)} handleCancel={handleCancel} localTodo={localTodo} updateState={updateState} />
     }
   </div>
  )
}
const mapStateToProps = ({ App: { visible, localTodo } }) => ({
  visible,
  localTodo,
});

const mapDispatchToProps = ({ App: { toggleModal, updateState } }) => ({
  toggleModal,
  updateState,
});

export default connect(mapStateToProps, mapDispatchToProps)(list);