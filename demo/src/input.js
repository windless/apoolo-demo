import React from 'react';
import { Input } from 'antd';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';

import * as AppQuery from  './querys';

const MyInput = ({ localContent,  updateState ,style}) => {
  return (
   <Mutation mutation={AppQuery.createTodo}>
    {
      (createTodo, { data, error, loading }) => {
        const handleOnChange = e => {
          const currentValue = e.target.value;
          updateState({
            localContent: currentValue,
          });
        }
        return (
            <Input 
              style={style}
              onChange={handleOnChange}
              value={localContent}
            />
         
        );
      }
    }
   </Mutation>
  );
}
const mapStateToProps = ({ App: { localContent } }) => ({
  localContent,
});
const mapDispatchToProps = ({ App: { updateState } }) => ({
  updateState,
})
export default connect(mapStateToProps, mapDispatchToProps)(MyInput);