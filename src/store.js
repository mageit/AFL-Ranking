import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import {loadPlayersFromJson} from './actions/actions';

const reducer = combineReducers({
    ...reducers
});

/**
 * Create redux store
 *
 * @type {Store}
 */
export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

//Display an action to load initial state
store.dispatch(
    loadPlayersFromJson(100)
);