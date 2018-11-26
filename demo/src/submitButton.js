import React from 'react';
import { Button, message } from 'antd';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import * as AppQuery from './querys';

const MyButton =  ({ handleOnClick, createTodo, refetch }) => {
  return (
    <Button 
    type="primary" 
    onClick={e => handleOnClick.bind(this)(e, createTodo, refetch)}
    >
      保存
    </Button>
  );
};
const MyButtonWithMu = ({ localContent, refetch, updateState }) => {
  const handleOnClick = (e, createTodo) => {
    e.preventDefault();
    createTodo({
      variables: {
        content: localContent,
        finished: false,
      }
    })
    refetch();
    message.success('保存成功', 2);
    updateState({
      localContent: '',
    })
  }
  return (
    <Mutation mutation={AppQuery.createTodo}>
      {
       (createTodo, { data, loading, error }) => {
         return <MyButton handleOnClick={handleOnClick} createTodo={createTodo} />
       }
      }
    </Mutation>
  )
}
const MapStateToProps = ({ App: { localContent } }) => ({
  localContent,
})
const MapDispatchToProps = ({ App: { updateState } }) => ({
  updateState,
})
export default connect(MapStateToProps, MapDispatchToProps)(MyButtonWithMu)
