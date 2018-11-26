import gql from "graphql-tag";

export const createTodo = gql `
 mutation CreateTodo ($content: String!, $finished: Boolean!) {
   createTodo (content: $content, finished: $finished) {
     id,
     content,
     finished,
   }
 }
`;

export const deleteTodo = gql `
 mutation DeleteTodo ($id: ID!) {
  deleteTodo (id: $id) {
     id,
     content,
     finished,
   }
 }
`;

export const updateTodo = gql `
 mutation UpdateTodo ($id: ID!, $content: String!, $finished: Boolean!) {
  updateTodo(id: $id, content: $content, finished: $finished) {
    id,
    content,
    finished,
  }
 }
`;

export const getAllTodoQuery = gql `
 {
   allTodoes {
     id
     content
     finished
   }
 }
`;