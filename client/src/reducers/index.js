import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialUserState = {
    currentUser: null,
    isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            }
        case actionTypes.CLEAR_USER:
            return {
                ...initialUserState,
                isLoading: false
            }
        default:
            return state;
    }
}

const initialQueryState = {
    currentQuery: null,
    isLoading: true
}

const query_reducer = (state = initialQueryState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_QUERY:
            return {
                ...state,
                currentQuery: action.payload.currentQuery,
                isLoading: false
            };
        default:
            return state;
    }
}

const initialNotificationState = {
    notification: null
}

const notification_reducer = (state = initialNotificationState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_NOTIFICATION:
            return {
                ...state,
                currentNotification: action.payload.currentNotification
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user: user_reducer,
    query: query_reducer,
    notification: notification_reducer
})

export default rootReducer;