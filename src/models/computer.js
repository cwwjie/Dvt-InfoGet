export default {
  'namespace': 'computer',

  'state': {
    'router': 'main' // loading preview main result
  },

  'reducers': {
    jumpToRouter(state, data) {
      return {
        ...state,
        'router': data.router
      }
    },
  }
};
