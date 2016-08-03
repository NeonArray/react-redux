var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
    showCompleted: false,
    todos: []
};

var reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Aaron'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kristin'
});