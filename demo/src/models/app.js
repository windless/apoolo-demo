export const App = {
  state: {
    localContent: '',
    visible: false,
    localTodo: {},
  }, 
  reducers: {
    updateState (state, payload) {
      return {
        ...state,
        ...payload,
      }
    },
    toggleModal(state, payload) {
      return {
        ...state,
        ...payload,
      }
    }
  },
}