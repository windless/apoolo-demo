import React from 'react';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import { Provider } from 'react-redux';
import { message } from 'antd';
import Client from './apolloConfig';
import Store from './storeConfig';
import * as AppQuery from './querys';
import Loading from './loading';
import Input from './input';
import SubmitButton from './submitButton';
import Lists from './list';

const App = _ => {
  const handleRefetch = () => [
    {query: AppQuery.getAllTodoQuery },
  ]
  return (
    <ApolloProvider client={Client}>
      <Provider store={Store}>
        <Query
          query={AppQuery.getAllTodoQuery}
        >
          {
            ({ loading, error, data, refetch }) => {
              if (error) {
                message.error('网络错误', 2);
                return (
                  <p>Eoor...</p>
                )
              }
              const allTodoes = data.allTodoes;
              return (
                <Mutation mutation={AppQuery.deleteTodo} refetchQueries={handleRefetch} >
              {
                (deleteTodo) => {
                    return (
                      <Mutation mutation={AppQuery.updateTodo} refetchQueries={handleRefetch}>
                        {
                          (updateTodo) => {
                            return (
                              <div style={{width: '600px'}}>
                                <div style={{ margin:'0 auto' }}>
                                <Input style={{
                                  width: '300px',
                                  height: '30px',
                                }}/>
                                <SubmitButton refetch={refetch} />
                                {loading ? <Loading /> : <Lists data={allTodoes} deleteTodo={deleteTodo} updateTodo={updateTodo} />}
                                </div>
                              </div>
                            )
                          }
                        }
                      </Mutation>
                    )
                  }
                }
          </Mutation>
              );
            }
          }
          </Query>
      </Provider>
    </ApolloProvider>
   );
}

export default App;
