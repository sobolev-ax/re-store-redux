import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const stringMiddleware = (store) => (next) => (action) => {
    console.log(store.getState());

  if (typeof action === "string") {
    return next({
      type: action,
  })}
  return next(action)
}

const logMiddleware = () => (dispatch) => (action) => {
  console.log(action.type);
  return dispatch(action);
}

const store = createStore(reducer, applyMiddleware(
  stringMiddleware,
  logMiddleware,
));
store.dispatch("HELLO");

///// ENHANCERS

// const stringEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);

//   const originalDispatch = store.dispatch;

//   store.dispatch = (action) => {
//     if (typeof action === "string") {
//       return originalDispatch({
//         type: action,
//       })
//     }

//     return originalDispatch(action)
//   }
//   return store;
// }

// const logEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);

//   const originalDispatch = store.dispatch;

//   store.dispatch = (action) => {
//     console.log(action.type);

//     return originalDispatch(action)
//   }
//   return store;
// }

// const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

export default store;
